//FizzBuzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    //console.log("Fizz Buzz");
  } else if (i % 3 === 0) {
    //console.log("Fizz");
  } else if (i % 5 === 0) {
    //console.log("Buzz");
  } else {
    // console.log(i);
  }
}

//prime time
for (let n = 12; n < 20; n++) {
  let isPrime = true;
  for (let j = 2; j < n; j++) {
    if (n % j == 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    console.log(n);
    break;
  }
}

//feeling loopy
const CSV =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let cell = "";
let row = "";

// const CSV =
//   "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

for (let i in CSV) {
  if (CSV[i] !== "," && CSV[i] !== "\n") {
    cell += CSV[i];
  } else if (CSV[i] == "\n") {
    // row += cell + " ";
    console.log(cell);
    cell = "";
  } else {
    cell += CSV[i];
    console.log(cell);
    cell = "";
  }

  //   } else if (CSV[i] === "\n") {
  //     row += cell + "";
  //     console.log(row.trim());
  //     row = "";
  //     cell = "";
  //   }
}
