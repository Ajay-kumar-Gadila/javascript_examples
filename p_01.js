// printing numbers from 1 to 10 
// for(var i = 10 ; i > 0 ; i--){
//     console.log(i);
// }

// arrays using for loop
// const arr = [1,45,78,44,49];
// for(let i = 0 ; i<arr.length ; i++){
//     // console.log(i); prints the indexes
//     console.log(arr[i]); //elements in an array
// }

/*  for loop with conditional statement 
for(let i = 0;i < 10; i++){

    if(i == 5){  
        break;
    }
    else{
        console.log(i);
    }
}

step 1: i = 1 to 4 
        prints 
        fifth iteration i=5 breaks the loop
*/

/* lower bound and  upper  bound 

const lower = 0;
const upper = 60;
for(let i = lower;i < upper ; i++){
    if(i == 5)
        console.log("hi i am letter five ",i);

}

*/
// const arr1 = [1,3,5,7,9];

// for(let i = 0; i < arr1.length;i++){
//     const  arr = [2,4,6,8];
//     if(arr[i]%2 != 0){
//         console.log("It is a odd number",arr1[i]);
//     }
//     if(arr[i]%2 == 0)
//         conasole.log("It  is a even number");
    
// }

const numbers = [1, 2, 3, 4, 5];

// Higher-order function that takes an array and a callback function
const multiply = (array, callback) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
};

// Arrow function that takes a number and returns its square
const square = number => number ** 2;

// Arrow function that takes a number and returns its cube
const cube = number => number ** 3;

// Call the higher-order function with the numbers array and the square and cube functions
const squaredNumbers = multiply(numbers, square);
const cubedNumbers = multiply(numbers, cube);

// Output the results
console.log(`Squared numbers: ${squaredNumbers}`); // Output: "Squared numbers: 1,4,9,16,25"
console.log(`Cubed numbers: ${cubedNumbers}`); // Output: "Cubed numbers: 1,8,27,64,125"


