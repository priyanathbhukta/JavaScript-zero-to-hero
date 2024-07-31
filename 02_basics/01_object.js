// singleton

//object literals :- method o fobject declaration
const mySyn = Symbol("key1")
const user={
    name: "Titas",              //keys are stored as string format "name"
    "full name": "Titas Bhukta",
    age: 18,
    mySyn:"myKey1",
    [mySyn]:"myKey2",       //symbol is declared as [mySyn]
    location: "kolkata",
    email:"priyanathbhukta@gmail.com",
    isLoggedIn: false,
    lastLoggedIn:["Monday","Friday"]
}
console.log(user.location);     //kolkata
console.log(user["email"]);     //priyanathbhukta@gmail.com
console.log(user["full name"]);     // Titas Bhukta
console.log(typeof user.mySyn);     //string mysyn treated as string datatype

console.log(user[mySyn]);       //myKey2

user.email = "titas@chatgpt.com"
//Object.freeze(user)
user.email = "titas@microsoft.com"

console.log(user.email);        //titas@chatgpt.com because before last updation we freze the object

user.greeting = function(){
    console.log("hello js user");
}
console.log(user.greeting);    //[Function (anonymous)] // function not execute but a reference came here

user.greetingTwo = function(){
    console.log(`hello js user I'm ${this.name}`);
}
console.log(user.greetingTwo());        //hello js user I'm Titas