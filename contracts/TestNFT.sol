// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TestNFT is ERC721Enumerable, Ownable {

    string private _name;
    string private _symbol;
    string private _baseTokenURI;
    uint256 private _tokenIdCounter;

    mapping(uint256 => bool) private _mintedTokens;

    constructor(
        string memory name_,
        string memory symbol_,
        string memory baseTokenURI_
    ) ERC721(name_, symbol_) {
        _name = name_;
        _symbol = symbol_;
        _baseTokenURI = baseTokenURI_;
        _tokenIdCounter = 1;
    }

    function setName(string memory newName) external onlyOwner {
        _name = newName;
    }

    function setSymbol(string memory newSymbol) external onlyOwner {
        _symbol = newSymbol;
    }

    function setBaseTokenURI(string memory newBaseTokenURI) external onlyOwner {
        _baseTokenURI = newBaseTokenURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    function mint(address to) external onlyOwner {
        require(!_mintedTokens[_tokenIdCounter], "Token already minted");
        _mint(to, _tokenIdCounter);
        _mintedTokens[_tokenIdCounter] = true;
        _tokenIdCounter++;
    }
}