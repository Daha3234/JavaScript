const userEmail = "Areeba.ai"

if(userEmail){
    console.log("Got user email");
    } else{
        console.log("Dont have email");
    }
    const userEmail = []

if(userEmail){
    console.log("Got user email");
    } else{
        console.log("Dont have email");
    }

    //falsy values 
    //false, 0,-0, BigInt 0n, "" , null, undefined,NaN
    // truthy values
    // "0" , 'flase' , " ", [], {},function(){}

    if (userEmail.length === 0){
        console.log("Array is empty");
    }
    const (object.key (emtyObj).length === 0 ) = {
     console.log("object is emty");
    }

    // Nullish coalescing operator (??): null undefined

    let val2;
    //val2 = 5 ?? 10
    //val2 = null ?? 10
    //val2 = undefined ?? 20 
    //val2 = null ?? 10 ?? 30

    //console.log(val2);
  
    // Terniary Operator

    // condition ? true : flase

    const iceTeaPrice = 100
    iceTeaPrice <= 80 ? console.log("less than 80") : console.log("mare tha 80")
