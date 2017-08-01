//A TDD test suite to check for correctness
//and accuracy of an OOP Model of a bank account


//fat arrows not allowed inside mocha test suite
//see ---> mochajs.org/#arrow-functions

const expect = require('chai').expect;

describe('Bank Account Suite', function(){
	it('Should Return 5000',function(){
    	expect(Ade.balance()).to.equal(5000);})
})