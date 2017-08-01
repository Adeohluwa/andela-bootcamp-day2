//A TDD test suite to check for correctness
//and accuracy of an OOP Model of a bank account


//fat arrows not allowed inside mocha test suite
//see ---> mochajs.org/#arrow-functions

const expect = require("chai").expect;
const Ade = require("../bank.js").Ade;


describe("Bank Account Suite", function(){
	describe("INITIAL account balance should be N5000", function() {
    	it("should be 5000", function() {
      expect(Ade._balance).to.equal(5000);
  	})});

  	describe("DEPOSIT method for class account", function() {
    	it("should return success msg", function() {
      expect(Ade.deposit(5000)).to.equal("TRANSACTION SUCCESSFUL: You have deposited 5000");
  	})});

  	describe("WITHDRAW method for class account", function() {
    	it("should return success msg", function() {
      expect(Ade.withdraw(5000)).to.equal("TRANSACTION SUCCESSFUL: You have withdrawn 5000");
  	})});

  	describe("BALANCE method for class account", function() {
    	it("should return success msg", function() {
      expect(Ade.balance()).to.equal("TRANSACTION SUCCESSFUL: You have 5000 in your account");
  	})});



})