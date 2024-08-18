// Higher order array loops

// for of loop statement
//----------------------
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4]
for (const i of arr) {
    console.log(`value of i ${i}`);
}
console.log("*******************************************");
const greetings = `Priyanath Bhukta`
for (const i of greetings) {
    console.log(`value of i ${i}`);
}

//maps
//----

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('FR', "France")
map.set('IN', "India")
console.log(map);
for (const [key,value] of map) {
    console.log(key, ':-', value);
}
console.log("*******************************************");

//for in loop on object : used in obejct iterations
//--------------------------------------------------
const myObj ={
    js:"javascript",
    cpp:"c++",
    py:"python",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

// for in loop in array
//---------------------


const array = ["js","c","c++","py","sh","java"]
for (const key in array) {
    console.log(array[key]);
}



console.log("*****************************************************************`");

// for each loop statement
//--------------------------
// forEach loop needs callback function and a callback function has no name in definition
// normal callback function
//-------------------------
// const coding = ["js","c","c++","py","sh","java"]
// coding.forEach(function (item){
//     console.log(item);
// })


// arrow function : callback function
//---------------
const coding = ["js","c","c++","py","sh","java"]
coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})
console.log("000000000000000000000000000000000000000000000000000000000000");
// function call by reference
//----------------------------
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

console.log("1111111111111111111111111111111111111111111111111111111111111");
// array of obejcts
//-------------------

const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"Ruby",
        languageFileName:"rb"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
]
myCoding.forEach((item,)=>{
    console.log(item.languageFileName);
    
})
console.log("================================================");

// const languages = ["js","c","c++","py","sh","java"]
// const values = languages.forEach((item)=>{
//     console.log(item); 
//     return item 
// })
// console.log(values);        //undefined because forEach loop never return any values
console.log("================================================");

//filter operation on array, implicit return 
const nums = [1,2,3,4,5,6,7,8,9,10]
const newNums = nums.filter((num)=> num>5)
console.log(newNums);       //[ 6, 7, 8, 9, 10 ]
//explicit return on arrow function
const newNums1 = nums.filter((num)=>{ return num>5})
console.log(newNums1);          //[ 6, 7, 8, 9, 10 ]

//using forEach loop
const newNumber = []
nums.forEach((num)=>{
    if(num>4){
        newNumber.push(num)
    }
})
console.log(newNumber);     //[ 5, 6, 7, 8, 9, 10 ]

console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");

//Example on filer operation
//--------------------------

const books = [
    {title: "Book1", genre: "Fiction", publish:2002, edition:2005 },
    {title: "Book2", genre: "math", publish:1990, edition:2010 },
    {title: "Book3", genre: "history", publish:2000, edition:2004 },
    {title: "Book4", genre: "english", publish:2003, edition:2003 },
    {title: "Book5", genre: "novel", publish:1970, edition:2006 },
    {title: "Book6", genre: "encylopedia", publish:1945, edition:1970 },
    {title: "Book7", genre: "Non-Fiction", publish:2001, edition:2019 },
    {title: "Book8", genre: "Science", publish:1999, edition:2016 },
    {title: "Book9", genre: "Fiction", publish:2007, edition:2005 },
    {title: "Book10", genre: "Fiction", publish:1980, edition:2005 },
];
let userBooks = books.filter((bk)=>bk.genre ==="Fiction")
 userBooks = books.filter((bk)=>{return bk.publish >1990 && bk.genre === "Fiction"})
console.log(userBooks);
console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");

const muNum = [1,2,3,4,5,6,7,8,9,10]
const no = muNum.map((num)=>{
    return num+10
})
console.log(no);


// chaining method 
//----------------
const interesting = muNum
                    .map((num)=>num*10)
                    .map((num)=>num+5)
                    .filter((num)=>num>=40)
console.log(interesting);       //[ 65, 75, 85, 95, 105]

//reduce method
//-------------

const n = [1,2,3]
const total = n.reduce((acc,curr)=>{
    console.log(`accumulator: ${acc}, currentvalue: ${curr}`);
    return acc + curr
},0)
console.log(total);
// another  example of reduce method
//----------------------------------

const shop = [
    {
        iteName: "js course",
        price:1299
    },
    {
        iteName: "java course",
        price:1799
    },
    {
        iteName: "c++ course",
        price:999
    },
    {
        iteName: "python course",
        price:1999
    },
    {
        iteName: "ruby course",
        price:2999
    },
]
const priceToPay = shop.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);
