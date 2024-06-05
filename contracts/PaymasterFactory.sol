// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Paymaster.sol";

contract MyPaymasterFactory {
    event PaymasterDeployed(
        address indexed paymasterAddress,
        address indexed creator
    );
    address public feeWallet = 0x3772f434d796A1B974E9B2cD37055a075F3450be;
    uint256 public deploymentFee;

    function deployMyPaymaster(
        address _erc20,
        uint256 _deploymentFee
    ) external payable returns (address) {
        require(msg.value >= _deploymentFee, "Insufficient Ether sent");
        deploymentFee = _deploymentFee;
        payable(feeWallet).call{value: _deploymentFee}("");
        MyPaymaster newPaymaster = new MyPaymaster(_erc20);

        emit PaymasterDeployed(address(newPaymaster), msg.sender);

        return address(newPaymaster);
    }
}
