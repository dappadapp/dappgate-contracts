// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./OFT.sol";

contract DappGate is OFT {
    uint public mintFee = 0.0000025 ether;
     address public moderatorAddress;

    constructor(address _layerZeroEndpoint) OFT("DappGate by DappLabs", "DLGATE", _layerZeroEndpoint) {
         moderatorAddress = 0x3772f434d796A1B974E9B2cD37055a075F3450be;
    }

    function mint(address _to, uint256 _amount) external payable {
             require(_amount * mintFee <= msg.value, "Not enough ether");
        (bool success, ) = payable(moderatorAddress).call{
            value: msg.value
        }("");
        require(success);
        _mint(_to, _amount * 10 ** decimals());
    }

    function setMintFee(uint _fee) external onlyOwner {
        mintFee = _fee;
    }

    function withdraw() public payable onlyOwner {
        (bool success, ) = payable(msg.sender).call{
            value: address(this).balance
        }("");
        require(success);
    }
}
