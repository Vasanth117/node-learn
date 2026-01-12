const fs = require('fs');
const http =require('http');
const url =require('url');

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

/////////////////////////
///////SERVER

const data =fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataobj= JSON.parse(data);
const server =http.createServer((req, res)=>{
    const pathName=req.url
    console.log(req.url);
    if(pathName=== '/'||pathName==='/overview'){
      res.end('this is the OverView ');
    }else if(pathName==='/product'){
     res.end('this is the product');
    }else if(pathName==='/api')
    {
       res.writeHead(200,{'Content-type':'application/json'});
        res.end(data);
    }
    else{
        res.writeHead(404,{
            'Content-type':'text/html',
            'my-own-header': 'hello-world'
        });
        res.end ('<h1> this is vasanth page still is developing</h1> ');
    }
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to request on port 8000');
})


/*
This code creates a basic web server using Node.js.
When you open different URLs in the browser, the server sends different responses.

1️⃣ Reading a JSON file
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');

What happens here?

fs → File System module (used to read files)

readFileSync → reads file before server starts

__dirname → current folder path

'utf-8' → converts file into readable text

👉 Result:

data = JSON file content as text

Example:

{"id":1,"name":"Phone"}


is stored as:

'{"id":1,"name":"Phone"}'

2️⃣ Convert JSON text to JavaScript object
const dataobj = JSON.parse(data);

Why?

JSON is text

JavaScript works with objects

JSON.parse() converts text → object

👉 Example:

{ id: 1, name: 'Phone' }


⚠️ Note:
Right now, dataobj is not used, but it’s ready for future use.

3️⃣ Create the server
const server = http.createServer((req, res) => {

Meaning:

http.createServer() creates a server

This function runs every time a request comes

req → request from browser

res → response sent back

4️⃣ Get URL path
const pathName = req.url;
console.log(req.url);

Example:

If you open:

http://127.0.0.1:8000/product


Then:

pathName = '/product'

5️⃣ Routing (deciding what to show)
🟢 Overview page
if (pathName === '/' || pathName === '/overview') {
  res.end('this is the OverView ');
}


If user opens:

/

/overview

➡ Server sends:

this is the OverView

🟢 Product page
else if (pathName === '/product') {
  res.end('this is the product');
}


If user opens:

/product


➡ Server sends:

this is the product

🟢 API (JSON response)
else if (pathName === '/api') {
  res.writeHead(200, { 'Content-type': 'application/json' });
  res.end(data);
}

Step-by-step:

200 → success

Content-type: application/json → browser knows it’s JSON

res.end(data) → sends JSON file content

Open in browser:

http://127.0.0.1:8000/api


You will see raw JSON data

🔴 Page not found (404)
else {
  res.writeHead(404, {
    'Content-type': 'text/html',
    'my-own-header': 'hello-world'
  });
  res.end('<h1> this is vasanth page still is developing</h1>');
}


If URL does not match:

/

/overview

/product

/api

➡ Server sends:

404 error

HTML message

6️⃣ Start the server
server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to request on port 8000');
});

Meaning:

Server runs on:

Port: 8000

Address: localhost

You can open in browser:

http://127.0.0.1:8000

🔁 How everything works (flow)

1️⃣ Browser sends request
2️⃣ Server reads URL
3️⃣ if / else checks path
4️⃣ Server sends response
5️⃣ Browser shows output

🧠 Simple example
URL	Output
/	this is the OverView
/overview	this is the OverView
/product	this is the product
/api	JSON data
/abc	404 page
*/