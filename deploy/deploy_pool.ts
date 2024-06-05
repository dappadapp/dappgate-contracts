import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import * as dotenv from 'dotenv';

dotenv.config();

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
    console.log(`Running deploy script for the DappadPool contract`);

    /*
        string memory _name,
        uint256 _maxCap,
        uint256 _saleStart,
        uint256 _saleEnd,
        uint256 _noOfTiers,
        address _projectOwner,
        address _tokenAddress,
        uint256 _totalUsers,
        uint8 _phaseNo
     */
    const name: string = "name goes here";
    const maxCap: number = 1000000;
    const saleStart: number = 1683672879 + 10000;
    const saleEnd: number = 1683672879 + 100000;
    const noOfTiers: number = 1;
    const projectOwner: string = "0x037DA8c3C577D690137aA469C1B69E0b2103cBf4";
    const tokenAddress: string = "0x64948A991A2Bd3B9A185EeaABEB046eB390209C1";
    const totalUsers: number = 5;
    const phaseNo: number = 0;

    const args = [
        name,
        maxCap,
        saleStart,
        saleEnd,
        noOfTiers,
        projectOwner,
        tokenAddress,
        totalUsers,
        phaseNo
    ];

    const wallet = new Wallet(process.env.PRIVATE_KEY!);

    const deployer = new Deployer(hre, wallet);
    const artifact = await deployer.loadArtifact("DappadPool");

    console.log("name=" + name);
    console.log("maxCap=" + maxCap);
    console.log("saleStart=" + saleStart);
    console.log("saleEnd=" + saleEnd);
    console.log("noOfTiers=" + noOfTiers);
    console.log("projectOwner=" + projectOwner);
    console.log("tokenAddress=" + tokenAddress);
    console.log("totalUsers=" + totalUsers);
    console.log("phaseNo=" + phaseNo);

    console.log("Deployer has eth=" + await deployer.ethWallet.getBalance());
    console.log("Deployer has zk=" + await deployer.zkWallet.getBalance());

    const deploymentFee = await deployer.estimateDeployFee(artifact, args);

    const parsedFee = ethers.utils.formatEther(deploymentFee.toString());
    console.log(`The deployment is estimated to cost ${parsedFee} ETH`);

    const tokenContract = await deployer.deploy(artifact,
        args);

    //obtain the Constructor Arguments
    console.log("constructor args:" + tokenContract.interface.encodeDeploy(args));

    // Show the contract info.
    const contractAddress = tokenContract.address;
    console.log(`${artifact.contractName} was deployed to ${contractAddress}`);

    const verificationId = await hre.run("verify:verify", {
        address: contractAddress,
        contract: "contracts/DappadPool.sol:DappadPool",
        constructorArguments: args
    });
    console.log(`Verification status: ${verificationId}`);

    const fs = require('fs');
    const path = require('path');

    const dirPath = path.join(__dirname, '../constants');
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    const filePath = path.join(dirPath, 'pool_' + name.trim().replace(" ", "_") + '.json');
    fs.writeFileSync(filePath, JSON.stringify({
        address: contractAddress,
        args: args
    }));
}
