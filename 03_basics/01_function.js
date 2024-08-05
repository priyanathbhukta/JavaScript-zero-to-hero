
function sayMyName(){           //function declaration
    console.log("T");       //T
    console.log("I");       //I
    console.log("T");       //T
    console.log("A");       //A
    console.log("S");       //S 
}
sayMyName                       //here we don't get any output because here the reference of the
                                // function is called only but not execurted
sayMyName()                     //function calling using its reference. To execute a function we must use () parenthesis 

// Method 1

function addTwoNo(n1,n2){       //at the time of declartion n1,n2 is treated as parameters 
    console.log(n1+n2);
    
}
addTwoNo(15.2,23.5)     //38.7
addTwoNo(3,"4")         //34 js thought 3 is also a string so concat them and show result as 34

addTwoNo(3,null)        // output- 3        //here 3 and null is treated as arguments
const result = addTwoNo(3,5)        //output - 8
console.log("Result is: ",result);      //Result is:  undefined


//Method 2
function addNo(n1,n2){       
    return n1+n2;
}
const res = addNo(3,5)
console.log("Result is: ",res);     //Result is:  8

function logginUser(username){
    return `${username} just logged in`
}
logginUser("titas0220")         //there is no output because we don't print it we just return the value from the function
console.log(logginUser("titas0220"));       // here we get   titas0220 just logged in
console.log(logginUser(""));            //just logged in
console.log(logginUser());              //"undefined just logged in"  it show that because we are not 
                                        // passing any arguments at the time of function calling
// use if else statement

function logginUserName(username){
    if(!username){
        console.log("please enter an username ");
        
    }
    return `${username} just logged in`
}
console.log(logginUserName());      //please enter an username 