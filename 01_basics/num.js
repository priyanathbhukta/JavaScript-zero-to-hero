const score = 400
console.log(score);     //400

const balance = new Number(100)
console.log(balance);       //[Number: 100]

console.log(balance.toString());    //100

console.log(balance.toString().length);     //3

console.log(balance.toFixed(2));        //100.00

const other = 23.8966
console.log(other.toPrecision(3));  //23.9

const ab= 123.8966
console.log(ab.toPrecision(3));     //124 // it takes only 3 significant digits

const x = 1000000
console.log(x.toLocaleString( ));   //1,000,000