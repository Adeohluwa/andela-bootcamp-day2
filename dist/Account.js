'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// This is An OOP Model of a bank account
// OOP is suitable for when you have relatively 
// few operations and and large data sets


// Base account model implements the standard features 

var Account = exports.Account = function () {
  function Account(name, age, amount) {
    _classCallCheck(this, Account);

    this.name = name;
    this.age = age;
    this.balance = amount;
  }

  // deposit method for account class


  _createClass(Account, [{
    key: 'deposit',
    value: function deposit(amount) {
      this.balance += amount;
      return 'TRANSACTION SUCCESSFUL: You have deposited ' + amount;
    }

    // withdraw method for account class

  }, {
    key: 'withdraw',
    value: function withdraw(amount) {
      if (amount < this.balance) {
        this.balance -= amount;
        return 'TRANSACTION SUCCESSFUL: You have withdrawn ' + amount;
      }

      return 'TRANSACTION ERROR!';
    }

    // balance method for account class

  }, {
    key: 'balance',
    value: function balance() {
      return 'TRANSACTION SUCCESSFUL: You have ' + this.balance + ' in your account';
    }
  }]);

  return Account;
}();

// export an instance 

var Ade = new Account('Adeoluwa Adejumo', 20, 5000);

exports.Ade = Ade;