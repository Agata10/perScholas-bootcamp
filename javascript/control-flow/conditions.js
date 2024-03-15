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
