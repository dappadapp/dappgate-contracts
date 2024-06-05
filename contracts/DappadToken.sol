// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DappadToken is IERC20, Ownable {

    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;

    uint256  private constant _totalSupply = 100_000_000 * 10 ** 18;

    string private constant _name = "Dappad Launchpad";
    string private constant _symbol = "APPA";
    uint8 private constant _decimals = 18;

    address private LotteryWallet;
    address private ONFTHouse;

    uint256 public LotteryWalletFee = 100;
    uint256 public ONFTHouseFee = 200;

    uint256 public constant MAX_FEE_PERCENTAGE = 300;

    mapping(address => bool) public isExcludedFromFee;

    event TransferFee(address sender, address recipient, uint256 amount);

    event FeePercentageUpdate(uint256 LotteryWalletFee, uint256 ONFTHouseFee);

    event WalletUpdate(address LotteryWallet, address ONFTHouse);

    constructor() {
        _balances[msg.sender] = _totalSupply;
        isExcludedFromFee[msg.sender] = true;
        emit Transfer(address(0), msg.sender, _totalSupply);
    }

    function transfer(address recipient, uint256 amount) external override returns (bool) {
        _transfer(_msgSender(), recipient, amount);
        return true;
    }

    function approve(address spender, uint256 amount) external override returns (bool) {
        _approve(_msgSender(), spender, amount);
        return true;
    }

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external override returns (bool) {
        _transfer(sender, recipient, amount);
        uint256 currentAllowance = _allowances[sender][_msgSender()];
        require(currentAllowance >= amount, "ERC20: transfer amount exceeds allowance");
        unchecked {
            _approve(sender, _msgSender(), currentAllowance - amount);
        }
        return true;
    }

    function increaseAllowance(address spender, uint256 addedValue) external returns (bool) {
        _approve(_msgSender(), spender, _allowances[_msgSender()][spender] + addedValue);
        return true;
    }

    function decreaseAllowance(address spender, uint256 subtractedValue) external returns (bool) {
        uint256 currentAllowance = _allowances[_msgSender()][spender];
        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");
        unchecked {
            _approve(_msgSender(), spender, currentAllowance - subtractedValue);
        }
        return true;
    }

    function totalSupply() external view virtual override returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) external view override returns (uint256) {
        return _balances[account];
    }

    function allowance(address owner, address spender) external view override returns (uint256) {
        return _allowances[owner][spender];
    }

    function _transfer(
        address sender,
        address recipient,
        uint256 amount
    ) private {
        require(sender != address(0), "ERC20: transfer from the zero address");
        require(recipient != address(0), "ERC20: transfer to the zero address");

        uint256 senderBalance = _balances[sender];
        require(senderBalance >= amount, "ERC20: transfer amount exceeds balance");

        unchecked {
            _balances[sender] = senderBalance - amount;
        }

        if (isExcludedFromFee[sender] == false && isExcludedFromFee[recipient] == false) {
            uint256 lotteryWalletFeeAmount = (amount * LotteryWalletFee) / 10_000;
            uint256 onftHouseFeeAmount = (amount * ONFTHouseFee) / 10_000;
            uint256 receiveAmount = amount - lotteryWalletFeeAmount - onftHouseFeeAmount;

            unchecked {
                _balances[LotteryWallet] += lotteryWalletFeeAmount;
                _balances[ONFTHouse] += onftHouseFeeAmount;
                _balances[recipient] += receiveAmount;
            }

            emit Transfer(sender, LotteryWallet, lotteryWalletFeeAmount);
            emit Transfer(sender, ONFTHouse, onftHouseFeeAmount);
            emit Transfer(sender, recipient, receiveAmount);

        } else {
            _balances[recipient] += amount;
            emit Transfer(sender, recipient, amount);
        }
    }

    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) private {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");
        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    function setWallets(address LotteryWallet_, address ONFTHouse_) external onlyOwner {
        LotteryWallet = LotteryWallet_;
        ONFTHouse = ONFTHouse_;
        emit WalletUpdate(LotteryWallet, ONFTHouse);
    }

    function setFees(uint256 LotteryWalletFee_, uint256 ONFTHouseFee_) external onlyOwner {
        uint256 totalFee = LotteryWalletFee_ + ONFTHouseFee_;
        require(totalFee <= MAX_FEE_PERCENTAGE, "total fee percentage exceeds 3%");
        LotteryWalletFee = LotteryWalletFee_;
        ONFTHouseFee = ONFTHouseFee_;
        emit FeePercentageUpdate(LotteryWalletFee, ONFTHouseFee);
    }

    function excludeFromFee(address address_, bool isExcluded) external onlyOwner {
        isExcludedFromFee[address_] = isExcluded;
    }

    function name() external pure returns (string memory) {
        return _name;
    }

    function symbol() external pure returns (string memory) {
        return _symbol;
    }

    function decimals() external pure returns (uint8) {
        return _decimals;
    }
}