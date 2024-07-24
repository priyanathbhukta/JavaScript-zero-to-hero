console.log("****************** Math Libraries ***********************");

// console.log(Math);      //Object [Math] {}

// console.log(Math.abs(-4));      //4
// console.log(Math.round(4.6));   //5
// console.log(Math.ceil(4.1));    //5 this method always keep the upper value of rounf of
// console.log(Math.floor(4.9));   //4 this method always keep the lower value of round of

// console.log(Math.sqrt(36));     //5 find the square root of a number

// console.log(Math.min(2,5,6,0,1));       // it returns the minimum value among some numbers



/*
    Math.random() :- this  methods retuns a random number that always lies between 0 to 1 , sometimes  it may be 0 or 1 by default..
 */

// console.log(Math.random());     //0.4448457508652146
// console.log(Math.random());     //0.6941371041335707
// console.log(Math.random());     //0.28168684631111796

const min = 10
const max = 20


console.log(Math.floor((Math.random()*(max-min +1))+min));      // to get the vlaue in between 10 and 20 we apply this formula