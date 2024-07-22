
// Stack used for primitive type

// Heap used for Non-primitive type



let myName = "Titas"
let anotherName = myName
anotherName = "Priyanath"

console.log(myName);        //Titas
console.log(anotherName);   //Priyanath

let userOne = {
    email: "user@google.com",
    upi: "457898@ybl"
}

let userTwo = userOne
userTwo.email = "titas@google.com"


console.log(userOne.email);     //titas@google.com
console.log(userTwo.email);     //titas@google.com