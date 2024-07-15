//Inline Event Handling in HTML

//Event Handling in JS-------------------------------------------------------------------------------------------

//eg:1

{
    let btn1 = document.querySelector("#btn1");
    btn1.onclick = () => {
        console.log('Handler 1!');
    }

    // NOTE : ----Last  Handler overrides previous handlers , Therefore define all work in a single event handler
    btn1.onclick = () => {
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
btn1.onclick = (e) => {
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

//node.addEventListener( event, callback )

//eg:1
{
    let box2 = document.querySelector("#box2");
    box2.addEventListener("mouseover", () => {
        console.log("Event Listener!");
    });
}

//eg:2
//Through Event Listener we can do multiple work on same event , here (inline event + event 1 + event2 ) all worked
{
    let btn = document.querySelector("#btn");
    btn.addEventListener("click", () => {
        console.log("Event listener Clicked 2!")
    })

    btn.addEventListener("click", (e) => {
        console.log("Event listener Clicked 3!");
        console.log(e);
        console.log(e.type);
        console.log(e.target);
        console.log(e.clientX, e.clientY);
    })
}

//node.removeEventListener( event, callback )

{
    let btn3 = document.querySelector("#btn3");
    btn3.addEventListener("click", () => {
        console.log("Handler 1!")
    })

    btn3.addEventListener("click", () => {
        console.log("Handler 2!");

    })

    btn3.addEventListener("click", () => {
        console.log("Handler 3!");

    })
//==============================================================================    
{
    btn3.addEventListener("click", () => {
        console.log("Handler 4!");

    })
    // didnt work because, *Note : the callback reference should be same to remove
    btn3.removeEventListener("click", () => {
        console.log("Handler 4!");

    })
}
//==============================================================================
let handler5 = () => {
    console.log("Handler 5!");

}
    btn3.addEventListener("click", handler5);
    btn3.removeEventListener("click", handler5);
}


//Practise---------------------------------------------------------------------------------------------

//Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-modewhen clicked again.

{
    let mode = document.querySelector("#toggle");
    let currmode = "light";
    mode.addEventListener("click", ()=>{
      if( currmode === "light"){
      currmode = "dark";
      document.querySelector("body").style.backgroundColor = "black";}
      else{
        currmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
      }

      console.log(currmode);
    })
    

}