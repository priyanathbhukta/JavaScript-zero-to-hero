const user = {
    username:"titas",
    price:599,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    } 
}
 user.welcomeMessage()
    /*
    titas, welcome to website
{
  username: 'titas',
  price: 599,
  welcomeMessage: [Function: welcomeMessage]
}
    */
console.log(this);      // {} return empty object
console.log("**********************************************************");


//cade 1 
// function chai(){
//     console.log(this);
// }
// chai();
/*
    <ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 42.48380000144243,
      nodeStart: 2.4375,
      v8Start: 6.765299998223782,
      bootstrapComplete: 28.828500002622604,
      environment: 14.508199997246265,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1723866266768.241
  },
  fetch: [AsyncFunction: fetch]
}
*/

// Case 2
// const chai = ()=>{
//     let username = "titas"
//     console.log(this);      //{ } return empty object
// }
// chai();

//case 3
const chai = ()=>{
    let username = "titas"
    console.log(this.username);      //undefined
}
chai();

//Arrow function
//----------------
// explicit return : required to write return statement
//  const addTwo = (num1, num2)=>{
//      return num1 + num2
//     }
//  console.log(addTwo(3,5));      //8

 // implicit return : here don't required to write return statement
 //------------------------------------------------------------------
  const addTwo = (num1, num2)=> (num1 +num2)
  console.log(addTwo(3,5));     //8

  const add = (num1, num2)=> ({username: "titas"})
  console.log(add(4,6));    //{ username: 'titas' } here the function return a object 
  // *********object always returned under ({ })
  