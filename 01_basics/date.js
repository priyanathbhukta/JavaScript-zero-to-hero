// //Dates 

let myDate = new Date()

console.log(myDate);        //2024-07-24T05:26:58.179Z
console.log(typeof(myDate));    //object



console.log(myDate.toString()); //Wed Jul 24 2024 05:27:48 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());         //Wed Jul 24 2024
console.log(myDate.toLocaleString());       //7/24/2024, 5:28:44 AM
        

let myCreateDate = new Date(2023,0,12)
console.log(myCreateDate.toDateString());       //Thu Jan 12 2023

let myDuplicate = new Date(2023,0,12,5,3)
console.log(myDuplicate.toLocaleString());      //  1/12/2023, 5:03:00 AM

let dup = new Date("01-14-2024")
console.log(dup.toLocaleString());          //1/14/2024, 12:00:00 AM


let x =  Date.now()

console.log(x);     // ms value from jan 1 1970
console.log(dup.getFullYear());

let a = new Date
console.log(a.toLocaleString('default',{
    weekday:"long", 
}));            //Wednesday 