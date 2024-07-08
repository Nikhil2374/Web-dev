// Loops are used to execute a piece of code again & again

//For loop-----------------------------------
//eg.1
{
    for (let i = 0; i <= 4; i++) {
        console.log("nk");
    }
}

//eg.2
{
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
        sum = sum + i;
    }
    console.log("sum of 1 to 5 is : ", sum);
}

//while Loop----------------------------------
{
    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }
}

//do-while Loop--------------------------------

{
let i = 0;
do {    
    console.log("yo -");
    i++;
} while (i<5);
}

//for-of Loop--------------------------------------

{
    let String = "Nikhil Kumar"
    for(let i of String){
        console.log(i);
    }
}

//for-in Loop---------------------------------------
// for Objects

let Student ={
    name : "Dhananjay",
    Cgpa : 3,
    Result : "Fail",
    Reason : "Chapri",
}

for(let key in Student){
    console.log(key,Student[key]);
}

