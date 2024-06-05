// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Address.sol";


contract DappadTokenClaim is Ownable {

    using SafeERC20 for IERC20;


    string public name;
    IERC20 public ERC20Interface;

    mapping(address => mapping(uint256 => uint256)) public unlockTime;
    mapping(address => mapping(uint256 => mapping(address => uint256))) userTokenClaimPerPhase;

    event RewardAdded(address indexed token, uint256 phase, uint256 amount);
    event Claimed(address indexed user, address indexed token, uint256 amount);

    modifier _hasAllowance(
        address allower,
        uint256 amount,
        address token
    ) {
        require(token != address(0), "Zero token address");
        ERC20Interface = IERC20(token);
        uint256 ourAllowance = ERC20Interface.allowance(allower, address(this));
        require(amount <= ourAllowance, "Make sure to add enough allowance");
        _;
    }

    /*
        * Function: updateUserTokens
        *
        * Description:
        * This function is used to distribute reward tokens to multiple users in a specific phase of the project.
        * It performs several checks to ensure the validity of the data before the distribution:
        * - The total reward amount and number of users should be greater than zero.
        * - The number of users should match the number of token values provided.
        * - The release time should be in the future.
        * - If the phase has already started, it should not be started again.
        *
        * Parameters:
        * - tokenAddress: The address of the project's token to distribute.
        * - totalReward: The total amount of reward tokens to distribute.
        * - phaseNo: The number of the phase for reward distribution.
        * - release: The timestamp when the tokens will be released.
        * - users: An array of user addresses who will receive the rewards.
        * - tokenValues: An array of token amounts for each user. It should have the same length as the users array.
        *
        * Returns:
        * - bool: True if the distribution was successful, otherwise it will revert due to one of the require statements failing.
        */
    function updateUserTokens(
        address tokenAddress,
        uint256 totalReward,
        uint256 phaseNo,
        uint256 release,
        address[] memory users,
        uint256[] memory tokenValues
    )
    external
    _hasAllowance(msg.sender, totalReward, tokenAddress)
    onlyOwner
    returns (bool)
    {
        require(totalReward > 0 && users.length > 0, "Invalid data");
        require(users.length == tokenValues.length, "Invalid user data");
        require(release > block.timestamp, "Invalid release time");
        if (unlockTime[tokenAddress][phaseNo] > 0) {
            require(
                block.timestamp < unlockTime[tokenAddress][phaseNo],
                "Phase already started"
            );
        }
        unlockTime[tokenAddress][phaseNo] = release;
        uint256 rewardCheck = totalReward;
        for (uint256 i = 0; i < users.length; i++) {
            userTokenClaimPerPhase[tokenAddress][phaseNo][users[i]] =
            userTokenClaimPerPhase[tokenAddress][phaseNo][users[i]] +
            tokenValues[i];
            unchecked {
                rewardCheck = rewardCheck - tokenValues[i];
            }
        }
        require(rewardCheck == 0, "Incorrect reward values");
        ERC20Interface = IERC20(tokenAddress);
        ERC20Interface.safeTransferFrom(msg.sender, address(this), totalReward);
        emit RewardAdded(tokenAddress, phaseNo, totalReward);
        return true;
    }

    function claimMultiple(address tokenAddress, uint256[] calldata phaseNo) external returns (bool) {
        for (uint i; i < phaseNo.length; i++) {
            require(claim(tokenAddress, phaseNo[i]));
        }
        return true;
    }


    function getUserPhaseTokenClaim(
        address tokenAddress,
        uint256 phaseNo,
        address user
    ) external view returns (uint256) {
        return userTokenClaimPerPhase[tokenAddress][phaseNo][user];
    }

    function claim(address tokenAddress, uint256 phaseNo)
    public
    returns (bool)
    {
        require(
            unlockTime[tokenAddress][phaseNo] < block.timestamp,
            "Wait for unlock time"
        );
        uint256 amount = userTokenClaimPerPhase[tokenAddress][phaseNo][
        msg.sender
        ];
        require(
            amount > 0,
            "No claimable tokens available for user in this phase"
        );
        delete userTokenClaimPerPhase[tokenAddress][phaseNo][msg.sender];
        ERC20Interface = IERC20(tokenAddress);
        require(
            ERC20Interface.balanceOf(address(this)) >= amount,
            "No tokens available in the contract"
        );
        ERC20Interface.safeTransfer(msg.sender, amount);
        emit Claimed(msg.sender, tokenAddress, amount);
        return true;
    }
}