const PI = 3.14;
let radius = 3;

// let area = 0;

let area = radius * radius * PI;  

//  you can do this if it's the first time that it's being used, did that make sense?

console.log(area);

radius = 20;

area = radius * radius * PI;  

console.log(area);

const one = 1; 

const two = '2'; 

let result = one * two;
console.log(result);

result = one + two;
console.log(result);

result = one + Number(two);
console.log(result);

// scope
let global = "I'm global";

function exampleFunction() {
    let block = "I am block or local";
    console.log(block);
    console.log(global);
}

// console.log(block);
console.log(global);
exampleFunction();

// globle = "I am also global";



