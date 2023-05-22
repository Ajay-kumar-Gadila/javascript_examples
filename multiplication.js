// start
// number
// intialize i
// multiplication
// iterate the process and inncrement 
// display 

const prompt = require("prompt-sync")({ sigint: true });
let number = prompt("enter any number ");
tm = prompt("how many time to iterate ");
for(let i = 1;i < tm ; i++){
    let sum = i * number;
    console.log(number + " * " + i + " = " + sum);
}


