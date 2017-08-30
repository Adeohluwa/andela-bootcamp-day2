// A TDD test suite to check for correctness
// and accuracy of an OOP Model of a bank account


// fat arrows not allowed inside mocha test suite
// see ---> mochajs.org/#arrow-functions
const expect = require('chai').expect;
const Ade = require('../Account').Ade;
const Victoria = require('../Savings').Victoria;
const Tomi = require('../Current').Tomi;

describe('Bank Account Suite', () => {
  // assert that INITIAL BALANCE is 5000
  describe('INITIAL account balance should be N5000', () => {
    it ('should be 5000', () => {
      expect(Ade.balance).to.equal(5000);
    });
  });
  // assert that the DEPOSIT METHOD works correctly
  describe('DEPOSIT method for class account', () => {
    it('should return success msg', () => {
      expect(Ade.deposit(5000)).to.equal('TRANSACTION SUCCESSFUL: You have deposited 5000');
    });
  });
  // assert that the WITHDRAW METHOD works correctly
  describe('WITHDRAW method for class account', () => {
    it('should return success msg', () => {
      expect(Ade.withdraw(5000)).to.equal('TRANSACTION SUCCESSFUL: You have withdrawn 5000');
    });
  });
  // assert that BALANCE METHOD works correctly
  describe('BALANCE method for class account', () => {
    it('should return success msg', () => {
      expect(Ade.balance).to.equal(5000);
    });
  });

  // proove that the SAVINGS ACCOUNT CLASS works as intented
  describe('SAVINGS Account class working correctly', () => {
    it('should return savings account balance', () => {
      expect(Victoria.balance).to.equal(50000);
    });
  });

  // proove that the  WITHDRAW METHOD for savings account has a correct implentation
  describe('WITHDRAW Method for Savings Account class', () => {
    it('should return Transaction sucess', () => {
      expect(Victoria.withdraw(20000)).to.equal('TRANSACTION SUCCESSFUL: You have withdrawn 20000 in your account');
    });
  });

  // proove that CURRENT ACCOUNT CLASS has a correct implentation
  describe('CURRENT Account class is implemented', () => {
    it('should return Current account balance', () => {
      expect(Tomi.balance).to.equal(1000000);
    });
  });

  // assert that CURRENT ACCOUNT CLASS has a correct implentation
  describe('WITHDRAW Method for Current Account class', () => {
    it('should return Transaction success', () => {
      expect(Tomi.withdraw(100000)).to.equal('TRANSACTION SUCCESSFUL: You have withdrawn 100000 in your account');
    });
  });

  // assert that OVERDRAFT  is successful
  describe('OVERDRAFT Method for Current Account class', () => {
    it('should return Transaction success', () => {
      expect(Tomi.overdraft(1500000)).to.equal('TRANSACTION SUCCESSFUL: You have accessed an overdraft of 1500000');
    });
  });
});
