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
