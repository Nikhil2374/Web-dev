//Strings in JS---------------------------------------
// String is a sequence of characters used to represent text

// Create String
let str = "Nikhil Kumar"
// String Length
console.log(str.length);
//String Indices
console.log(str[0]);

//Template Literals in JS------------------------------
//eg:1
let Specialstring = `This is asli String`;
console.log(Specialstring);
//eg:2
//${bill.name} = placeholder
//This Phenomenon is called String Interpolation
//eg:1
let bill = {
    name: "Pen",
    price: 10,
}
let Specialstrin2 = `The Price of ${bill.name} is ${bill.price} rupees`;
console.log(Specialstrin2);
//eg:2
{
    let Specialstrin3 = `The Sum of 2 and 3 is ${2 + 3}`;
    console.log(Specialstrin3);
}

//Escspe character  ------------------------------------------
console.log("Asli\nCoder");//next line
console.log("Asli\tCoder");//tab Space
//Note:-
{
    let str = "Asli\tCoder";
    console.log(str.length);//(\n,\t) all take 1 string space
}

//String Methods in JS-------------------------------------
//str.toUpperCase( )
{
    let str = "yoyoyo";
    console.log(str);
    console.log(str.toUpperCase(str));
}
//str.toLowerCase( )
{
    let str = "YOYOYO";
    console.log(str);
    console.log(str.toLowerCase(str));
}
//str.trim(  ) Removes white Spaces
{
    let str = "    YO   YO    YO         ";
    console.log(str);
    console.log(str.trim());
}

//Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.Start username with @,
// followed by their full name and ending with the fullname length.
// eg: user name = “shradhakhapra” , username should be “@shradhakhapra13”
{
    let str = "Nikhil Kumar";
    let username = "@"+str+str.length;
    console.log(username);
}