/*{
    // this is a scope
}
*/
const b = 40000
var c = 30000
let a = 15000
if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("inner: ",a);       //10
    console.log("inner: ",b);       //20
}
console.log(a)      //15000
console.log(b)         //40000
console.log(c)      //30 here problem comes into the picture that c is declared inside the if block scope but it is accessible from outside of that scope.  Even we declared var c as globally then also it take the value which is inside the if block scope.
console.log("***********************************************");
//Case1 
//Nested Scope
function one (){
    const userName = "titas"
    function two(){
        const website = "youtube";
        console.log(userName);
    }
    //console.log(website);     // website not visible cuz it is declared inside function two() scope
    two(); 
}
one();


//Case2
console.log("///////////////////////////////////////////////////////");

if(true){
    const username= "titas"
    if(username==="titas"){
        const website = " youtube"
        console.log(username+website);
    }
    //console.log(website); // website is not visible cuz it is declared inside nested if block
}

console.log(addone(5));     //6 here it is accessed by system before initialization
function addone(num){
    return num+1
}

//console.log(addtwo(5));     //ReferenceError: Cannot access 'addtwo' before initialization concep - hosting
const addtwo = function(num){
    return num+2
}


