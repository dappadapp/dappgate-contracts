// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Pausable.sol";

contract DappadNFTStake is Pausable, Ownable {
    using SafeMath for uint256;

    IERC721Enumerable public nftToken;
    uint256 public stakingDuration = 1 minutes;

    struct Stake {
        uint256 tokenId;
        uint256 startTime;
    }

    mapping(address => Stake[]) public stakes;

    event Staked(address indexed user, uint256[] tokenIds, uint256 startTime);
    event Unstaked(address indexed user, uint256[] tokenIds);

    constructor(address _nftTokenAddress) {
        nftToken = IERC721Enumerable(_nftTokenAddress);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function stake(uint256[] calldata _tokenIds) external whenNotPaused {
        for (uint256 i = 0; i < _tokenIds.length; i++) {
            require(
                nftToken.ownerOf(_tokenIds[i]) == msg.sender,
                "You must own the NFT"
            );
            nftToken.transferFrom(msg.sender, address(this), _tokenIds[i]);
            stakes[msg.sender].push(Stake(_tokenIds[i], block.timestamp));
        }
        emit Staked(msg.sender, _tokenIds, block.timestamp);
    }

function unstake(uint256[] calldata _tokenIds) external {
    for (uint256 i = 0; i < _tokenIds.length; i++) {
        uint256 stakeIndex = findStakeIndex(msg.sender, _tokenIds[i]);
        require(stakeIndex < stakes[msg.sender].length, "Token not staked by the user");

        Stake storage stakeData = stakes[msg.sender][stakeIndex];
        require(block.timestamp >= stakeData.startTime.add(stakingDuration), "Staking duration not reached");

        nftToken.transferFrom(address(this), msg.sender, _tokenIds[i]);

        if (stakeIndex < stakes[msg.sender].length - 1) {
            stakes[msg.sender][stakeIndex] = stakes[msg.sender][stakes[msg.sender].length - 1];
        }
        stakes[msg.sender].pop();
        emit Unstaked(msg.sender, _tokenIds);
    }
}

function findStakeIndex(address _user, uint256 _tokenId) internal view returns (uint256) {
    uint256 length = stakes[_user].length;
    for (uint256 i = 0; i < length; i++) {
        if (stakes[_user][i].tokenId == _tokenId) {
            return i;
        }
    }
    return length; // Return the length of the array as a flag to indicate not found
}

    function getStakedNFTs(address _user)
        external
        view
        returns (Stake[] memory)
    {
        return stakes[_user];
    }

    function getStakedNFTCount(address _user) external view returns (uint256) {
        return stakes[_user].length;
    }
}
