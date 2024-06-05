import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import * as dotenv from 'dotenv';


dotenv.config();

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
    console.log(`Running deploy script for the DappadVesting contract`);

    const wallet = new Wallet(process.env.PRIVATE_KEY!);

    const fs = require('fs');
    const path = require('path');

    const filePath = path.join(__dirname, '../constants/token.json');
    const rawdata = fs.readFileSync(filePath);
    const data = JSON.parse(rawdata);
    console.log(data);

    const tokenAddress: string = data.address;

    const deployer = new Deployer(hre, wallet);
    const artifact = await deployer.loadArtifact("DappadVesting");

    console.log("Deployer has eth=" + await deployer.ethWallet.getBalance());
    console.log("Deployer has zk=" + await deployer.zkWallet.getBalance());

    const args = [tokenAddress];

    const deploymentFee = await deployer.estimateDeployFee(artifact, args);

    // OPTIONAL: Deposit funds to L2
    // Comment this block if you already have funds on zkSync.
    //const depositHandle = await deployer.zkWallet.deposit({
    //    to: deployer.zkWallet.address,
    //    token: utils.ETH_ADDRESS,
    //    amount: deploymentFee.mul(2),
    //});

    // Wait until the deposit is processed on zkSync
    // await depositHandle.wait();

    // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
    // `greeting` is an argument for contract constructor.
    const parsedFee = ethers.utils.formatEther(deploymentFee.toString());
    console.log(`The deployment is estimated to cost ${parsedFee} ETH`);

    const tokenContract = await deployer.deploy(artifact, args);

    //obtain the Constructor Arguments
    console.log("constructor args:" + tokenContract.interface.encodeDeploy(args));

    // Show the contract info.
    const contractAddress = tokenContract.address;
    console.log(`${artifact.contractName} was deployed to ${contractAddress}`);

    const verificationId = await hre.run("verify:verify", {
        address: contractAddress,
        contract: "contracts/DappadVesting.sol:DappadVesting",
        constructorArguments: args
    });
    console.log(`Verification status: ${verificationId}`);

    const dirPath = path.join(__dirname, '../constants');
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    const pf = path.join(dirPath, 'vesting.json');
    fs.writeFileSync(pf, JSON.stringify({
        contractAddress: contractAddress,
    }));
}
