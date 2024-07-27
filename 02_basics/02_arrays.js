const hero = ["batman","superman","spiderman"]
const anotherHero = ["Thor","IronMan","Hulk"]

console.log(hero.concat(anotherHero));      //[ 'batman', 'superman', 'spiderman', 'Thor', 'IronMan', 'Hulk' ]

hero.push(anotherHero)
console.log(hero);          //[ 'batman', 'superman', 'spiderman', [ 'Thor', 'IronMan', 'Hulk' ] ]

console.log(hero[3]);          //[ 'Thor', 'IronMan', 'Hulk' ]


const newHero = [...hero, ...anotherHero]       // spread operator that spread all array elements 
console.log(newHero);       
/*
[
  'batman',
  'superman',
  'spiderman',
  [ 'Thor', 'IronMan', 'Hulk' ],
  'Thor',
  'IronMan',
  'Hulk'
]
*/

console.log("************************************************");

const anotherArray = [1,2,3,[4,5,6],7,[8,9,[10,11]]]

let real_another_array = anotherArray.flat(Infinity)

console.log(real_another_array);    //[  1, 2, 3, 4,  5, 6, 7, 8, 9, 10,11 ]

 
console.log(Array.isArray(real_another_array));   //true

console.log(Array.isArray("Titas"));    //false

console.log(Array.from("Titas"));     //[ 'T', 'i', 't', 'a', 's' ] convert a string to array

console.log(Array.from({name:"Titas"}));    //[]  // here .from() method can't convert the object into array 
                                            //because it's not defined which thing need to be convert into array key or value

let sc1 = 100
let sc2 = 200
let sc3 = 300
console.log(Array.of(sc1,sc2,sc3));    // .of() method convert into arrays from a set of values                                