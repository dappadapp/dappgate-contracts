// SPDX-License-Identifier: MIT


pragma solidity ^0.8.9;


interface IDappgate {
    function mintFee() external view returns (uint);
    function bridgeFee() external view returns (uint);
    function setMintFee(uint _fee) external;
    function setBridgeFee(uint _fee) external;
    function transferOwnership(address newOwner) external;
    function withdraw() external;
     function setTrustedRemote(uint16 _remoteChainId, bytes calldata _path) external;
    function setTrustedRemoteAddress(uint16 _remoteChainId, bytes calldata _remoteAddress) external;
    function setMinDstGas(uint16 _dstChainId, uint16 _packetType, uint _minGas) external;
    function owner() external view returns (address);


}
contract SetContract {
    address public _owner;
    address[] public admins;
    address public contractAddress;
    uint256 public gas = 200000;
    uint16 public funtionType = 1;

    modifier onlyOwner() {
        require(msg.sender == _owner, "Only the owner can call this function");
        _;
    }

    modifier onlyAdmin() {
        require(isAdmin(msg.sender), "Only admins can call this function");
        _;
    }
    constructor() {
        _owner = msg.sender;
        admins.push(_owner); // Owner is initially an admin
    }

    // Check if an address is an admin
    function isAdmin(address _addr) internal view returns (bool) {
        for (uint256 i = 0; i < admins.length; i++) {
            if (admins[i] == _addr) {
                return true;
            }
        }
        return false;
    }

    // Add a new admin
    function addAdmin(address _admin) external onlyOwner {
        require(_admin != address(0), "Admin address cannot be zero");
        require(!isAdmin(_admin), "Address is already an admin");
        admins.push(_admin);
    }

    function bulkSetTrustedRemote(uint16[] calldata _remoteChainIds, bytes[] calldata _paths, address _contractAddress) external onlyAdmin {
        require(_remoteChainIds.length == _paths.length, "Input arrays must have the same length");
        
        for (uint256 i = 0; i < _remoteChainIds.length; i++) {
            IDappgate(_contractAddress).setTrustedRemote(_remoteChainIds[i], _paths[i]);
        }
    }

    function bulkSetMintGas(uint16[] calldata _remoteChainIds, address _contractAddress) external onlyAdmin {
        for (uint256 i = 0; i < _remoteChainIds.length; i++) {
            IDappgate(_contractAddress).setMinDstGas(_remoteChainIds[i],funtionType,gas);
        }
    }

    function getMintFee(address _contractAddress) public view returns (uint) {
        return IDappgate(_contractAddress).mintFee();
    }

    function getBridgeFee(address _contractAddress) public view returns (uint) {
        return IDappgate(_contractAddress).bridgeFee();
    }

    function updateMintFee(uint256 newFee, address _contractAddress) external onlyAdmin {
        IDappgate(_contractAddress).setMintFee(newFee);
    }

    function updateBridgeFee(uint256 newFee, address _contractAddress) external onlyAdmin {
        IDappgate(_contractAddress).setBridgeFee(newFee);
    }

    function transferOwner(address _addr, address _contractAddress) external onlyOwner {
         IDappgate(_contractAddress).transferOwnership(_addr);
    }

    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "New owner address cannot be zero");
        _owner = newOwner;
    }

    function transferOwnershipCont(address newOwner, address _contractAddress) external onlyOwner {
        IDappgate(_contractAddress).transferOwnership(newOwner);
    }

    function setContractAddress(address _contAddress) external onlyOwner {
        require(_contAddress != address(0), "OFT address cannot be zero");
        contractAddress = _contAddress;
    }

    function setGas(uint _gas) external onlyOwner {
        gas = _gas;
    }

    function setFuntionType(uint16 _funtionType) external onlyOwner {
        funtionType = _funtionType;
    }

    function withdraw(address _contractAddress) external onlyOwner {
        IDappgate(_contractAddress).withdraw();
    }

    function withdrawFunds() public payable onlyOwner {
        (bool success, ) = payable(msg.sender).call{
            value: address(this).balance
        }("");
        require(success);
    }
   
}
