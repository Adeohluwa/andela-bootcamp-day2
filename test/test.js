//A TDD test suite to check for correctness
//and accuracy of an OOP Model of a bank account


//fat arrows not allowed inside mocha test suite
//see ---> mochajs.org/#arrow-functions

const expect = require('chai').expect;
const Ade = require("../bank.js").Ade;


describe('Bank Account Suite', function(){
	describe('Initial account balance', function() {
    	it('should be 5000', function() {
      expect(Ade._balance).to.equal(5000);
  	})});

})