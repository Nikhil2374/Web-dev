/*Window Object: - -------------------------------------------------------------------------------------------------
The window object represents an open window in a browser.
It is browser’s object (not JavaScript’s)& is automatically created by browser. */
//eg:
window.console.log("console.log(), is a part of window object like many more objects.");
console.log(window);


//Document(name) Object(type = object) Model(representation of html(tree like structure)) (DOM)---------------------
//Access HTML in JS through ( window.document ) object(model/representation of html)
console.log(window.document);
//We ise console.dir() to print our object
console.dir(window.document);
//eg: Change in html dynamically via js
document.body.style.background = " brown";
//eg:2
document.body.childNodes[1].innerText = "eg";

//DOM Manipulation---------------------------------------------------------------------------------------------------
//Selecting with id===================================================
let element = document.getElementById('h1');
console.dir(element);
//Selecting with class (Gives HTML Collection simmilarily to Array with lenngth etc property)
let element2 = document.getElementsByClassName('h2');
console.dir(element2);
//Selecting with tag
let element3 = document.getElementsByTagName("p");
console.dir(element3);

//Query Selector (BEST)===============================================
//Single Element
let singleElement = document.querySelector("p");
console.dir(singleElement);
//All Elemet
let allElement = document.querySelectorAll("p");
console.dir(allElement);
//For .class
let classElement = document.querySelector(".h2");
console.dir(classElement);
//For #id
let idElement = document.querySelector("#h1");
console.dir(idElement);

//DOM Properties-------------------------------------------------------------------------------------------
//(Get || Set/Change/Update )

//tagName : returns tag for element nodes
let divelement = document.querySelector("#div");
console.log(divelement);
console.log(divelement.tagName);

//innerText : returns the text content of the element and all its children
console.log(divelement.innerText);

//innerHTML : returns the plain text or HTML contents in the element
console.log(divelement.innerHTML);
/*  divelement.innerText = "HLO"; Changes made to div   */

//textContent : returns textual content even for hidden elements
console.log(divelement.textContent);

//eg: Changing h1 
//idElement.innerText = "Yellow";

//Navigation:-     Parent Child Property of DOM for Manipulation
//Children Property 

console.log(divelement.children);
//First Child
console.log(divelement.firstChild);
//Last Child
console.log(divelement.lastChild);
