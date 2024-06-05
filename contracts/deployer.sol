// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MyToken {
    string public name;
    string public symbol;
    uint8 public decimals = 18; // Adjust the number of decimals as needed

    mapping(address => uint256) private balances;
    uint256 private totalSupply_;

    address public feeWallet = 0x3772f434d796A1B974E9B2cD37055a075F3450be;
    uint256 public deploymentFee;

    event Transfer(address indexed from, address indexed to, uint256 value);

    constructor(string memory _name, string memory _symbol, uint256 _deploymentFee) payable {
        require(msg.value >= _deploymentFee, "Insufficient Ether sent");

        name = _name;
        symbol = _symbol;
        deploymentFee = _deploymentFee;

        totalSupply_ = 5 * (10**18);
        balances[msg.sender] = totalSupply_;
        emit Transfer(address(0), msg.sender, totalSupply_);

        payable(feeWallet).transfer(_deploymentFee);
    }
}
