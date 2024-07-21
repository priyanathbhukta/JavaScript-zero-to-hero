
//1.......
console.log("*****************1********************");
let score = "33abc"
console.log(typeof score); // string
console.log(typeof (score)); // string

let valueInNumber = Number(score)

console.log(typeof valueInNumber); // number
console.log(valueInNumber); //NaN:- Not a Number
console.log(typeof (valueInNumber)); // string


//2........
console.log("*****************2********************");
let sc = null
console.log(typeof sc); // oject
console.log(typeof (sc)); // oject

let v = Number(sc)

console.log(typeof v); // number
console.log(v); //0
console.log(typeof (v)); // number

//3........
console.log("*****************3********************");
let sc1 = undefined
console.log(typeof sc11); // undefined
console.log(typeof (sc1)); // undefined

let v1 = Number(sc1)

console.log(typeof v1); // number
console.log(v1); //NaN
console.log(typeof (v1)); // number

//4........
console.log("*****************4********************");
let sc2 = true
console.log(typeof sc2); // boolean
console.log(typeof (sc2)); // boolean

let v2 = Number(sc2)

console.log(typeof v2); // number
console.log(v2); //1
console.log(typeof (v2)); // number

//5.......
console.log("****************5********************");
let sc3 = false
console.log(typeof sc3); // boolen
console.log(typeof (sc3)); // boolean

let v3 = Number(sc3)

console.log(typeof v3); // number
console.log(v3); //0
console.log(typeof (v3)); // number


//****************CONVERSION IN SHORT******************/
/*
        "33"=> 33
        "33ABC"=> NaN
        null => 0
        true => 1
        false => 0
        undefine=> NaN
*/

// ******************** Operations *********************


let val = 3
let negval = -val
console.log(negval); // -3



console.log(2+2); //4
console.log(2-2); //0
console.log(2*2); //4
console.log(2/2); //1
console.log(2**3); //8
console.log(2%3); //2

let s1 = "ram"
let s2 = "sita"
let s3 = s1+" "+s2
console.log(s3); //ram sita


console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); //32
