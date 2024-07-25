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