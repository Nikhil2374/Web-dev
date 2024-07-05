//var ---- Old not used,redeclarable and updatable, public scope
var a = 10
a = 20
console.log(a)

//let ---- new update(ES6). cannot redeclare but updatable . block scope
{
    let x = 10;
    console.log(x);
}
{
    let x;
    x = 10;
    x = 11;
    console.log(x);
}

//const ---- not updatable, not redeclarable. block scope

{
const a = 0;
//a = 2; wrong
console.log(a);
}