//A TDD test suite to check for correctness
//and accuracy of an OOP Model of a bank account


//fat arrows not allowed inside mocha test suite
//see ---> mochajs.org/#arrow-functions

const expect = require("chai").expect;
const Ade = require("../bank.js").Ade;
const Victoria = require("../bank.js").Victoria;


describe("Bank Account Suite", function(){
	//assert that INITIAL BALANCE is 5000
	describe("INITIAL account balance should be N5000", function() {
    	it("should be 5000", function() {
      expect(Ade._balance).to.equal(5000);
  	})});
	//assert that the DEPOSIT METHOD works correctly
  	describe("DEPOSIT method for class account", function() {
    	it("should return success msg", function() {
      expect(Ade.deposit(5000)).to.equal("TRANSACTION SUCCESSFUL: You have deposited 5000");
  	})});
  	//assert that the WITHDRAW METHOD works correctly
  	describe("WITHDRAW method for class account", function() {
    	it("should return success msg", function() {
      expect(Ade.withdraw(5000)).to.equal("TRANSACTION SUCCESSFUL: You have withdrawn 5000");
  	})});
  	//assert that BALANCE METHOD works correctly
  	describe("BALANCE method for class account", function() {
    	it("should return success msg", function() {
      expect(Ade.balance()).to.equal("TRANSACTION SUCCESSFUL: You have 5000 in your account");
  	})});

  	//proove that the SAVINGS ACCOUNT CLASS works as intented
  	describe("SAVINGS Account class working correctly", function() {
    	it("should return savings account balance", function() {
      expect(Victoria._balance).to.equal(50000);
  	})});

  	//proove that the  WITHDRAW METHOD has a correct implentation
  	describe("WITHDRAW Method for Savings Account class", function() {
    	it("should return Transaction sucess", function() {
      expect(Victoria.withdraw(20000)).to.equal("TRANSACTION SUCCESSFUL: You have withdrawn 20000 in your account");
  	})});

  	//proove that CURRENT ACCOUNT CLASS has a correct implentation
  	describe("CURRENT Account class is implemented", function() {
    	it("should return Current account balance", function() {
      expect(Tomi._balance).to.equal(1000000);
  	})});


})