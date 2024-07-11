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