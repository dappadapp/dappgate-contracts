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

  const args = [40000, endpoint, 6000000, 6999999];

  const wallet = new Wallet(process.env.PRIVATE_KEY!);

  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact(
    "contracts/Pass.sol:Dappgate"
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
    contract: "contracts/Pass.sol:Dappgate",
    constructorArguments: args,
  });
  console.log(`Verification status: ${verificationId}`);
}
