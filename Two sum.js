
let myArray = [];

// Use a loop to prompt the user for input and insert each element into the array
while (true) {
  let input = prompt("Enter an element to add to the array (or type 'stop' to quit):");
//   if (input === "stop") {
//     break;
//   }
  myArray.push(input);
}

// Display the final contents of the array
console.log("Final array:", myArray);