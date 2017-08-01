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
		
	}

	//balance method for account class
	balance(){
		this._balance;
		return "TRANSACTION SUCCESSFUL: You have " + this._balance + " in your account";
	}
}


//export an instance 
module.exports = {
	Ade : new Account("Adeoluwa Adejumo", 5, 5000)
	Victoria: new SavingsAcc("Victoria Offoma" 19, 50000)
}