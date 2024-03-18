for (let i = 0; i < 10; i++) {
  //console.log(i);
}

//exercise 1

//for loop
//count down from  10 to 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//output odd and even numbers from 1 to 10
const odd = [];
const even = [];
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    even.push(i);
  } else {
    odd.push(i);
  }
}
console.log(`Odd numbers: ${odd}`);
console.log(`Even numbers: ${even}`);

//output mulitiple of 3, start at 6 end at 60;
let numbers = [];
for (let i = 6; i <= 60; i += 3) {
  numbers.push(i);
}
console.log("Numbers multiplies by 3: " + numbers);

/// output hashs
let sum = "";
for (let i = 1; i <= 7; i++) {
  sum += "#";
  console.log(sum);
}

//iterates from 1 to 20
for (let i = 2; i <= 2; i++) {
  if (i % i == 0) {
    console.log("Prime: " + i);
  }
}

// strings for loop
const str = "Hello World";
for (let i = 0; i < str.length; i++) {
  if (str[i] === "l") {
    continue;
  }
  console.log(str[i]);
}

//properties
for (const i in str) {
  //console.log(str[i]);
}

//values
for (const i of str) {
  // console.log(i);
}
