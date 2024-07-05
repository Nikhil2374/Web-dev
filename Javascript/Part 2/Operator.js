//Arithmetic Operators : +, -, *, /, % , ** 
let a = 8;
let b = 2;
console.log("a + b : ", a + b)
console.log("a - b : ", a - b)
console.log("a * b : ", a * b)
console.log("a / b : ", a / b)
console.log("a % b : ", a % b) // Modulus gives remainder
console.log("a ^ b : ", a ** b) // Exponentiation  i.e; a^b
//--------------------------------------------------------------------------------------------------------------
//Unary Operator : a++  (a=a+1) , a--  (a=a-1)
{
    let a = 5;
    console.log("a++", a++);//post increment print : 5 value : 6
    console.log("++a", ++a);//pre increment  print : 7 value : 7
    console.log("a--", a--);//post decrement print : 7 value : 6
    console.log("--a", --a);//pre decrement  print : 5 value : 5
}
//--------------------------------------------------------------------------------------------------------------
//Assignment Operators :  =, +=, -=, *=, /=, %=, **= 
{
    let a = 5;
    console.log("a = : ", a);
    console.log("a += 4 : ", a += 4);
    console.log("a -= 4 : ", a -= 4);
    console.log("a *= 4 : ", a *= 4);
    console.log("a /= 4 : ", a *= 1);
    console.log("a %= 4 : ", a %= 4);
    console.log("a **= 4 : ", a **= 4);
}
//------------------------------------------------------------------------------------------------------------
// Comparison Operators : ==, !=, ===, !==, >, >=, <, <=

{
    let a = 5;
    let b = 3;
    let c = '3'
    console.log("a == b", a == b);
    console.log("a != b", a != b);
    console.log("a === c", a === c);//check value as well as type
    console.log("a !== c", a !== c);//''
    console.log("a > b", a > b);
    console.log("a >= b", a >= b);
    console.log("a < b", a < b);
    console.log("a <= b", a <= b);
}
//--------------------------------------------------------------------------------------------------------------
//Logical Operator : Logical AND : &&, Logical OR : ||, Logical NOT :  !

//Logical AND : && (both condition should be true)
{
    let a = 5;
    let b = 6;
    let condition1 = a < b;//true
    let condition2 = a === 6;//false
    console.log("condition1 && consition2 : ", condition1 && condition2); //false
}

//Logical OR : || (Any of the two condition true)
{
    let a = 5;
    let b = 6;
    let condition1 = a < b;//true
    let condition2 = a === 6;//false
    console.log("condition1 || consition2 : ", condition1 || condition2); //true
}

//Logical NOT :  ! (changes true to false) eg:-
{
    let a = 5;
    let b = 6;
    console.log("a : ",a,"b : ", b);
    console.log("!(a<b)", !(a<b)); //false
}