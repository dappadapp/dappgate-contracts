// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MultisigWallet {
    uint256 public minApprovers; // minimum number of required approvers in order to execute a transaction.
    uint256 public approverAmount; // number of approvers
    uint256 public proposerAmount; // number of proposers
    uint256 public transactionCount; // number of transactions proposed

    struct Transaction {
        address payable to;
        uint256 value;
        bytes data;
        bool executed;
        uint256 approvalCount;
    }

    mapping(address => bool) public isApprover; // approves the execution of the functions proposed by the proposers.
    mapping(address => bool) public isProposer; // creates function proposals in order for the approvers to approve and execute them.
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


    /* MODIFIERS */

    modifier onlyApprover() {
        require(isApprover[msg.sender], "Not an approver");
        _;
    }

    modifier onlyProposer() {
        require(isProposer[msg.sender], "Not a proposer");
        _;
    }

    modifier onlyAddressThis() {
        require(msg.sender == address(this), "The caller has to be the contract itself.");
        _;
    }


    /* CONSTRUCTOR */

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
        bytes memory data = abi.encodeWithSignature("setMinApprovers(uint256)", _newMinApprovers);
        proposeTransaction_(payable(address(this)), 0, data);
    }

    function proposeAddApprover(address newApprover) public onlyProposer {
        require(!isApprover[newApprover], "The address is already an approver");
        require(minApprovers > (approverAmount + 1) / 2, "Minimum approval amount should be greater than half of the (current approver amount + 1)");
        bytes memory data = abi.encodeWithSignature("addApprover(address)", newApprover);
        proposeTransaction_(payable(address(this)), 0, data);
    }

    function proposeRemoveApprover(address oldApprover) public onlyProposer {
        require(isApprover[oldApprover], "The address is not an approver");
        require(minApprovers <= approverAmount - 1, "Minimum approval amount should be less than (current approver amount - 1)");
        bytes memory data = abi.encodeWithSignature("removeApprover(address)", oldApprover);
        proposeTransaction_(payable(address(this)), 0, data);
    }

    function proposeAddProposer(address newProposer) public onlyProposer {
        require(!isProposer[newProposer], "The address is already a proposer");
        bytes memory data = abi.encodeWithSignature("addProposer(address)", newProposer);
        proposeTransaction_(payable(address(this)), 0, data);
    }

    function proposeRemoveProposer(address oldProposer) public onlyProposer {
        require(isProposer[oldProposer], "The address is not a proposer");
        bytes memory data = abi.encodeWithSignature("removeProposer(address)", oldProposer);
        proposeTransaction_(payable(address(this)), 0, data);
    }


    /* METHODS */

    function proposeTransaction(address payable to, uint256 value, bytes memory data) external onlyProposer {
        proposeTransaction_(to, value, data);
    }

    function approveTransaction(uint256 transactionId) external onlyApprover {
        Transaction storage transaction = transactions[transactionId];
        require(!transaction.executed, "Transaction already executed");
        require(!isTxIdApprovedByAddress[transactionId][msg.sender], "Cannot approve transaction twice");

        approveTransaction_(transaction, transactionId);

        if (transaction.approvalCount >= minApprovers) {
            executeTransaction_(transaction, transactionId);
        }
    }


    /* INTERNALS */

    function proposeTransaction_(address payable to, uint256 value, bytes memory data) internal {
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

    function approveTransaction_(Transaction storage transaction, uint256 transactionId) internal {
        isTxIdApprovedByAddress[transactionId][msg.sender] = true;
        transaction.approvalCount += 1;

        emit TransactionApproved(transactionId, msg.sender);
    }

    function executeTransaction_(Transaction storage transaction, uint256 transactionId) internal {
        (bool success, ) = transaction.to.call{value: transaction.value}(transaction.data);
        require(success, "Transaction execution failed");
        transaction.executed = true;

        emit TransactionExecuted(transactionId);
    }

    function setMinApprovers(uint256 _newMinApprovers) external onlyAddressThis {
        // The reason for the require checking again is to avoid errors that may occur if more than one setMinApprovers function is proposed but not executed.
        require(_newMinApprovers > approverAmount / 2 && _newMinApprovers <= approverAmount, "New minimum approval amount should be greater than half of the current approver amount and less than current approver amount.");
        minApprovers = _newMinApprovers;

        emit MinApproverSet(_newMinApprovers);
    }

    function addApprover(address _newApprover) external onlyAddressThis {
        // The reason for the require checking again is to avoid errors that may occur if more than one addApprover function is proposed but not executed.
        require(minApprovers > (approverAmount + 1) / 2, "Minimum approval amount should be greater than half of the (current approver amount + 1)");
        require(isApprover[_newApprover] == false, "Approver already exists.");
        isApprover[_newApprover] = true;
        approverAmount++;

        emit ApproverAdded(_newApprover);
    }

    function removeApprover(address _oldApprover) external onlyAddressThis {
        // The reason for the require checking again is to avoid errors that may occur if more than one removeApprover function is proposed but not executed.
        require(minApprovers <= approverAmount - 1, "Minimum approval amount should be less than (current approver amount - 1)");
        require(isApprover[_oldApprover] == true, "Approver already exists.");
        isApprover[_oldApprover] = false;
        approverAmount--;

        emit ApproverRemoved(_oldApprover);
    }

    function addProposer(address _newProposer) external onlyAddressThis {
        require(isProposer[_newProposer] == false, "Approver already exists.");
        isProposer[_newProposer] = true;
        proposerAmount++;

        emit ProposerAdded(_newProposer);
    }

    function removeProposer(address _oldProposer) external onlyAddressThis {
        require(isProposer[_oldProposer] == true, "Approver already exists.");
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
