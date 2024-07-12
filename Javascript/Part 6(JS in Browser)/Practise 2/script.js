/*Qs. Create a new button element. Give it a text “click me”, background color of red & text colorof white.
Insert the button as the first element inside the body tag. */

let btn = document.createElement("Button");
btn.innerText = "click me";
btn.style.backgroundColor = "red"
btn.style.color = "white";
document.querySelector("body").prepend(btn);

/*Qs. Create a <p> tag in html, give it a class & some styling.
Now create a new class in CSS and try to append this class to the <p> element.
Did you notice, how you overwrite the class name when you add a new one?
Solve this problem using classList.*/

let para = document.querySelector("p");
console.log(para);

//This method completely changes the oldclass to newclass insted of appending newclass 
//get Attribute
//para.getAttribute("class")
//Set attribute
//para.setAttribute("class","newclass");

// classlist
para.classList.add("newclass");
console.log(para.classList);//two class