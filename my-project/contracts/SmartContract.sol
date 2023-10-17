// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract SmartContract {
    struct Transaction {
        address buyer;
        uint256 itemId;
        uint256 price;
    }

    mapping(uint256 => Transaction) public transactions;
    uint256 public transactionCount = 0;

    event TransactionAdded(
        uint256 indexed transactionId,
        address buyer,
        uint256 itemId,
        uint256 price
    );

    function purchaseItem(uint256 _itemId, uint256 _price) public payable {
        require(msg.value == _price, "Incorrect ETH value sent");
        transactions[transactionCount] = Transaction(msg.sender, _itemId, _price);
        emit TransactionAdded(transactionCount, msg.sender, _itemId, _price);
        transactionCount++;
    }
}
