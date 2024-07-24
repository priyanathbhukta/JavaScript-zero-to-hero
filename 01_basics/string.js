const name = "titas"

const repoCount = 50
//console.log(name +repoCount+"value");     //titas50value

const gname = new String('titas')
console.log(`Hello my name is ${gname} and my repo count is ${repoCount}`)

console.log(gname[2]);      //t
console.log(gname._proto_);     //undefined

console.log(gname.length);      // length = 5

console.log(gname.toUpperCase());   //TITAS     
console.log(gname.charAt(3));       // at position  3 the charecter is "a"

const newString = gname.substring(0,2);
console.log(newString);     //"ti" it not take the lst index charecter

const another = gname.slice(-5,-1)
console.log(another);       //tita

const newOne = "    titas   "
console.log(newOne);
console.log(newOne.trim());     // this function trim the starting and ending spcaes 

const url = "https://google.com/abc&20"
console.log(url.replace('&20','$10'));      // here &20 is replaced by https://google.com/abc$10

console.log(gname.bold());