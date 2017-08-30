// Current account class

import Account from './Account';

class CurrentAcc extends Account {
  // withdrawal method for current account class
  withdraw(amount) {
    if (amount < (this.balance + 10000)) {
      this.balance -= amount;
      return `TRANSACTION SUCCESSFUL: You have withdrawn ${amount} in your account`;
    }
    return 'TRANSACTION ERROR!';
  }

  overdraft(amount) {
    if (amount <= (this.balance * 3)) {
      this.balance -= amount;
      return `TRANSACTION SUCCESSFUL: You have accessed an overdraft of ${amount}`;
    }
    return 'TRANSACTION ERROR!';
  }
}


// export an instance 

const Tomi = new CurrentAcc('Israel Tomilola', 17, 1000000);
export default Tomi;
