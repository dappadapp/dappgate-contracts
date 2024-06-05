// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BasicContract {
    uint256 public counter;
     address public feeWallet= 0x3772f434d796A1B974E9B2cD37055a075F3450be;
 
    constructor(uint256 _deploymentFee) payable{
        counter = 0;
         payable(feeWallet).transfer(_deploymentFee);
    }

    function increment() public   {
        counter += 1;
    }
}