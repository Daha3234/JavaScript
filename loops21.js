// for 
 
for (let i = 0; index <= 10; i++){
    const element = i;
    if (element == 5){
        console.log("5 is best number");
    }
    console.log(element);
}

//console.log(element);   ye nahi hona chaiye

//for (let i = 0; i <= 10; i++) {
    //console.log(`Outer loop value:${}`);
  //  for (let j = 1; j <= 10; j++){
//console.log(`Inner loop valus ${j} and inner loop ${i}`);
//console.log(i + '*' + j + ' =' = i*j);
  //  }
    
//}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
    
}
