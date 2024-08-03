// Destructuring of objects

const course = {
    courseName : "JavaScript",
    coursePrice: "999",
    courseInstructor :"Hitesh"
}

const {courseInstructor: instructor} = course
//console.log(courseInstructor);      //Hitesh
console.log(instructor);        //HITESH


// json declaration

/*{
    "name":"titas",
    "coursename": "js in hindi",
    "price":"free"
}*/         //json always looked like object but it  has no name and most impotantly all key and value pairs are stored as string format 


// some times json shown in array format [] 
/*
[
    {},
    {},
    {},
]
*/

// for better understanding we use {https://randomuser.me/} and to check it we use {https://jsonformatter.org/}