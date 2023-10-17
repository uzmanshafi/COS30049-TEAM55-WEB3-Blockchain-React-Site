const SmartContract = artifacts.require("SmartContract");

contract("SmartContract", accounts => {
    let instance;
    
    before(async () => {
        instance = await SmartContract.deployed();
    });

    it("should allow a product to be purchased and emit the appropriate event", async () => {
        const itemId = 1;  // Just an example. Use an appropriate item id.
        const productPrice = 100; // Let's say this is in wei for simplicity

        let result = await instance.purchaseItem(itemId, productPrice, { from: accounts[0], value: productPrice });

        // Listen for the TransactionAdded event
        let event = result.logs[0].args;

        assert.equal(event.buyer, accounts[0], "Buyer address does not match");
        assert.equal(event.itemId.toNumber(), itemId, "Item ID does not match");
        assert.equal(event.price.toNumber(), productPrice, "Price does not match");
    });
});
