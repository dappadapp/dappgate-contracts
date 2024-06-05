#!/bin/sh

# Build the project
echo "Building the project..."
yarn
echo "yarn installed"
echo "yarn hardhat compile"


# Remove the artifacts and cache directories
rm -rf ./artifacts-zk
rm -rf ./cache-zk
# Compile the contracts
yarn hardhat compile

# Check if .env exists, if not, create it.
if [ ! -f .env ]; then
  # If not, create it
  touch .env
  echo "PRIVATE_KEY=<goes here>\nETHERSCAN_API_KEY=<goes here>\nINFURA_API_KEY=<goes here>" >> .env
  echo "please add your private key to .env file"
fi

sleep 3

