import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import * as dotenv from 'dotenv';


dotenv.config();


//@todo ignore rates, its updating soon
const config = [
    {
        "name": "Dappad 14 days staking",
        "rate": 42,
        "lockDuration": 14 * 24
    },
    {
        "name": "Dappad 30 days staking",
        "rate": 205,
        "lockDuration": 30 * 24
    },
    {
        "name": "Dappad 90 days staking",
        "rate": 1849,
        "lockDuration": 90 * 24
    }
];

export default async function (hre: HardhatRuntimeEnvironment) {
    console.log(`Running deploy script for the DappadStake contract`);

    const fs = require('fs');
    const path = require('path');

    const filePath = path.join(__dirname, '../constants/token.json');
    const rawdata = fs.readFileSync(filePath);
    const data = JSON.parse(rawdata);
    console.log(data);

    const tokenAddress: string = data.address;

    const wallet = new Wallet(process.env.PRIVATE_KEY!);

    const deployer = new Deployer(hre, wallet);
    const artifact = await deployer.loadArtifact("DappadStake");

    console.log("Deployer has eth=" + await deployer.ethWallet.getBalance());
    console.log("Deployer has zk=" + await deployer.zkWallet.getBalance());

    const addresses: any[] = [];
    for (const cfg of config) {
        const name: string = cfg.name;
        const rate: ethers.BigNumber = ethers.BigNumber.from(cfg.rate);
        const lockDuration: ethers.BigNumber = ethers.BigNumber.from(cfg.lockDuration);

        const args = [
            name,
            tokenAddress,
            rate,
            lockDuration
        ];

        const deploymentFee = await deployer.estimateDeployFee(artifact, args);

        const parsedFee = ethers.utils.formatEther(deploymentFee.toString());
        console.log(`The deployment of ${name} is estimated to cost ${parsedFee} ETH`);

        const tokenContract = await deployer.deploy(artifact, args);

        //obtain the Constructor Arguments
        console.log("constructor args:" + tokenContract.interface.encodeDeploy(args));

        // Show the contract info.
        const contractAddress = tokenContract.address;
        console.log(`${name} - ${artifact.contractName} was deployed to ${contractAddress}`);

        const verificationId = await hre.run("verify:verify", {
            address: contractAddress,
            contract: "contracts/DappadStake.sol:DappadStake",
            constructorArguments: args
        });
        console.log(`Verification status: ${verificationId}`);

        addresses.push({
            name: name,
            address: contractAddress
        });
    }

    addresses.forEach((address) => {
        console.log(`${address.name} - ${address.address}`);
    });

    const dirPath = path.join(__dirname, '../constants');
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    const pf = path.join(dirPath, 'stake.json');
    fs.writeFileSync(pf, JSON.stringify({
        addresses
    }));
}
