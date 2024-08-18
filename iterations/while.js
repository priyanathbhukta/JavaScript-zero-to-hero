// while loop statement
//---------------------

let x = 5
while (x<20) {
    console.log(`value of x ${x}`);
    x = x+2
}

let myArray = ["flash","batman","superman"]
let arr = 0
while (arr<myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr +=1
}

//do-while loop ststement : execute at least once always
//-----------------------

let score = 11
do{
    console.log(`score is ${score}`);
    score++
}while(score<=10)