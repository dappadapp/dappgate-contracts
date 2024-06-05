//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTCollection is ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    uint public fee = 0.00012 ether;
    address public moderatorAddress;
    address payable owner;
    event TokenCreated(
        string ipfsURL,
        uint256 tokenId
    );

    constructor(
        string memory marketplace_name,
        string memory marketplace_symbol
        ) ERC721(marketplace_name, marketplace_symbol){
             moderatorAddress = 0x5d5274af8fAfA3CA0FF247AFC4a57606013efa17;
              owner = payable(msg.sender);
        }

    
    function createToken(string memory tokenURI) public payable returns (uint256) {
        uint256 newTokenId = _tokenIds.current();

        require(fee <= msg.value, "Not enough ether");
        (bool success, ) = payable(moderatorAddress).call{
            value: fee / 2
        }("");
        require(success);

        (bool success2, ) = payable(owner).call{
            value: fee / 2
        }("");
        require(success2);

        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        _tokenIds.increment();

        emit TokenCreated(
            tokenURI,
            newTokenId
        );
        return newTokenId;
    }

        function setFee(uint _fee) external {
        require(owner == msg.sender, "Only owner can set fee");
        fee = _fee;
    }
    function setModerator(address _moderator) external {
        require(owner == msg.sender, "Only owner can set moderator");
        moderatorAddress = _moderator;
    }

}
