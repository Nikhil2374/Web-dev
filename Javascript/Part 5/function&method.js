//Functions in JS-----------------------------------------------------------------
//Block of code that performs a specific task, can be invoked whenever needed
//eg:1
{
    function eg1() {
        console.log("YO");
    }
    eg1();
}
//eg:2
{
    function eg2(eg) {
        console.log(eg);
    }
    eg2("Hlo");
}
//Function to sum 2 no.
{
    function sum(a, b)//Parameters, Local Variables(Scope : block)
    {
        console.log(a + b);
    }
    let a = 2;
    let b = 2;
    sum(a, b)//Arguments

}

//Arrow Functions -------------------------------------------------------------------------
//Compact way of writing a function
//Arrow function for adding two numbers
{
    const arrowfunc = (a, b) => {
        console.log(a + b);
    }
    arrowfunc(2, 3);
}
//Arrow function for multiplying 2 numbers
{
    const arrowfunc = (a, b) => {
        return a*b;
    }
    console.log(arrowfunc(2, 3));
}

//Qs. Create a function using the “function” keyword that takes a String as an argument &
//returns the number of vowels in the string.
//Normal Function
function countvowel(str) {
    let count = 0;
    for (let elm of str){
        if(elm === 'a' || elm === 'e' ||elm === 'i' ||elm === 'o' ||elm === 'u' ){
            count++;
        }
    }
    console.log(count)
}
countvowel("a");
//Arrow Function
const countvow = (str) => {
    let count = 0;
    for (let elm of str){
        if(elm === 'a' || elm === 'e' ||elm === 'i' ||elm === 'o' ||elm === 'u' ){
            count++;
        }
    }
    console.log(count)
}
countvow("Apple");