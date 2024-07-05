//Primitive Types : Number, String, Boolean, Undefined, Null, BigInt, Symbol

//Number---
let price;
price = 100.5
console.log(price);
const type = typeof price;
console.log(type);

//String---
let myname = 'Nikhil Kumar';
const b = typeof myname;
console.log(myname, b);

// Boolean---
let isHero = true;
const c = typeof isHero;
console.log(isHero, c)

//Undefined---
let x;//By default undefined
console.log(x);

//Null---(absence of an object)
let empty = null;
const d = typeof empty;
console.log(empty, d);

//BigInt---
let bignumber = BigInt("1234567");
const e = typeof bignumber;
console.log(bignumber, e);

//Symbol---
let logo = Symbol("NK");
const f = typeof logo;
console.log(logo, f);

//------------------------------------------------------------------------------------

//Non-Primitive types: Object (Key : Value)pair
//const objects are able to update their key. eg:-

const student = {
    name: "Nikhil Kumar",
    age: 22, //key : age , value : 22
    cgpa: 7.3,
    pass: true,
}
const g = typeof student;
console.log(student,g);
//to access an obgect :- object.key || object['key']
console.log(student['name']);
console.log(student.age);
//to change object element from outside the block.
student.cgpa = student.cgpa + 1;
console.log(student.cgpa)

