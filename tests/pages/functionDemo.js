// Without passing arguments
function addDemo1() 
{
let a = 10;
let b = 20;
let c = a+b;
console.log("Addition of A and B", c);

}addDemo1();

// With passing arguments
function addDemo2(a, b) 
{
let c=a+b;
console.log("Addition of A and B is", c);

}addDemo2(25,75);


function addDemo3() // Function retrurning values without arguments
{
    let a = 68;
    let b = 97;
    return add= a+b;
}addDemo3()
 
console.log("Addition is", add);

function addDemo4(a,b) // Function retrurning values with arguments
{
    let add= a+b;
    return add;
}

let addition = addDemo4(121, 342)
 
console.log("Addition of 2 mumbers is", addition);