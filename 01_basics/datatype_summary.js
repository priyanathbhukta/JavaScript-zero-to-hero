// Primitive Datatype :- There are 7 categories in it
    // 1. String :- 
    // 2. Number :- int, float, double, 
    // 3. boolean :- true or false
    // 4. null :- the value is not zero
    // 5. undefined :- not defined yet
    // 6. Symbol :- make value unique 
    // 7. BigInt: 


// Example of Symbol datatype

const id = Symbol('123');
const AnotherId = Symbol('123');

console.log(id);            //Symbol(123)
console.log(AnotherId);     //Symbol(123)

console.log(id === AnotherId); // false

//Example of BigInt datatype
const bigNumber = 45789823564214n
console.log(bigNumber);     //45789823564214n
console.log(typeof bigNumber);  //bigint

const x = null
console.log(typeof x);      //object

// Non-Primitive Datatype (Rference type)
//  Array, Objects, Functions

//Arrays
const heros = ["shaktiman","naagraj","doga"]
console.log(heros);     //[ 'shaktiman', 'naagraj', 'doga' ]

let myObj={
    name: "titas",
    age:22,
}
console.log(myObj);     //{ name: 'titas', age: 22 }


const myFunction = function(){
    console.log("Hello World!");
}
