let firstNumber = 10;
let secondNumber = 15;

let total;

total = firstNumber + secondNumber;

console.log(total);

let firstName = "Moesha";
let lastName = "Keswani";
let age = 23;

let fullName = firstName + " " + lastName;
let exercise = "My name is " + fullName + " and I am " + age + " years old";

console.log(fullName);
console.log(age);
console.log(exercise);

let dogYear = 7;
let BusterAge = 4;
let BusterDogAge = BusterAge * dogYear;

console.log(BusterDogAge);

let grades = [3, 10, 40, 90];
//adding a single value to an array
grades.push(30);
console.log(grades);
//referring to individual values inside an array
let firstGrade = grades[0];
console.log(firstGrade);
let thirdGrade = grades[3];
console.log(thirdGrade);

//changing indivual values inside an array
grades[0] = 100;
console.log(grades);

//remove first element from array
grades.shift();
console.log(grades);

//remove last element from array
grades.pop();
console.log(grades);
