// Control Flow

// if statement

if(2==="2"){             // ===  checks the datatype and value also
    console.log("executed");
    }
    else console.log("not executed");        // in this case output will be : not executed
    
    
    if(2=="2"){             // ==  check only the value     
        console.log("executed");
    }
    else console.log("not executed");           //in this case output will be :  executed
    
    
    const score = 200
    if(score>100){
        const power = "fly"
        console.log(`user power ${power}`);
    }
    //console.log(`user power ${power}`);       // here give error because it is beyond the scope of if
    
    //shorthand notation
    //--------------------
    // const bal = 1000
    // if(bal < 500)console.log("less than 500");
    // else if(bal < 750)console.log("less than 750");
    // else if(bal < 900)console.log("less than 900");
    // else console.log("less than 1200");
    
    const userLoggedIn = true
    const debitCrad = true
    const loggedInFromEmail = 1
    const loggedInFromGoogle = 1
    if(userLoggedIn && debitCrad){
        console.log("allow to buy course");
    }
    
    if(loggedInFromEmail || loggedInFromGoogle){
        console.log("User logged In");
    }else {
        console.log("not logged in");
    }