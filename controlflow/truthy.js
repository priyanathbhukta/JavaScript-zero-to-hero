const userEmail = "p@gmail.com"
if(userEmail) console.log("got user email");
else console.log("don't have user email");

//falsy values 
//-------------
// false, 0, -0, BigInt 0n, null, undefined, Nan

//truthy values
//-------------
// "0", 'false', " ", [], {}, function(){},

// check object is empty or not
//-----------------------------
const myObj = {}
if(Object.keys(myObj).length ===0){         //Object.keys(myObj) convert object into an array
    console.log("Object is empty ");
}

//check array is empty or not
//----------------------------

const myArray = [1,2]
if(myArray.length === 0) console.log("array is empty");
else console.log("array is not empty");

//Nullish Coalescing operator (??) : null undefined
//-------------------------------------------------
let val1;
//val1 = 5 ?? 10
// val1 = null ?? 10

console.log(val1);  //10

