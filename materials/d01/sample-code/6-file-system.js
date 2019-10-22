const fs = require('fs');

fs.appendFile('./assets/greet.txt', "Hello world (again)...\n", err => {
  if (err) throw err;
  console.log('File saved.');
})

fs.open('./assets/newFile.txt', 'w', (err, file) => {
  if (err) throw err;
  console.log('File saved.');
});

fs.writeFile("./assets/newfile2.txt", "Hello world!", err => {
  if (err) throw err;
  console.log("File saved.");
});

fs.unlink("./assets/newfile2.txt", err => {
  if (err) throw err;
  console.log("File deleted.");
});

fs.rename("./assets/newfile.txt", "./assets/renamedFile.txt", err => {
  if (err) throw err;
  console.log("File renamed.");
});