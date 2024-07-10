//Arrays in JS (Collections of items)-------------------------------

//eg:1
let marks = [21, 22, 34, 55, 65, 54];
console.log(marks);
console.log(marks.length);
console.log(typeof (marks));
//eg:2
let heroes = ['ironman', 'hulk', 'thor', 'batman'];
console.log(heroes);
console.log(heroes.length);
console.log(typeof (heroes));
//eg:3
let info = ["rahul", 86, "Delhi"];
console.log(info);
console.log(info.length);
console.log(typeof (info));

//Array Indices------------------------------------------------------
//arr[0], arr[1], arr[2] 
{
    let marks = [21, 22, 34, 55, 65, 54];
    console.log(marks[0]);
}

//Looping over an Array------------------------------------------------
//Print all elements of an array? Using for loop
{
    let marks = [21, 22, 34, 55, 65, 54];
    console.log("marks elements are : ");
    for (let i = 0; i < marks.length; i++) {
        console.log(marks[i]);
    }
}
//Using for of loop
{
    let marks = [21, 22, 34, 55, 65, 54];
    console.log("marks elements are : ");
    for (let element of marks) {
        console.log(element);
    }
}
//Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
//Find the average marks of the entire class.
{
    let marks = [21, 22, 34, 55, 65, 54];
    console.log("marks Students are : ");
    for (let element of marks) {
        console.log(element);
    }
    let sum = 0;
    for (let el of marks) {
        sum = sum + el;
    }
    console.log(sum);
    let avg = sum / marks.length;
    let result = `The average marks of Students is : ${avg}`
    console.log(result);
}

//Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
//All items have an offer of 10% OFF on them. Change the array to store final price afterapplying offer.

{
    let items = [250, 645, 300, 900, 50];
    console.log('Discounted Price are : ');
    for (let i = 0; i < items.length; i++) {
        let elm = items[i] / 10;
        items[i] = items[i] - elm;
    }
    console.log(items);
}

//Array Methods :-----------------------------------------------------------
//Push( ) : add to end
{
    let fruit = ["Banana", "Apple"];
    console.log(fruit);
    fruit.push("Grapes");
    console.log(fruit);
}
//unshift( ) : add to start

{
    let fruit = ["Banana", "Apple"];
    console.log(fruit);
    fruit.unshift("Grapes");
    console.log(fruit);
}

//Pop( ) : delete from end & return
{
    let fruit = ["Banana", "Apple"];
    console.log(fruit);
    fruit.push("Grapes");
    console.log(fruit);
    fruit.pop("Grapes");
    console.log(fruit);
}
//shift( ) : delete from start & return

{
    let fruit = ["Banana", "Apple"];
    console.log(fruit);
    fruit.unshift("Grapes");
    console.log(fruit);
    fruit.shift("Grapes");
    console.log(fruit);
}

//toString( ) : converts array to string
{
    let fruit = ["Banana", "Apple"];
    console.log(fruit, "Conversion Follows: ");
    console.log(fruit.toString());
}
//Concat( ) : joins multiple arrays & returns result
{
    let fruit = ["Banana", "Apple"];
    let vegitables = ["carrot", "Potato"];
    let fastfood = ["Chips", "Kurkure"];
    let edible = fruit.concat(vegitables, fastfood);
    console.log(edible);
}
//slice( ) : returns a piece of the array
{
    let num = [1, 2, 3, 4, 5, 6];
    console.log(num.slice(1,3));
}
//splice( ) : change original array (add, remove, replace)
{
    let arr = [1, 2, 3, 4, 5, 6, 7];
    
    console.log(arr.splice(2,2,101,108));
    console.log(arr);
}