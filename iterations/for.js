// for loop
//---------
for (let i = 0; i < 10; i++) {
    var element = i;
    if(element == 5) console.log("5 is the number");
    console.log(element);
}
console.log("*******************************************");
//table of 0 to 10
for (let i = 0; i <=10; i++) {
    console.log(`outer loop value ${i}`);
   for (let j = 0; j <=10; j++) {
        //console.log(`inner loop value ${j} and inner loop ${i}`);
        console.log(i+'*'+j+'='+i*j);
   }
}
console.log("*******************************************");
let myArray = ["flash","batman","superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

//break and continue statement
//----------------------------
console.log("*******************************************");
for (let index = 1; index <=20; index++) {
    if(index == 5){
        console.log("5 detected");
        break;      // break the flow of the for loop statement
    } 
    console.log(`value of i is ${index}`);
}
console.log("*******************************************");``
for (let index = 1; index <=20; index++) {
    if(index == 5){
        console.log("5 detected");
        continue;   // continue the rest of the iteration
    } 
    console.log(`value of i is ${index}`);
}