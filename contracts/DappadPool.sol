// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "./Pausable.sol";

contract DappadPool is Ownable, Pausable {

    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    string public name;
    uint256 public maxCap;
    uint256 public saleStart;
    uint256 public saleEnd;
    uint256 public totalReceived;
    uint256 public tiersLength;
    uint256 public totalUsers;
    address public projectOwner;
    address public tokenAddress;
    IERC20 public ERC20Interface;
    uint8 public immutable phaseNo;

    address[] public tokens = [
    0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48, // USDC L1
    0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2, // WETH L1
    0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4, // USDC L2
    0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91 // WETH L2
    ];

    struct Tier {
        uint256 maxTierCap;
        uint256 minUserCap;
        uint256 maxUserCap;
        uint256 amountRaised;
        uint256 users;
    }

    struct User {
        uint256 tier;
        uint256 investedAmount;
    }

    event UserInvestment(
        address indexed user,
        uint256 amount,
        uint8 indexed phase
    );

    mapping(uint256 => Tier) public tierDetails;
    mapping(address => User) public userDetails;


    /*   
    * Parameters:
    * - _name: The name of the contract.
    * - _maxCap: The maximum cap of the contract.
    * - _saleStart: The start time of the sale.
    * - _saleEnd: The end time of the sale.
    * - _noOfTiers: The number of tiers.
    * - _projectOwner: The address of the project owner.
    * - _tokenAddress: The address of the token. It should be one of the addresses in the "tokens" array.
    * - _totalUsers: The total number of users.
    * - _phaseNo: The phase number of the project.
    */
    constructor(
        string memory _name,
        uint256 _maxCap,
        uint256 _saleStart,
        uint256 _saleEnd,
        uint256 _noOfTiers,
        address _projectOwner,
        address _tokenAddress,
        uint256 _totalUsers,
        uint8 _phaseNo
    ) {
        name = _name;
        require(_maxCap > 0, "Zero max cap");
        maxCap = _maxCap;
        require(
            _saleStart > block.timestamp && _saleEnd > _saleStart,
            "Invalid timings"
        );
        saleStart = _saleStart;
        saleEnd = _saleEnd;
        require(_noOfTiers > 0, "Zero tiers");
        tiersLength = _noOfTiers;
        require(_projectOwner != address(0), "Zero project owner address");
        projectOwner = _projectOwner;
        require(_tokenAddress != address(0), "Zero token address");
        bool found = false;
        for (uint256 i = 0; i < tokens.length; i++) {
            if (_tokenAddress == tokens[i]) {
                found = true;
                break;
            }
        }
        require(found, "adress not found");
        tokenAddress = _tokenAddress;
        ERC20Interface = IERC20(tokenAddress);
        require(_totalUsers > 0, "Zero users");
        totalUsers = _totalUsers;
        phaseNo = _phaseNo;
    }

    modifier _hasAllowance(address allower, uint256 amount) {
        uint256 ourAllowance = ERC20Interface.allowance(allower, address(this));
        require(amount <= ourAllowance, "Make sure to add enough allowance");
        _;
    }

    function updateMaxCap(uint256 _maxCap) public onlyOwner {
        require(_maxCap > 0, "Zero max cap");
        maxCap = _maxCap;
    }

    function updateStartTime(uint256 newsaleStart) public onlyOwner {
        require(block.timestamp < saleStart, "Sale already started");
        saleStart = newsaleStart;
    }

    function updateEndTime(uint256 newSaleEnd) public onlyOwner {
        require(
            newSaleEnd > saleStart && newSaleEnd > block.timestamp,
            "sale end time should be greater than sale start time"
        );
        saleEnd = newSaleEnd;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function updateTiers(
        uint256[] memory _tier,
        uint256[] memory _maxTierCap,
        uint256[] memory _minUserCap,
        uint256[] memory _maxUserCap,
        uint256[] memory _tierUsers
    ) external onlyOwner {
        require(
            _tier.length == _maxTierCap.length &&
            _maxTierCap.length == _minUserCap.length &&
            _minUserCap.length == _maxUserCap.length &&
            _maxUserCap.length == _tierUsers.length,
            "Length mismatch"
        );

        for (uint256 i = 0; i < _tier.length; i++) {
            require(
                _tier[i] > 0 && _tier[i] <= tiersLength,
                "invalid tier number"
            );
            require(_maxTierCap[i] > 0, "max tier cap can't be zero");
            require(_maxUserCap[i] > 0, "max user cap can't be zero");
            require(_tierUsers[i] > 0, "zero users");

            uint256 currentAmountRaised = tierDetails[_tier[i]].amountRaised;

            tierDetails[_tier[i]] = Tier(
                _maxTierCap[i],
                _minUserCap[i],
                _maxUserCap[i],
                currentAmountRaised,
                _tierUsers[i]
            );
        }
    }


    function updateUsers(address[] memory _users, uint256[] memory _tiers) external onlyOwner {
        require(_users.length == _tiers.length, "mismatch");
        for (uint256 i = 0; i < _users.length; i++) {
            require(_tiers[i] > 0 && _tiers[i] <= tiersLength, "invalid tier");
            userDetails[_users[i]].tier = _tiers[i];
        }
    }

    /*
     * Function: invest
     *
     * Description:
     * This function handles the process of a user investing in the token sale. Before accepting the investment, it verifies several conditions:
     * - The pool is not currently paused.
     * - The sale has officially started and has not yet ended.
     * - The amount of tokens being purchased, when added to the total already received, does not go beyond the maximum cap.
     * - The user belongs to a valid tier, i.e., a tier that exists within the defined range.
     * - The investment amount is not lower than the minimum investment limit of the user's tier.
     * - The investment amount does not surpass the user's maximum allowable investment.
     *
     * If all these checks are passed, the function proceeds to:
     * - Update the total received amount by adding the new investment.
     * - Increase the amount raised within the user's tier.
     * - Update the total amount that the user has invested.
     * - Transfer the tokens from the user's account to the project owner's account using the ERC20Interface.safeTransferFrom method.
     * - Emit a UserInvestment event, which logs the investment activity on the blockchain.
     *
     * The function concludes by returning true, signifying a successful investment. If any of the checks fail, the function will revert.
     *
     * Parameters:
     * - amount: the amount user wants to invest in the pool
     *
     * Returns:
     * - bool: True indicates a successful purchase. If any of the requirements are not met, the function will revert.
     */
    function invest(uint256 amount) external whenNotPaused _hasAllowance(msg.sender, amount) returns (bool){
        require(block.timestamp >= saleStart, "not started yet");
        require(block.timestamp <= saleEnd, "ended");
        require(
            totalReceived.add(amount) <= maxCap,
            "max cap reached, can't invest more"
        );
        uint256 userTier = userDetails[msg.sender].tier;
        require(userTier > 0 && userTier <= tiersLength, "invalid tier");
        uint256 minInvestment = tierDetails[userTier].minUserCap;
        require(amount >= minInvestment, "investment amount is less than the minimum required");
        uint256 maxInvestment = getUserMaxInvestment(msg.sender);
        require(amount <= maxInvestment, "max cap reached");
        totalReceived = totalReceived.add(amount);
        tierDetails[userTier].amountRaised = tierDetails[userTier]
        .amountRaised
        .add(amount);
        userDetails[msg.sender].investedAmount = userDetails[msg.sender].investedAmount.add(amount);
        ERC20Interface.safeTransferFrom(msg.sender, projectOwner, amount);
        emit UserInvestment(msg.sender, userDetails[msg.sender].investedAmount, phaseNo);
        return true;
    }

    /*
    * Function: getUserMaxInvestment
    * 
    * Description: This function calculates the maximum amount of tokens a user can invest based on their tier and how much they've already invested.
    * The function first retrieves the user's tier and checks if it's valid.
    * Then it subtracts the amount the user has already invested from the maximum cap for the user's tier to calculate the max investment.
    * If this exceeds the remaining cap for the tier (i.e., the tier's max cap minus the amount already raised in this tier), 
    * the function adjusts the max investment to this remaining cap.
    * 
    * Parameters: 
    * - _user: The address of the user for whom to calculate the maximum investment.
    * 
    * Returns: 
    * - uint256: The maximum amount the user can invest.
    */
    function getUserMaxInvestment(address _user) public view returns (uint256) {
        uint256 userTier = userDetails[_user].tier;
        require(userTier > 0 && userTier <= tiersLength, "invalid tier");
        uint256 expectedAmount = userDetails[_user].investedAmount;
        uint256 maxInvestment = tierDetails[userTier].maxUserCap.sub(expectedAmount);
        if (maxInvestment > tierDetails[userTier].maxTierCap.sub(tierDetails[userTier].amountRaised)) {
            maxInvestment = tierDetails[userTier].maxTierCap.sub(tierDetails[userTier].amountRaised);
        }
        return maxInvestment;
    }

    enum Status {
        MAX_CAP_REACHED,
        MAX_USER_CAP_REACHED,
        MIN_USER_CAP_NOT_REACHED,
        SALE_NOT_STARTED,
        SALE_ENDED,
        INVALID_TIER,
        PAUSED,
        TIER_MAX_REACHED
    }

    function getUserStatus(address userAddress, uint256 amount) public view returns (Status[] memory) {
        Status[] memory errors = new Status[](9);
        uint256 errorCount = 0;
    
        if (paused()) {
            errors[errorCount] = Status.PAUSED;
            errorCount++;
        }
    
        if (block.timestamp < saleStart) {
            errors[errorCount] = Status.SALE_NOT_STARTED;
            errorCount++;
        }
    
        if (block.timestamp > saleEnd) {
            errors[errorCount] = Status.SALE_ENDED;
            errorCount++;
        }
    
        if (totalReceived.add(amount) > maxCap) {
            errors[errorCount] = Status.MAX_CAP_REACHED;
            errorCount++;
        }
    
        uint256 userTier = userDetails[userAddress].tier;
    
        if (userTier <= 0 || userTier > tiersLength) {
            errors[errorCount] = Status.INVALID_TIER;
            errorCount++;
        }
    
        uint256 maxInvestment = getUserMaxInvestment(userAddress);
    
        if (amount > maxInvestment) {
            errors[errorCount] = Status.MAX_USER_CAP_REACHED;
            errorCount++;
        }
    
        if (amount < tierDetails[userTier].minUserCap) {
            errors[errorCount] = Status.MIN_USER_CAP_NOT_REACHED;
            errorCount++;
        }
    
        if (tierDetails[userTier].amountRaised.add(amount) > tierDetails[userTier].maxTierCap) {
            errors[errorCount] = Status.TIER_MAX_REACHED;
            errorCount++;
        }
    
        return errors;
    }


}
