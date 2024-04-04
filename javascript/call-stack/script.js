let counter = 0;
function increment() {
  counter++;
  return increment();
}

try {
  increment();
} catch (err) {
  console.log(err);
  console.log(counter); //11026
}
