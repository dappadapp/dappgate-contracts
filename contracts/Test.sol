// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Test is Ownable {
    uint256 public number;

    function setNumber(uint256 newNumber) public onlyOwner {
        number = newNumber;
    }

    function getHalf() public view returns(uint256) {
        return number / 2;
    }

    function sdf() public view returns(address) {
        return msg.sender;
    }
}

