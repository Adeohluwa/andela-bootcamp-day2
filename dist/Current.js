'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tomi = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Account2 = require('./Account');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Current account class

var CurrentAcc = function (_Account) {
  _inherits(CurrentAcc, _Account);

  function CurrentAcc() {
    _classCallCheck(this, CurrentAcc);

    return _possibleConstructorReturn(this, (CurrentAcc.__proto__ || Object.getPrototypeOf(CurrentAcc)).apply(this, arguments));
  }

  _createClass(CurrentAcc, [{
    key: 'withdraw',

    // withdrawal method for current account class
    value: function withdraw(amount) {
      if (amount < this.balance + 10000) {
        this.balance -= amount;
        return 'TRANSACTION SUCCESSFUL: You have withdrawn ' + amount + ' in your account';
      }
      return 'TRANSACTION ERROR!';
    }
  }, {
    key: 'overdraft',
    value: function overdraft(amount) {
      if (amount <= this.balance * 3) {
        this.balance -= amount;
        return 'TRANSACTION SUCCESSFUL: You have accessed an overdraft of ' + amount;
      }
      return 'TRANSACTION ERROR!';
    }
  }]);

  return CurrentAcc;
}(_Account2.Account);

// export an instance 

var Tomi = new CurrentAcc('Israel Tomilola', 17, 1000000);
exports.Tomi = Tomi;