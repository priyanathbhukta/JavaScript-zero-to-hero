// Immediately Invoked Function Expressions (IIFE)
// Normal function
function chai(){
    console.log("DB Connected");
}
chai()

//iife approach
(function code(){       //name iife
    console.log("DB Connected again");
})();       // wrap the function within (function function_name(){}) and to call the function just use () afterthe function. The seceond () is here to execute the function 

//arrow function approach
((name)=>{      // unnamed iffe  // here name is passed as parameter
    console.log(`DB connected arrow functi on ${name}`);
    
})('titas');
//note
//to execute two iffe in a file then have to consider a ";" after first iife then only the sencond one will execute