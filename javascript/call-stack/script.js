let counter = 0;
function increment() {
  counter++;
  return increment();
}

try {
  increment();
} catch (err) {
  // console.log(err);
  // console.log(counter); //11026
}

///PART 2
const flat = (array) => {
  let result = [];
  for (let index in array) {
    if (Array.isArray(array[index])) {
      result = result.concat(flat(array[index]));
      flat(array[index]);
    } else {
      result.push(array[index]);
    }
  }
  return result;
};

// function flatten(items) {
//     const flat = [];

//     items.forEach(item => {
//       if (Array.isArray(item)) {
//         flat.push(...flatten(item));
//       } else {
//         flat.push(item);
//       }
//     });

//     return flat;
//   }

console.log(flat([1, [2, 3, [4, 5, 6, [7, 8, 9]]]]));
const trampoline = (f, ...arg) => {
  let result = f(...arg);
  while (typeof result === "function") {
    result = result();
  }
  return result();
};

console.log(trampoline([1, [2, 3, [4, 5]]]));

///Part 3
const p = document.createElement("p");
p.textContent = "Hello";
