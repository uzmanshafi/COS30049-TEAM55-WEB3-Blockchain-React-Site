// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    
    struct User {
        string name;
        string email;
    }

    struct Purchase {
        string itemName;
        uint256 itemPrice;
        uint256 purchasedTime;
    }

    mapping(address => User) public users;
    mapping(address => Purchase) public purchases;

    function setUser(string memory _name, string memory _email) public {
        User memory newUser = User(_name, _email);
        users[msg.sender] = newUser;
    }

    function setPurchase(string memory _itemName, uint256 _itemPrice) public {
        Purchase memory newPurchase = Purchase(_itemName, _itemPrice, block.timestamp);
        purchases[msg.sender] = newPurchase;
    }

    function getUser(address _userAddress) public view returns (string memory, string memory) {
        User memory user = users[_userAddress];
        return (user.name, user.email);
    }

    function getPurchase(address _userAddress) public view returns (string memory, uint256, uint256) {
        Purchase memory purchase = purchases[_userAddress];
        return (purchase.itemName, purchase.itemPrice, purchase.purchasedTime);
    }
}