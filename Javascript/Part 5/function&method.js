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
        return a * b;
    }
    console.log(arrowfunc(2, 3));
}

//Qs. Create a function using the “function” keyword that takes a String as an argument &
//returns the number of vowels in the string.
//Normal Function
function countvowel(str) {
    let count = 0;
    for (let elm of str) {
        if (elm === 'a' || elm === 'e' || elm === 'i' || elm === 'o' || elm === 'u') {
            count++;
        }
    }
    console.log(count)
}
countvowel("a");
//Arrow Function
const countvow = (str) => {
    let count = 0;
    for (let elm of str) {
        if (elm === 'a' || elm === 'e' || elm === 'i' || elm === 'o' || elm === 'u') {
            count++;
        }
    }
    console.log(count)
}
countvow("Apple");

// Funtion Associated with a datastructure or object is called Method (HIGHER ORDER FUNCTION/METHOD)
// eg: forEach Loop in Arrays (Only for Array)
//eg:1

{
    let arr = [1, 2, 3, 4, 5];
    arr.forEach(function printvalue(val) {
        console.log(val)
    })
}
//eg:2
{
    let arr = ["Mumbai", "Pune", "Patna"];
    arr.forEach((val, idx, arr)/*3 parameters */ => {
        console.log(val.toUpperCase(), idx, arr);
    })
}

//Qs. For a given array of numbers, print the square of each value using the forEach loop.
{
    let arr = [1, 2, 3, 4, 5];
    arr.forEach(function printvalue(val) {
        let sqr = val * val;
        console.log(sqr);
    })
}

{
    let arr = [1, 2, 3];
    arr.forEach((val) => {
        let rslt = val * val;
        console.log(rslt);
    });

    // Correct way to use forEach with a callback function
    arr.forEach((val) => {
        console.log(val); // Or do something else with 'val'
    });
}

//Important Methods ----------------------------------------------------------------------------------------
/*  Map : Creates a new array with the results of some operation.
          The value its callback returns are used to form new array  */
//eg:1
{
    let nums = [15, 20, 33];
    let newarr = nums.map((val) => {
        return val * val;
    });
    console.log(newarr);
}

//Filter : Creates a new array of elements that give true for a condition/filter
//Eg: all even elements

{
    let nums = [15, 20, 33];
    let newarr = nums.filter((val) => {
        return val % 2 === 0;
    })
    console.log(newarr);
}
//Reduce : Performs some operations & reduces the array to a single value. It returnsthat single value.
//eg:1
{
    const arr = [1, 2, 3, 4, 5, 6];
    let sum = arr.reduce((res, curr) => {
        return res + curr;
    })
    console.log(sum);
}
//eg:2
{
    const arr = [1, 2, 3, 9, 5, 6];
    let output = arr.reduce((res, curr) => {
        return res > curr ? res : curr;
    })
    console.log(output);  
}