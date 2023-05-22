// const prompt = require("prompt-sync")({ sigint: true });
// let myArray = [5,6,8,9];

// // while (true) {
// //   let input = prompt(" ");
// //   if(input == "stop"){
// //     break;
// //   }
// //   myArray.push(input);
// // }


// // for(let i = 0;i < myArray.length; i++){
// //     console.log("arrays index "+i,myArray[i]);
// // }

// function  addSum(num1 , num2){
//     return num1 + num2;
// }
// let sum  = addSum(myArray[0],myArray[1]);
// console.log(sum);
// console.log()

// function twoSum(nums, target) {
//     let diff = {};
    
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] in diff) {
//         return [diff[nums[i]], i];
//       } else {
//         diff[target - nums[i]] = i;
//       }
//     }
    
//     return [];
//   }
  
//   console.log(twoSum([2,7,11,15], 9)); // output: [0, 1]

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
console.log(twoSum([2,7,11,15], 9));


  