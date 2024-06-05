#!/bin/sh
echo "Deploying the project..."

yarn hardhat deploy-zksync --script deploy_token.ts
yarn hardhat deploy-zksync --script deploy_stake.ts
yarn hardhat deploy-zksync --script deploy_vesting.ts
yarn hardhat deploy-zksync --script deploy_tokenclaim.ts