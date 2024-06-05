//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import './NFTCollection.sol';
contract CollectionFactory {

    uint public fee = 0.00012 ether;
    address public moderatorAddress;
    using Counters for Counters.Counter;
    Counters.Counter private _collectionId;
    NFTCollection private nftMarketplace;
    
    address payable owner;

    struct Collection{
        uint256 collectionId;
        string name;
        string symbol;
        string description;
        string image;
        string logo;
        address owner;
        NFTCollection collection_address; 
    }

    event CollectionCreated (
        uint256 collectionId,
        string name,
        string symbol,
        string description,
        string image,
        string logo,
        address owner,
        NFTCollection collection_address
    );
    
    mapping(address => Collection[]) private userToCollections;
    mapping(uint256 => Collection) private idToCollection;

    constructor(){
        owner = payable(msg.sender);
        moderatorAddress = 0x3D6a34D8ECe4640adFf2f38a5bD801E51B07e49C;
    }

    function create_collection(
        string memory collection_name,
        string memory collection_symbol,
        string memory collection_image,
        string memory collection_logo,
        string memory collection_description
    ) public payable {

        require(fee <= msg.value, "Not enough ether");
        (bool success, ) = payable(moderatorAddress).call{
            value: fee 
        }("");
        require(success);
        uint256 collectionCount = _collectionId.current();
        NFTCollection new_nft_collection = new NFTCollection(
            collection_name,
            collection_symbol
        );

        Collection memory newCollection = Collection(
            collectionCount,
            collection_name,
            collection_symbol,
            collection_description,
            collection_image,
            collection_logo,
            msg.sender,
            new_nft_collection
        );

        userToCollections[msg.sender].push(newCollection);
        idToCollection[collectionCount] = newCollection;
        _collectionId.increment();

        emit CollectionCreated(
            collectionCount,
            collection_name,
            collection_symbol,
            collection_description,
            collection_image,
            collection_logo,
            msg.sender,
            new_nft_collection
            );
    }

    function getAllCollections() public view returns(Collection[] memory) {
        uint256 collectionCount = _collectionId.current();
        Collection[] memory collections = new Collection[](collectionCount);
        require(collectionCount >= 0, "you have not created any collection");
        for(uint256 i = 0; i < collectionCount; i++){
            Collection storage current_collection = idToCollection[i];
            collections[i] = current_collection;
        }
        return collections;
    }
    
    function getCollectionById(uint256 collection_id) public view returns (Collection memory) {
        return idToCollection[collection_id];
    }

    function getMyCollections() public view returns (Collection[] memory){
        uint256 collectionCount = _collectionId.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for(uint256 i = 0; i< collectionCount; i++){
            if(idToCollection[i].owner == msg.sender){
                itemCount += 1;
            }
        }

        Collection[] memory collections = new Collection[](itemCount);
        for(uint256 i = 0; i < collectionCount; i++){
            if(idToCollection[i].owner == msg.sender){
                Collection storage collection = idToCollection[i];
                collections[currentIndex] = collection;     
                currentIndex += 1;       
            }
        }
        return collections;
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

