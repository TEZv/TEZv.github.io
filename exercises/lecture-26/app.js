// THE TASK 1 SECTION
function calculate(operation, initialValue, numbers) {
  let result = initialValue;
  for (const number of numbers) {
    result = operation(result, number);
  }
  return result;
}
function sum(n1, n2) {
  return n1 + n2;
}
function multiply(n1, n2) {
  return n1 * n2;
}
console.log(calculate(sum, 0, [1, 2, 4])); // --> 7
console.log(calculate(multiply, 1, [1, 2, 4])); // --> 8

// THE TASK 1 SECTION

// THE TASK 2 SECTION
let student_names = ["Wick", "Malcolm", "Smith"];

//++
student_names.map((name, index, array) => {
  console.log(
    `name: ${name} || index: ${index} || array: [ ${array.join(", ")} ]`
  );
});
// THE TASK 2 SECTION

// THE TASK 3 SECTION
let students_information = [
  { name: "Wick", degree: 375 },
  { name: "Malcolm", degree: 405 },
  { name: "Smith", degree: 453 },
];
//++
maxDegree = 600;

students_information.map((student) => {
  const percentage = (student.degree / maxDegree) * 100;
  console.log({ ...student, percentage });
});
// THE TASK 3 SECTION

// THE TASK 4 SECTION
let arrayTaskFour = [
  1,
  2,
  3,
  [10, 11, 12],
  21,
  22,
  23,
  [31, 32, 33, 34],
  [41, 42],
];

//++
const reducer = arrayTaskFour.reduce((acc, value) => {
  return acc.concat(value);
}, []);
console.log(reducer);
// THE TASK 4 SECTION

// THE TASK 5 SECTION
Array.prototype.upperCase = function () {
  for (let i = 0; i < this.length; i++) {
    if (typeof this[i] === "string") {
      this[i] = this[i].toUpperCase();
    }
  }
};

function myFunc() {
  let arrToUpperCase = [
    "Algorithm",
    "Data Structure",
    "Operating System",
    "html",
  ];
  arrToUpperCase.upperCase();
  console.log(arrToUpperCase);
}

myFunc(); // [ 'ALGORITHM', 'DATA STRUCTURE', 'OPERATING SYSTEM', 'HTML' ]
// THE TASK 5 SECTION
