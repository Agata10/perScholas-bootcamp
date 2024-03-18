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
