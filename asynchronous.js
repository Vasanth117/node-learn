const fs = require('fs');

fs.readFile('./txt/input.txt', 'utf-8', (err, data1) => {
  if (err) return console.log(err);

  fs.readFile('./txt/append.txt', 'utf-8', (err, data2) => {
    if (err) return console.log(err);

    fs.writeFile('./txt/final.txt', `${data1}\n${data2}`, 'utf-8', err => {
      if (err) return console.log(err);
      console.log('Your file has been written');
    });
  });
});

console.log('Will read file!');

