# OOP Model Of A Bank Account
    
    *Account           --base model implements standard features all accounts should have 
    *Savings Account   --implements some features specific to a saving account e.g a low
    withdrawal limit
    *Current Account   --implements features unique to current account users


## Some Features Implemented

  ###  Account Class
        *deposit    -- adds money to the account  
        *withdrawal  --gets money from the account
        *balance     --returns available money in the account

  ###  Savings Account Class
        *low withdrawal limit -- allows you withdraw till you have N5000 as balance
    
  ###  Current Account Class 
        *overdraft method -- allows you withdraw x3 of your account balance

How To Run

    ```git clone```

Install The Dependencies

    ```npm install```

Start The App

   ```npm start```

## License

[MIT](LICENSE)