import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import * as dotenv from "dotenv";

dotenv.config();

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the DappGate contract`);

  const endpoint: string = "0x9b896c0e23220469C7AE69cb4BbAE391eAa4C8da";

    // Replace the following parameters with your actual values
    const name = "Your Launchpad Name";
    const maxCap = 1000000; // Set your desired max cap
    const saleStart = Math.floor(Date.now() / 1000) + 3600; // One hour from now
    const saleEnd = saleStart + 604800; // Sale duration: one week
    const noOfTiers = 3; // Set the number of tiers
    const projectOwner = "0x3D6a34D8ECe4640adFf2f38a5bD801E51B07e49C";
    const tokenAddress = "0x6a1B219d58F13dB884e0179cfe1C49c0cFDd2BD3";
    const nftContractAddress = "0x9085bae210e7a9fC35f2dcE4c9D72213b4Db53d0";
    const totalUsers = 1000; // Set your desired total users
    const phaseNo = 1; // Set your desired phase number

  const args = [  name,
    maxCap,
    saleStart,
    saleEnd,
    noOfTiers,
    projectOwner,
    tokenAddress,
    nftContractAddress,
    totalUsers,
    phaseNo];

  const wallet = new Wallet(process.env.PRIVATE_KEY!);

  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact(
    "contracts/DappadDOPUSDCMerkle.sol:DappadLaunchpad"
  );

  console.log("Deployer has eth=" + (await deployer.ethWallet.getBalance()));
  console.log("Deployer has zk=" + (await deployer.zkWallet.getBalance()));

  const deploymentFee = await deployer.estimateDeployFee(artifact, args);


  const parsedFee = ethers.utils.formatEther(deploymentFee.toString());
  console.log(`The deployment is estimated to cost ${parsedFee} ETH`);

  const oftContract = await deployer.deploy(artifact, args);
  const contractAddress = oftContract.address;
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`);

  const verificationId = await hre.run("verify:verify", {
    address: contractAddress,
    contract: "contracts/DappadDOPUSDCMerkle.sol:DappadLaunchpad",
    constructorArguments: args,
  });
  console.log(`Verification status: ${verificationId}`);
}
