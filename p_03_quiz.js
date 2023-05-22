// const ps = require ("prompt-sync");
// const prompt  = ps({sigint:true});
// console.log("This java script Quiz");
// // From this onwards  the question may begins
// console.log("Inside which HTML element do we put the JavaScript?");
// console.log("A. Scripting");
// console.log("B. Styles");
// console.log("C. Javascript");
// console.log("D. Script");
// // Choose the answer
// var answer = prompt("Select  your answer ");
// if(answer == "D"){
//     console.log("Correct Answer");
// }
// else{
//     console.log("Enter correct answer");
// }

const ps = require("prompt-sync")({ sigint: true });

function askQuestion(question, choices, correctAnswer) {
  console.log(question);
  for (let i = 0; i < choices.length; i++) {
    console.log(`${i + 1}. ${choices[i]}`);
  }
  const answer = ps("Select your answer: ");
  if (answer.toUpperCase() === correctAnswer.toUpperCase()) {
    console.log("Correct answer!");
    return true;
  } else {
    console.log(`Wrong answer. The correct answer is ${correctAnswer}.`);
    return false;
  }
}

console.log("This JavaScript Quiz");
const questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["Scripting", "Styles", "Javascript", "Script"],
    correctAnswer: "4",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["Scripting", "Styles", "Javascript", "Script"],
    correctAnswer: "2",
  },
  // Add more questions here
];

let score = 0;
for (let i = 0; i < questions.length; i++) {  
  const question = questions[i];
  const isCorrect = askQuestion(question.question, question.choices, question.correctAnswer);
  if (isCorrect) {
    score++;
  }
}

console.log(`Your score is ${score} out of ${questions.length}.`);