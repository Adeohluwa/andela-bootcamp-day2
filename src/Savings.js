// Account class

import Account from './Account';

class SavingsAcc extends Account {
  // withdraw method for saving account class
  withdraw(amount) {
    if (amount < (this.balance + 5000)) {
      this.balance -= amount;
      return `TRANSACTION SUCCESSFUL: You have withdrawn ${amount} in your account`;
    }

    return 'TRANSACTION ERROR!';
  }
}

// export an instance 

const Victoria = new SavingsAcc('Victoria Offoma', 19, 50000);

export default Victoria;
