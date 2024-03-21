//sum of numbers from array
const sumNumbers = (numbersArray) => {
  let sum = 0;
  numbersArray.forEach((num) => {
    sum += num;
  });
  return sum;
};

//avg of numbers from array
let sum = sumNumbers([1, 2, 3, 4, 5]);
console.log("Sum of numbers: " + sum);

const avgOfNumbers = (numbersArray) => {
  let avg = 0;
  numbersArray.forEach((num) => {
    avg += num;
  });
  return avg / numbersArray.length;
};

let avg = avgOfNumbers([1, 2, 3, 4, 5]);
console.log("Avarage of numebrs: " + avg);

//give the longest string from given array
const longestStr = (stringsArray) => {
  let longestString = "";
  for (let i = 1; i < stringsArray.length; i++) {
    if (stringsArray[i - 1].length < stringsArray[i].length) {
      longestString = stringsArray[i];
    }
  }
  return longestString;
};

let longestString = longestStr(["hi", "hello", "in", "the", "morning"]);
console.log("The longest string is: " + longestString);

// return array of strings longer than given number
const strLongerThanNumber = (arrayOfStrings, number) => {
  let array = [];
  arrayOfStrings.forEach((str) => {
    if (str.length > number) {
      array.push(str);
    }
  });
  return array;
};

let strLongerThanNum = strLongerThanNumber(
  ["hi", "hello", "in", "the", "morning"],
  3
);
console.log(strLongerThanNum);

//recursion print every number between 1 and n using recursion
function printNumbers(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  printNumbers(n - 1);
}
printNumbers(4);

///PART 2
const array = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

//sort arr by age
let sortedArr = array.sort((prev, next) => prev.age - next.age);
console.log("Sorted array by age: ");
console.log(sortedArr);

//remove entries with age greater than 50
let newArr = array.filter((obj) => {
  return obj.age < 50;
});
console.log(`\n`);
console.log("Array with entries that age is less than 50: ");
console.log(newArr);

//map array change 'occupation' to job
let changedArr = newArr.map((obj) => ({
  id: obj.id,
  name: obj.name,
  job: obj.occupation,
  age: String(Number(obj.age) + 1),
}));
console.log(`\n`);
console.log("Array with changed 'occupation' to 'job' and age + 1");
console.log(changedArr);

//reduce to calculate the sum of ages
let sumOfAge = changedArr.reduce(sumAge, 0);
function sumAge(sum, obj) {
  return sum + Number(obj.age);
}
console.log("Sum of all age: " + sumOfAge);
//calc avg
console.log(`Avarage age   ${Math.round(sumOfAge / changedArr.length)}`);
