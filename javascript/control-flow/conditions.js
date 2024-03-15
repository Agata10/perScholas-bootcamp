console.log("Test");

//difference var let
//so with var as global even we do not type it
//the below will be declared
//var x ;

{
  var x = 5;
}

//will return 5 with var, if we change var to let/const it wont, let is blocked scoped
console.log(x);

//////////////////////////////////////
//let example
{
  let z = x + 5;

  {
    console.log(z); //will work because is in the block
  }
}

//if condition
if (x == 5) {
  console.log("WE got five!");
} else if (x == 3) {
  console.log("We got 3");
} else {
  console.log("we didnt get 5 or 3");
}

//falsy
let money; // -> undefined

if (money) {
  console.log("got money value");
} else {
  console.log(`money is ${money}`);
}

///////////////////////////////////////////
//exercise 1
let num = 5;

if (num > 0) {
  console.log("Num is positive1");
} else {
  console.log("Num is negative");
}

//check is user is more than 18
// let age = prompt("Type your age:");
// if (age >= 18) {
//   alert("Welcome");
// } else {
//   alert("Come back when you grew up");
// }

//exercise 2
let num2 = 10;

if (num2 > 0 && num2 > 100) {
  console.log(`Number is positsive and greater than 100.: ${num2}`);
} else if (num2 > 0 && num2 < 100) {
  console.log(`Number is positive but less than 100: ${num2}`);
} else {
  console.log("Number is negative.");
}

const score = 60;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 55) {
  console.log("D");
} else {
  console.log("F");
}
