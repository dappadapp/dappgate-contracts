// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Address.sol";

contract DappadStake is Ownable {

    using SafeERC20 for IERC20;
    using SafeMath for uint256;

    struct Rate {
        uint64 interestRate;
        uint256 time;
    }

    struct Deposit {
        uint256 depositAmount;
        uint256 depositTime;
        uint256 endTime;
        uint64 index;
        uint256 rewards;
        bool paid;
    }

    address public tokenAddress;
    uint256 public stakedBalance;
    uint256 public rewardBalance;
    uint256 public stakedTotal;
    uint256 public totalReward;
    uint64 public index;
    uint64 public rate;
    uint256 public lockDuration;
    string public name;
    uint256 public totalParticipants;
    bool public isStopped;

    IERC20 public ERC20Interface;

    uint256 public lowBalanceThreshold = 10000 * 10 ** 18;

    mapping(address => Deposit) private deposits;
    mapping(uint64 => Rate) public rates;
    mapping(address => bool) private hasStaked;

    event Staked(
        address indexed token,
        address indexed staker_,
        uint256 stakedAmount_
    );

    event PaidOut(
        address indexed token,
        address indexed staker_,
        uint256 amount_,
        uint256 reward_
    );

    event RateAndLockduration(
        uint64 index,
        uint64 newRate,
        uint256 lockDuration,
        uint256 time
    );

    event RewardsAdded(uint256 rewards, uint256 time);

    event StakingStopped(bool status, uint256 time);

        /*
     * Parameters:
     * - name_: The name of the project.
     * - tokenAddress_: The address of the APPA token for the project.
     * - rate_: The interest rate for the token. This should be non-zero.
     * - lockDuration_: The duration for which the tokens will be locked.
     */
    constructor(
        string memory name_,
        address tokenAddress_,
        uint64 rate_,
        uint256 lockDuration_
    ) Ownable() {
        name = name_;
        require(tokenAddress_ != address(0), "Zero token address");
        tokenAddress = tokenAddress_;
        ERC20Interface = IERC20(tokenAddress_);
        lockDuration = lockDuration_;
        require(rate_ != 0, "Zero interest rate");
        rate = rate_;
        rates[index] = Rate(rate, block.timestamp);
    }

    function setRateAndLockduration(uint64 rate_, uint256 lockduration_)
    external
    onlyOwner {
        require(rate_ != 0, "Zero interest rate");
        require(lockduration_ != 0, "Zero lock duration");
        rate = rate_;
        index++;
        rates[index] = Rate(rate_, block.timestamp);
        lockDuration = lockduration_;
        emit RateAndLockduration(index, rate_, lockduration_, block.timestamp);
    }

    function changeStakingStatus(bool _status) external onlyOwner {
        isStopped = _status;
        emit StakingStopped(_status, block.timestamp);
    }

    function addReward(uint256 rewardAmount)
    external
    _realAddress(msg.sender)
    _hasAllowance(msg.sender, rewardAmount)
    returns (bool)
    {
        require(rewardAmount > 0, "Reward must be positive");
        totalReward = totalReward.add(rewardAmount);
        rewardBalance = rewardBalance.add(rewardAmount);
        if (!_payMe(msg.sender, rewardAmount)) {
            return false;
        }
        emit RewardsAdded(rewardAmount, block.timestamp);
        return true;
    }

    function userDeposits(address user)
    external
    view
    returns (
        uint256,    
        uint256,
        uint256,
        uint256,
        uint256,
        bool
    )
    {
        if (hasStaked[user]) {
            return (
                deposits[user].depositAmount,
                deposits[user].depositTime,
                deposits[user].endTime,
                deposits[user].index,
                deposits[user].rewards,
                deposits[user].paid
            );
        }
        return (0, 0, 0, 0, 0, false);
    }

    function stake(uint256 amount)
    external
    _realAddress(msg.sender)
    _hasAllowance(msg.sender, amount)
    returns (bool)
    {
        require(amount > 0, "cannot stake zero amount");
        require(!isStopped, "paused");
        return (_stake(msg.sender, amount));
    }

    function _stake(address from, uint256 amount) private returns (bool) {
        if (!hasStaked[from]) {
            hasStaked[from] = true;

            deposits[from] = Deposit(
                amount,
                block.timestamp,
                block.timestamp.add((lockDuration.mul(3600))),
                index,
                0,
                false
            );
            totalParticipants = totalParticipants.add(1);
        } else {
            require(
                block.timestamp < deposits[from].endTime,
                "expired lock duration"
            );
            uint256 newAmount = deposits[from].depositAmount.add(amount);
            uint256 rewards = _calculate(from, block.timestamp).add(
                deposits[from].rewards
            );
            deposits[from] = Deposit(
                newAmount,
                block.timestamp,
                block.timestamp.add((lockDuration.mul(3600))),
                index,
                rewards,
                false
            );
        }
        stakedBalance = stakedBalance.add(amount);
        stakedTotal = stakedTotal.add(amount);
        require(_payMe(from, amount), "failed to transfer");
        emit Staked(tokenAddress, from, amount);

        return true;
    }

    function withdraw() external _realAddress(msg.sender) returns (bool) {
        require(hasStaked[msg.sender], "not found");
        require(
            block.timestamp >= deposits[msg.sender].endTime,
            "require lock period to be over"
        );
        require(!deposits[msg.sender].paid, "paid not false");
        return (_withdraw(msg.sender));
    }

    function _withdraw(address from) private returns (bool) {
        uint256 reward = _calculate(from, deposits[from].endTime);
        reward = reward.add(deposits[from].rewards);
        uint256 amount = deposits[from].depositAmount;
        require(reward <= rewardBalance, "enough rewards not available");
        stakedBalance = stakedBalance.sub(amount);
        rewardBalance = rewardBalance.sub(reward);
        deposits[from].paid = true;
        hasStaked[from] = false;
        totalParticipants = totalParticipants.sub(1);
        if (_payDirect(from, amount.add(reward))) {
            emit PaidOut(tokenAddress, from, amount, reward);
            return true;
        }
        return false;
    }


    function emergencyWithdraw()
    external
    _realAddress(msg.sender)
    returns (bool)
    {
        require(hasStaked[msg.sender], "not found");
        require(
            block.timestamp >= deposits[msg.sender].endTime,
            "lock time not over"
        );
        require(!deposits[msg.sender].paid, "paid already out");
        return (_emergencyWithdraw(msg.sender));
    }


    function _emergencyWithdraw(address from) private returns (bool) {
        uint256 amount = deposits[from].depositAmount;
        stakedBalance = stakedBalance.sub(amount);
        deposits[from].paid = true;
        hasStaked[from] = false;
        totalParticipants = totalParticipants.sub(1);
        bool principalPaid = _payDirect(from, amount);
        require(principalPaid, "Error paying");
        emit PaidOut(tokenAddress, from, amount, 0);
        return true;
    }

    function calculate(address from) external view returns (uint256) {
        return _calculate(from, deposits[from].endTime);
    }

    //1) dailyRate = (rate / 100) / (lockDuration / 24).
    //2) annualRate = dailyRate * 365
    //
    //result: ((rate / 100) / (lockDuration / 24)) * 365 = APR%
    function _calculate(address from, uint256 endTime)
    private
    view
    returns (uint256) {
        if (!hasStaked[from]) return 0;
        (uint256 amount, uint256 depositTime, uint64 userIndex) = (
            deposits[from].depositAmount,
            deposits[from].depositTime,
            deposits[from].index
        );
        uint256 time;
        uint256 interest;
        uint256 _lockduration = deposits[from].endTime.sub(depositTime);

        for (uint64 i = userIndex; i < index; i++) {
            if (endTime < rates[i + 1].time) {
                break;
            } else {
                time = rates[i + 1].time.sub(depositTime);
                interest = amount.mul(rates[i].interestRate).mul(time).div(
                    _lockduration.mul(10000)
                );
                amount = amount.add(interest);
                depositTime = rates[i + 1].time;
                userIndex++;
            }
        }
        
        if (depositTime < endTime) {
           time = endTime.sub(depositTime); 
            interest = time
            .mul(amount)
            .mul(rates[userIndex].interestRate)
            .div(_lockduration.mul(10000));
        }
        return (interest);
    }

    function _payMe(address payer, uint256 amount) private returns (bool) {
        return _payTo(payer, address(this), amount);
    }

    function _payTo(
        address allower,
        address receiver,
        uint256 amount
    ) private _hasAllowance(allower, amount) returns (bool) {
        ERC20Interface.safeTransferFrom(allower, receiver, amount);
        return true;
    }

    function _payDirect(address to, uint256 amount) private returns (bool) {
        ERC20Interface.safeTransfer(to, amount);
        return true;
    }

    // checking if the contract has lower $APPA balance than the threshold
    function isLowBalance() public view returns (bool) {
        return getBalance() < lowBalanceThreshold;
    }

    // getting the $APPA balance of the contract
    function getBalance() public view returns (uint256) {
        uint256 balance = ERC20Interface.balanceOf(address(this));
        return balance;
    }

    modifier _realAddress(address addr) {
        require(addr != address(0), "Zero address");
        _;
    }

    modifier _hasAllowance(address allower, uint256 amount) {
        uint256 ourAllowance = ERC20Interface.allowance(allower, address(this));
        require(amount <= ourAllowance, "Make sure you have approved the contract");
        _;
    }

}