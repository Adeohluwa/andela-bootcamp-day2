'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Victoria = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Account2 = require('./Account');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Account class

var SavingsAcc = function (_Account) {
  _inherits(SavingsAcc, _Account);

  function SavingsAcc() {
    _classCallCheck(this, SavingsAcc);

    return _possibleConstructorReturn(this, (SavingsAcc.__proto__ || Object.getPrototypeOf(SavingsAcc)).apply(this, arguments));
  }

  _createClass(SavingsAcc, [{
    key: 'withdraw',

    // withdraw method for saving account class
    value: function withdraw(amount) {
      if (amount < this.balance + 5000) {
        this.balance -= amount;
        return 'TRANSACTION SUCCESSFUL: You have withdrawn ' + amount + ' in your account';
      }

      return 'TRANSACTION ERROR!';
    }
  }]);

  return SavingsAcc;
}(_Account2.Account);

// export an instance 

var Victoria = new SavingsAcc('Victoria Offoma', 19, 50000);

exports.Victoria = Victoria;