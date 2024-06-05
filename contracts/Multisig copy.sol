// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MultisigWallet {
    uint256 public minApprovers; // minimum number of required approvers in order to execute a transaction.
    uint256 public approverAmount; // number of approvers
    uint256 public proposerAmount; // number of proposers
    uint256 public transactionCount; // number of transactions proposed

    struct Transaction {
        address payable to; // contract address
        uint256 value; // eth value
        bytes data; // encoded method
        bool executed; // is transaction executed
        uint256 approvalCount;
    }

    mapping(address => bool) public isApprover;
    mapping(address => bool) public isProposer;
    mapping(uint256 => Transaction) public transactions;
    mapping(uint256 => mapping(address => bool)) public isTxIdApprovedByAddress;

    event ApproverAdded(address indexed newApprover);
    event ApproverRemoved(address indexed oldApprover);
    event ProposerAdded(address indexed newProposer);
    event ProposerRemoved(address indexed oldProposer);
    event MinApproverSet(uint256 indexed newMinApprovers);
    event TransactionProposed(uint256 indexed transactionId, address indexed proposer, address payable to, uint256 value, bytes data);
    event TransactionApproved(uint256 indexed transactionId, address indexed approver);
    event TransactionExecuted(uint256 indexed transactionId);

    constructor(address payable[] memory _approvers, uint256 _minApprovers) {
        require(_minApprovers > _approvers.length / 2 && _minApprovers <= _approvers.length, "Minimum approval amount should be greater than half of the approver amount and less than the approver amount.");

        for (uint i = 0; i < _approvers.length; i++) {
            require(!isApprover[_approvers[i]], "Approver not unique");

            isApprover[_approvers[i]] = true;
            approverAmount++;

            isProposer[_approvers[i]] = true;
            proposerAmount++;
        }

        minApprovers = _minApprovers;
    }


    /* MODIFIERS */

    modifier onlyApprover() {
        require(isApprover[msg.sender], "Not an approver");
        _;
    }

    modifier onlyProposer() {
        require(isProposer[msg.sender], "Not a proposer");
        _;
    }


    /* GETTERS */

    function getIsTxIdApprovedByAddress(uint256 transactionId, address walletAddress) public view returns(bool) {
        return isTxIdApprovedByAddress[transactionId][walletAddress];
    }

    function getLatestTransactionId() public view returns(uint256) {
        return transactionCount;
    }


    /* SETTERS & GOVERNANCE */

    function proposeSetMinApprovers(uint256 _newMinApprovers) public onlyProposer {
        require(_newMinApprovers > approverAmount / 2 && _newMinApprovers <= approverAmount, "New minimum approval amount should be greater than half of the current approver amount and less than current approver amount.");
        bytes memory data = abi.encodeWithSignature("_setMinApprovers(uint256)", _newMinApprovers);
        _proposeTransaction(payable(address(this)), 0, data);
    }

    function proposeAddApprover(address newApprover) public onlyProposer {
        require(!isApprover[newApprover], "The address is already an approver");
        require(minApprovers > (approverAmount + 1) / 2, "Minimum approval amount should be greater than half of the (current approver amount + 1)");
        bytes memory data = abi.encodeWithSignature("_addApprover(address)", newApprover);
        _proposeTransaction(payable(address(this)), 0, data);
    }

    function proposeRemoveApprover(address oldApprover) public onlyProposer {
        require(isApprover[oldApprover], "The address is not an approver");
        require(minApprovers <= approverAmount - 1, "Minimum approval amount should be less than (current approver amount - 1)");
        bytes memory data = abi.encodeWithSignature("_removeApprover(address)", oldApprover);
        _proposeTransaction(payable(address(this)), 0, data);
    }

    function proposeAddProposer(address newProposer) public onlyProposer {
        require(!isProposer[newProposer], "The address is already a proposer");
        bytes memory data = abi.encodeWithSignature("_addProposer(address)", newProposer);
        _proposeTransaction(payable(address(this)), 0, data);
    }

    function proposeRemoveProposer(address oldProposer) public onlyProposer {
        require(isProposer[oldProposer], "The address is not a proposer");
        bytes memory data = abi.encodeWithSignature("_removeProposer(address)", oldProposer);
        _proposeTransaction(payable(address(this)), 0, data);
    }


    /* METHODS */

    function proposeTransaction(address payable to, uint256 value, bytes memory data) external onlyProposer {
        _proposeTransaction(to, value, data);
    }

    function approveTransaction(uint256 transactionId) external onlyApprover {
        Transaction storage transaction = transactions[transactionId];
        require(!transaction.executed, "Transaction already executed");
        require(!isTxIdApprovedByAddress[transactionId][msg.sender], "Cannot approve transaction twice");

        _approveTransaction(transaction, transactionId);

        if (transaction.approvalCount >= minApprovers) {
            _executeTransaction(transaction, transactionId);
        }
    }


    /* INTERNALS */

    function _proposeTransaction(address payable to, uint256 value, bytes memory data) internal {
        transactionCount += 1;

        transactions[transactionCount] = Transaction({
            to: to,
            value: value,
            data: data,
            executed: false,
            approvalCount: 0
        });

        emit TransactionProposed(transactionCount, msg.sender, to, value, data);
    }

    function _approveTransaction(Transaction storage transaction, uint256 transactionId) internal {
        isTxIdApprovedByAddress[transactionId][msg.sender] = true;
        transaction.approvalCount += 1;

        emit TransactionApproved(transactionId, msg.sender);
    }

    function _executeTransaction(Transaction storage transaction, uint256 transactionId) internal {
        (bool success, ) = transaction.to.call{value: transaction.value}(transaction.data);
        require(success, "Transaction execution failed");
        transaction.executed = true;

        emit TransactionExecuted(transactionId);
    }

    function _setMinApprovers(uint256 _newMinApprovers) internal {
        // The reason for the require checking again is to avoid errors that may occur if more than one setMinApprovers function is proposed but not executed.
        require(_newMinApprovers > approverAmount / 2 && _newMinApprovers <= approverAmount, "New minimum approval amount should be greater than half of the current approver amount and less than current approver amount.");
        minApprovers = _newMinApprovers;

        emit MinApproverSet(_newMinApprovers);
    }

    function _addApprover(address _newApprover) internal {
        // The reason for the require checking again is to avoid errors that may occur if more than one addApprover function is proposed but not executed.
        require(minApprovers > (approverAmount + 1) / 2, "Minimum approval amount should be greater than half of the (current approver amount + 1)");
        isApprover[_newApprover] = true;
        approverAmount++;

        emit ApproverAdded(_newApprover);
    }

    function _removeApprover(address _oldApprover) internal {
        // The reason for the require checking again is to avoid errors that may occur if more than one removeApprover function is proposed but not executed.
        require(minApprovers <= approverAmount - 1, "Minimum approval amount should be less than (current approver amount - 1)");
        isApprover[_oldApprover] = false;
        approverAmount--;

        emit ApproverRemoved(_oldApprover);
    }

    function _addProposer(address _newProposer) internal {
        isProposer[_newProposer] = true;
        proposerAmount++;

        emit ProposerAdded(_newProposer);
    }

    function _removeProposer(address _oldProposer) internal {
        isProposer[_oldProposer] = false;
        proposerAmount--;

        emit ProposerRemoved(_oldProposer);
    }


    /* WITHDRAW */

    function withdrawEther() external onlyApprover {
        uint256 amount = address(this).balance;
        require(amount > 0, "Contract has no ether to withdraw");

        (bool success, ) = payable(msg.sender).call{value: amount}("");
        require(success, "Transfer failed");
    }
}
