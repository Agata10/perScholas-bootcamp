//PART 2
const csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const table = [];
let row = csv.split("\n");

row.forEach((r) => {
  let rowData = r.split(",");
  table.push(rowData);
});

//console.log(table);

///PART 3
const headings = table.shift(); //array of headings
const tableObjs = []; //array of objects
const keys = []; //
//console.log(headings);

headings.forEach((h) => {
  //creating array of keys that are lowercase
  keys.push(h.toLowerCase());
});

table.forEach((row) => {
  const data = {}; ///object for data of each row
  for (let i = 0; i < row.length; i++) {
    data[keys[i]] = row[i]; //assign key to value
  }
  tableObjs.push(data);
});
//console.log(tableObjs);

//PART 4

//remove last element from the sorted array
tableObjs.sort().pop();
//console.group(tableObjs);

//insert the following object at index 1
tableObjs.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});
//console.log(tableObjs);

//add at the end the object
tableObjs.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
//console.log(tableObjs);

//average age calculation
let sum = 0;
tableObjs.forEach((person) => {
  sum += Number(person.age);
});
let avg = sum / tableObjs.length;
//console.log(avg);

//PART 5  --two for loops solution
/// go back to CSV format

const row1 = Object.keys(tableObjs[0]);
//console.log(row1);

let convertToCSV = row1.join(",").concat(`\\n`);
//console.log(row1);

// tableObjs.forEach((person, index) => {
//   for (let i = 0; i < row1.length; i++) {
//     if (index === tableObjs.length - 1 && i === row1.length - 1) {
//       convertToCSV = convertToCSV.concat(`${person[row1[i]]}`);
//     } else if (i === row1.length - 1) {
//       convertToCSV = convertToCSV.concat(`${person[row1[i]]}\\n`);
//     } else {
//       convertToCSV = convertToCSV.concat(`${person[row1[i]]},`);
//     }
//   }
// });

tableObjs.forEach((person, i) => {
  let row = "";
  for (let keys in person) {
    row = row.concat(`${person[keys]},`);
  }
  row = row.slice(0, -1); //delete the last comma
  if (i === tableObjs.length - 1) {
    convertToCSV = convertToCSV.concat(row); //if last row do not add \n at the end
  } else {
    convertToCSV = convertToCSV.concat(row + `\\n`);
  }
});

console.log(convertToCSV);
