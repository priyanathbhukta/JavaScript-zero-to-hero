 const arr = new Array(1,2,3,4,5,6,7,8,9,10)
console.log(arr);   // [  1, 2, 3, 4,  5, 6, 7, 8, 9, 10  ]
console.log(arr.length);    //10

// Arrays Methods
arr.push(12);       //insert 12 at the end of the array
console.log(arr);   //[  1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ,12 ]

arr.pop();      // pop values from the end of the array: 12
arr.pop();
arr.pop();
console.log(arr);       //[  1, 2, 3, 4,  5, 6, 7, 8 ]

arr.unshift(0)          // insert 0 at the beginning of the array
console.log(arr);   //[ 0, 1, 2, 3, 4,  5, 6, 7, 8 ]

arr.shift()         // shift method remove the 1st element from the array here remove 0
arr.shift()         // here remove 1
console.log(arr);

console.log(arr.includes(20));      //false because 20 isn't present in  the array
console.log(arr.indexOf(20));       // though 20 isn't present so index return as -1

const newArr = arr.join()           // join method join two arrays and convert it into string formart
console.log(arr);
console.log(typeof(newArr));        //string


// slice and splice methods
const arr1 = new Array(1,2,3,4,5,6,7,8,9,10)
console.log("T",arr1);           // T [  1, 2, 3, 4,  5, 6, 7, 8, 9, 10  ]
const my1 = arr1.slice(0,5);     // slice methods take the 0th to 4th index 

console.log("P",arr1);           // P [  1, 2, 3, 4,  5, 6, 7, 8, 9, 10  ]
console.log(my1);               // [ 1, 2, 3, 4, 5 ]

const my2 = arr1.splice(0,5);
console.log("R",arr1);         // R [ 6, 7, 8, 9, 10 ] here the original array deform that trim the part which includes in splice methods 
console.log(my2);           // [ 1, 2, 3, 4, 5 ]

