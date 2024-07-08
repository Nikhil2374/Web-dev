//Conditional Statement 
//If Statement----------------------
//eg:1-
{
    let age = 17
    if(age >= 18){
        console.log("Can Vote!");
    }
    if(age < 18){
        console.log("can not vote")
    }
    
}
//eg:-
{
    let mode = "Dark";
    let color;
    if(mode === "Dark"){
        console.log("Black");
    }
    if(mode !== "Dark"){
        console.log("White");
    }
}

//if-else Statement---------------------
{
    let mode = "Dark";
    let color;
    if(mode === "Dark"){
        console.log("Blacky");
    }
    else{
        console.log("Whitey");
    }
}
// (Q) Find wether given number is odd or even?
{
    let number = 0;
    if(number == 0){
        console.log("Zero");
    }
    if(number % 2 == 0 && number !== 0){
        console.log("Even");
    }
    if(number % 2 !== 0 && number !== 0){
        console.log("Odd");
    }
}
//else-if Statement---------------------
{
    let age = 17
    if(age < 18){
        console.log("junior");
    }
    else if(age > 60){
        console.log("Senior")
    }
    else{
        console.log("middle")
    }
    
}