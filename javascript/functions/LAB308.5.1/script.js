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
