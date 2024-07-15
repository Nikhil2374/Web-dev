//Inline Event Handling in HTML

//Event Handling in JS-------------------------------------------------------------------------------------------

//eg:1

{
let btn1 = document.querySelector("#btn1");
btn1.onclick = () =>{
    console.log('Handler 1!');
}

// NOTE : ----Last  Handler overrides previous handlers , Therefore define all work in a single event handler
btn1.onclick = () =>{
    console.log('Handler 2!');
}
}

//eg:2
{
let box = document.querySelector("#box");
box.onmouseover = () => {
    console.log("Mouse over box2 !");
}
}
//eg:3
// NOTE :----If event handled in HTML and JS then priority goes to JS
let btn = document.querySelector("#btn");
btn.onclick = () => {
    console.log("Print through js!");
}

//Event Object ------------------------------------------------------------------------------------------------
//eg:1
let btn1 = document.querySelector("#btn1");
btn1.onclick = (e) =>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
}

//eg:2
let box = document.querySelector("#box");
box.onmouseover = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
}

//Event Listeners--------------------------------------------------------------------------------------------------
