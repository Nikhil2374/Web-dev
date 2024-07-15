/*Let‘s Practice
Qs. Create a H2 heading element with text - “Hello JavaScript”.
Append “from Apna Collegestudents” to this text using JS. */

let h2 = document.querySelector("h2")
console.dir(h2.innerText);
h2.innerText = h2.innerText + " from Apna College students";

/* Qs. Create 3 divs with common class name - “box”. Access them & add some unique text to each of them. */

let div = document.querySelectorAll(".box");
console.log(div);
console.log(div[0]);
console.log(div[1]);
console.log(div[2]);
// Noob Friendly
/*div[0].innerText = div[0].innerText + " ,which is cheap one!"
div[1].innerText = div[1].innerText + " ,which is costly one!"
div[2].innerText = div[2].innerText + " ,which is free one!"
// Pro with Loop*/
idx = 1;
for(let elm of div){
    elm.innerText = `new inner text ${idx}`;
    idx++;
}