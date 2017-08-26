// This is An OOP Model of a bank account
// OOP is suitable for when you have relatively 
// few operations and and large data sets


// Base account model implements the standard features 

class Account {
  constructor(name, age, amount) {
    this.name = name;
    this.age = age;
    this.balance = amount;
  }


  // deposit method for account class
  deposit(amount) {
    this.balance += amount;
    return `TRANSACTION SUCCESSFUL: You have deposited #{amount}`;
  }


  // withdraw method for account class
  withdraw(amount) {
    if (amount < this.balance) {
      this.balance -= amount;
      return `TRANSACTION SUCCESSFUL: You have withdrawn #{amount}`;
    }

    return 'TRANSACTION ERROR!';
  }


  // balance method for account class
  balance(this.balance) {
    return `TRANSACTION SUCCESSFUL: You have #{this.balance} in your account`;
  }
}


// export an instance 

const Ade = new Account('Adeoluwa Adejumo', 20, 5000);
export default Ade;
