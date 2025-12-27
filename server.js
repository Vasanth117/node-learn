const fs = require('fs');
const http =require('http');

///////////////////////
// FILE SYSTEM
// fs.readFile('./txt/input.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log(err);

//   fs.readFile('./txt/append.txt', 'utf-8', (err, data2) => {
//     if (err) return console.log(err);

//     fs.writeFile('./txt/final.txt', `${data1}\n${data2}`, 'utf-8', err => {
//       if (err) return console.log(err);
//       console.log('Your file has been written');
//     });
//   });
// });

// console.log('Will read file!');

///////////////////////
// SERVER
const server =http.createServer((req, res)=>{
    
    res.end('Hello from the server!');
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to request on port 8000');
})
