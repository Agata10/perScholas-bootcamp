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
