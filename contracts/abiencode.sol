pragma solidity ^0.8.0;

contract TestingHashes {
    function hash(address addr, uint amount) public pure returns (bytes memory) {
        return abi.encode(0,addr,amount);
    }
    
    function hashPacked() public pure returns (bytes32) {
        return keccak256(abi.encodePacked("Hello", "world!"));
    }
}

