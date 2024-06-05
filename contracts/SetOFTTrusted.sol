// SPDX-License-Identifier: MIT


pragma solidity ^0.8.9;

import "./GasRefuel.sol";

contract SetContract {
    NonblockingLzApp _oft;
    address public _owner;
    address public oftAddress;
    uint public gas = 200000;
    uint16 public funtionType = 0;

    modifier onlyOwner() {
    require(msg.sender == _owner, "Only the owner can call this function");
        _;
    }

    constructor() {
        _owner = msg.sender;
    }

    function bulkSetTrustedRemote(uint16[] calldata _remoteChainIds, bytes[] calldata _paths) external onlyOwner {
        require(_remoteChainIds.length == _paths.length, "Input arrays must have the same length");
        
        for (uint256 i = 0; i < _remoteChainIds.length; i++) {
            NonblockingLzApp(oftAddress).setTrustedRemote(_remoteChainIds[i], _paths[i]);
        }
    }

    function bulkSetMintGas(uint16[] calldata _remoteChainIds) external onlyOwner {
        for (uint256 i = 0; i < _remoteChainIds.length; i++) {
            NonblockingLzApp(oftAddress).setMinDstGas(_remoteChainIds[i],funtionType,gas);
        }
    }

    function transferOwner(address _addr) external onlyOwner {
         NonblockingLzApp(oftAddress).transferOwnership(_addr);
    }

    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "New owner address cannot be zero");
        _owner = newOwner;
    }

    function setOftAddress(address _oftAddress) external onlyOwner {
        require(_oftAddress != address(0), "OFT address cannot be zero");
        oftAddress = _oftAddress;
    }

    function setGas(uint _gas) external onlyOwner {
        gas = _gas;
    }

    function setFuntionType(uint16 _funtionType) external onlyOwner {
        funtionType = _funtionType;
    }
   
}

// [102,106,109]

// ["0xc67505DEaA9C0c08B9bcf2F55476C66b77e0c82fc67505DEaA9C0c08B9bcf2F55476C66b77e0c82f", "0xc67505DEaA9C0c08B9bcf2F55476C66b77e0c82fc67505DEaA9C0c08B9bcf2F55476C66b77e0c82f","0xc67505DEaA9C0c08B9bcf2F55476C66b77e0c82fc67505DEaA9C0c08B9bcf2F55476C66b77e0c82f"]


//  