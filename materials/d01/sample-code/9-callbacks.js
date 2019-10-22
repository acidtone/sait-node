const fs = require("fs");

let file = fs.readFile("./assets/lorem.txt", "utf8", (err,data) => {
  if (err) throw err;
  console.log('read file');
  console.log(data);
});

console.log(file); // undefined because it runs before the file is read