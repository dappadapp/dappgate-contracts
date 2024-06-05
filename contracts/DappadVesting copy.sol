// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "./Pausable.sol";

contract DappadVesting is Ownable, Pausable {

    using SafeERC20 for IERC20;

    address public immutable tokenAddress;
    uint256 public totalVested;
    uint256 public totalClaimed;
    IERC20 public immutable ERC20Interface;

    struct Vesting {
        uint256 totalAmount;
        uint256 startAmount;
        uint256 startTime;
        uint256 endTime;
        uint256 claimed;
    }

    mapping(address => Vesting) public userVesting;

    event UsersUpdated(address indexed token, uint256 users, uint256 amount);
    event Claimed(address indexed token, address indexed user, uint256 amount);

    //_token: this is the token that will be vested.
    constructor(address _token) {
        require(_token != address(0), "Zero token address");
        tokenAddress = _token;
        ERC20Interface = IERC20(tokenAddress);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function addUserVesting(
    address _user,
    uint256 _amount,
    uint256 _startAmount,
    uint256 _startTime,
    uint256 _endTime
) private {
    require(_user != address(0), "Zero address");
    require(_amount > 0, "Zero amount");
    require(_startAmount <= _amount, "Wrong token values");
    if(userVesting[_user].totalAmount > 0) {
        userVesting[_user].totalAmount += _amount;
        userVesting[_user].startAmount += _startAmount;
        userVesting[_user].startTime = _startTime > userVesting[_user].startTime ? _startTime : userVesting[_user].startTime;
        userVesting[_user].endTime = _endTime > userVesting[_user].endTime ? _endTime : userVesting[_user].endTime;
    } else {
        userVesting[_user] = Vesting(
            _amount,
            _startAmount,
            _startTime,
            _endTime,
            0
        );
    }
}


    function massUpdate(
        address[] calldata _user,
        uint256[] calldata _amount,
        uint256[] calldata _startAmount,
        uint256 _startTime,
        uint256 _endTime,
        uint256 _totalTokens
    ) external onlyOwner returns (bool) {
        uint256 length = _user.length;
        require(
            length == _amount.length && length == _startAmount.length,
            "Wrong data"
        );
        require(
            _startTime >= block.timestamp && _endTime > _startTime,
            "Invalid timings"
        );

        uint256 total;
        for (uint256 i = 0; i < length; i++) {
            total = total + _amount[i];
        }

        require(total == _totalTokens, "Token amount mismatch");

        for (uint256 j = 0; j < length; j++) {
            addUserVesting(
                _user[j],
                _amount[j],
                _startAmount[j],
                _startTime,
                _endTime
            );
        }

        ERC20Interface.safeTransferFrom(
            msg.sender,
            address(this),
            _totalTokens
        );

        totalVested = totalVested + _totalTokens;

        emit UsersUpdated(tokenAddress, length, total);
        return true;
    }

    function claim() external whenNotPaused returns (bool) {
        uint256 tokens = getClaimableAmount(msg.sender);
        require(tokens > 0, "No claimable tokens available");
        userVesting[msg.sender].claimed = userVesting[msg.sender].claimed + tokens;
        totalClaimed = totalClaimed + tokens;
        ERC20Interface.safeTransfer(msg.sender, tokens);
        emit Claimed(tokenAddress, msg.sender, tokens);
        return true;
    }

    function getClaimableAmount(address _user)
    public
    view
    returns (uint256 claimableAmount)
    {
        Vesting storage _vesting = userVesting[_user];
        require(_vesting.totalAmount > 0, "No vesting available for user");
        if (_vesting.totalAmount == _vesting.claimed) return 0;

        if (_vesting.startTime > block.timestamp) return 0;

        if (block.timestamp < _vesting.endTime) {
            uint256 elapsedTime = block.timestamp - _vesting.startTime;
            uint256 timePassedRatio = elapsedTime * 10**18;
            uint256 totalVestingTime = _vesting.endTime - _vesting.startTime;
            uint256 vestingAmount = _vesting.totalAmount - _vesting.startAmount;

            claimableAmount = (vestingAmount * timePassedRatio) / (10**18 * totalVestingTime) + _vesting.startAmount;
        } else {
            claimableAmount = _vesting.totalAmount;
        }

        claimableAmount = claimableAmount - _vesting.claimed;
    }

}