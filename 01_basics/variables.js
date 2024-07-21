const accountId = 144553 // const:- non-changeable variable declaration
let accountEmail = "bhuktapriyanath@gmail.com" // let:- changeable 
let accountState;
var accountPassword = "12345"                   // var:- changeable

/*
Prefer noyt ti use var 
beacuse of issue in block scope and functional scope
*/


accountCity = "kolkata" // never suggested for best-practice

// accountId = 123 not allowed bracuse accountId is previously declared as const
accountEmail = "priyanathbhukta@gmail.com"


accountPassword = "2135"
accountCity = "banglore"
console.log(accountEmail);  // priyanathbhukta@gmail.com 

console.log(accountPassword);   //2135
console.log(accountCity);       //banglore


console.log([accountEmail,accountId,accountPassword,accountCity]); // [ 'priyanathbhukta@gmail.com', 144553, '2135', 'banglore' ]


console.table([accountEmail,accountId,accountPassword,accountCity,accountState]); 


/*
┌─────────┬─────────────────────────────┐
│ (index) │ Values                      │
├─────────┼─────────────────────────────┤
│ 0       │ 'priyanathbhukta@gmail.com' │
│ 1       │ 144553                      │
│ 2       │ '2135'                      │
│ 3       │ 'banglore'                  │
│ 4       │ undefined                   │
└─────────┴─────────────────────────────┘
*/