// singleton object creation

const tinder = new Object()
console.log(tinder);        // output - {}

// non singleton object creation

const tinderUser = {}
console.log(tinderUser);     // output - {}

tinderUser.id = "123abc"
tinderUser.name = "titas"
tinderUser.isLoggedIn = false

console.log(tinderUser);        //{ id: '123abc', name: 'titas', isLoggedIn: false }
console.log(Object.keys(tinderUser));       //[ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser));         //[ '123abc', 'titas', false ]
console.log(Object.entries(tinderUser));        //[ [ 'id', '123abc' ], [ 'name', 'titas' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn"));       //true

// nested objects
//***************
const regularUser ={
    email : "titas@gmail.com",
    fullName :{
        userFullName:{
            firstName : "Tiya",
            lastName : "Sengupta"
        }
    }
}
console.log(regularUser.fullName.userFullName);             //{ firstName: 'Tiya', lastName: 'Sengupta' }
console.log(regularUser.fullName.userFullName.firstName);       //Tiya
console.log(regularUser.fullName.userFullName.lastName);       //Sengupta


// combining objects
//**********************
const obj1 = {
    1: "a",2: "b"
}

const obj2 ={
    3:"c",4:"d"
}

const obj3 = {obj1,obj2}        //here objects are not combined
console.log(obj3);      //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//Method 1

const obj4 = Object.assign(obj1,obj2)           //assign() is a static method to combine two or more objects 
console.log(obj4);      //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//Method 2

const obj5 = {...obj1,...obj2}
console.log(obj5);      //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//Method 3 : objects are came from database

const user = [
    {
        id:1,
        email:"titas@gmail.com"
    },
    {
        id:2,
        email:"pulu@gmail.com"
    },
    {
        id:3,
        email:"supriya@gmail.com"
    },
]

console.log(user[1].email);     //pulu@gmail.com