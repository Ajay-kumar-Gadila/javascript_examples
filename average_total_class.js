/* question 
Calculating grades: If you're a teacher who wants to calculate the average
grade for a class, you can use a for loop to iterate through all the students' 
grades and then calculate the average.
*/

// key to solve

// average grade
// raw input given to the students
// grades A B C F
// O > 90 ,A+ >= 80 , A >= 70 , B+ >= 60 , B >=50 , C >= 40 ;
// average = (sum of obseravation) / (total n.o observations);
// sum = add all observations
// take i as total number of observation

// algorithm
// start
// input
// mainpulate sum += grades;
// take i
// average the total
// display
// stop

// creating an array
grades = [95, 45, 82, 94, 64, 88, 71, 55, 42, 20, 76];

// formula elements for average = sumOfallObservation / totalNumberofObservations ;
let sumOfallObservation = 0 ;
let average;
let totalNumberofObservations = 11;

// manipulation 
for (let i = 0; i < grades.length; i++) {
  sumOfallObservation += grades[i];
  average =  ((sumOfallObservation) / (totalNumberofObservations));
}

// display result
console.log("the total obeservation is " + average);
