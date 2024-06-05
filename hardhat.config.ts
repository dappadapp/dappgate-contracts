import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";
import "hardhat-deploy";
import { config } from "dotenv";
config();

module.exports = {
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  zksolc: {
    version: "1.3.10",
    compilerSource: "binary",
    settings: {},
  },
  defaultNetwork: "zkMainnet",
  networks: {
    zkSyncTestnet: {
      url: "https://testnet.era.zksync.dev",
      ethNetwork: "https://goerli.infura.io/v3/" + process.env.INFURA_API_KEY,
      zksync: true,
    },
    zkMainnet: {
      url: "https://mainnet.era.zksync.io/", // URL of the zkSync network RPC
      ethNetwork: "https://eth-mainnet.public.blastapi.io/", // Can also be the RPC URL of the Ethereum network (e.g. https://goerli.infura.io/v3/<API_KEY>)
      zksync: true,
      verifyURL:
        "https://zksync2-mainnet-explorer.zksync.io/contract_verification",
    },
  },
  solidity: {
    version: "0.8.18",
  },
};
