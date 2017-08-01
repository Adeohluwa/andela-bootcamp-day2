//This is An OOP Model of a bank account
//OOP is suitable for when you have relatively 
//few operations and and large data sets


//Base account model implements the standard features 

class Account {
	constructor(name, age, amount) {
		this._name = name;
		this._age = age;
		this._balance = amount;	
	}

	//deposit method for account class
	deposit(amount){
		this._balance += amount;
		return "TRANSACTION SUCCESSFUL: You have deposited " + amount;
	}

	//withdraw method for account class
	withdraw(amount){
		if (amount < this._balance) {
			this._balance -= amount;	
			return "TRANSACTION SUCCESSFUL: You have withdrawn " + amount;
		}

		return "TRANSACTION ERROR!";
		
	}

	//balance method for account class
	balance(){
		this._balance;
		return "TRANSACTION SUCCESSFUL: You have " + this._balance + " in your account";
	}
}


class SavingsAcc extends Account {
	super(name, age, amount) {
	}
	//withdraw method for saving account class
	withdraw(amount){
		if (amount < (this._balance + 5000)) {
			this._balance -= amount
			return "TRANSACTION SUCCESSFUL: You have withdrawn " + amount + " in your account";
		}

		return "TRANSACTION ERROR!";
	}	
}


class CurrentAcc extends Account {
	super(name, age, amount) {
	}
	
	withdraw(amount){
		if (amount < (this._balance + 10000)) {
			this._balance -= amount
			return "TRANSACTION SUCCESSFUL: You have withdrawn " + amount + " in your account";
		}
		return "TRANSACTION ERROR!";
	}

	overdraft(amount){
		if (amount <= (this._balance * 3)){
			this._balance -= amount
			return "TRANSACTION SUCCESSFUL: You have accessed an overdraft of "+ amount;
		}
		return "TRANSACTION ERROR!";
	}
}


//export an instance 
module.exports = {
	Ade: new Account("Adeoluwa Adejumo", 20, 5000),
	Victoria: new SavingsAcc("Victoria Offoma", 19, 50000),
	Tomi: new CurrentAcc("Israel Tomilola", 17, 1000000)

}