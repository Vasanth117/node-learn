"# node-learn" 
15-12
🔹 Synchronous (Sync)

Meaning: Tasks run one after another.
Each task waits until the previous one finishes.

🧠 How it works

Blocking execution

Slower if a task takes time

Simple to understand

✅ Example (Real life)

📌 Standing in a queue at a billing counter
→ You wait until the person before you finishes.

🧾 Code Example (Node.js – Sync)
const fs = require("fs");

const data = fs.readFileSync("read-this.txt", "utf8");
console.log(data);
console.log("This runs after file reading");


⛔ Program waits until the file is read.

🔹 Asynchronous (Async)

Meaning: Tasks run in parallel.
The program does not wait for a task to finish.

🧠 How it works

Non-blocking execution

Faster and efficient

Uses callbacks / promises / async-await

✅ Example (Real life)

📌 Ordering food in a restaurant
→ You order, then do other things while food is prepared.

🧾 Code Example (Node.js – Async)
const fs = require("fs");

fs.readFile("read-this.txt", "utf8", (err, data) => {
    if (err) return console.log(err);
    console.log(data);
});

console.log("This runs first");


✔️ Output order:

This runs first
[file content]

🔁 Key Differences (Easy Table)
Feature	Synchronous	Asynchronous
Execution	One by one	Parallel
Waiting	Yes	No
Blocking	Blocking	Non-blocking
Speed	Slower	Faster
Usage	Small tasks	Large / I/O tasks
🟢 Which is better in Node.js?

👉 Asynchronous is preferred because:

Node.js is non-blocking

Best for file, database, API calls

✍️ Exam-ready Definition

Synchronous: Operations execute sequentially, blocking the next task until completion.
Asynchronous: Operations execute without blocking, allowing other tasks to run simultaneously.


Creating the server
>>>>>>


1️⃣ http.createServer(...)
const server = http.createServer((req, res) => {


http → Node.js built-in module (used to create servers)

createServer() → creates an HTTP server

(req, res) → callback function that runs every time a request comes

Parameter	Meaning
req	Request object (data sent by browser)
res	Response object (data sent back to browser)
2️⃣ Sending a response
res.end('Hello from the server!');


Sends the response to the client (browser)

Ends the response

Browser will display:

Hello from the server!


⚠️ If you don’t call res.end(), the browser will keep loading forever.

3️⃣ Listening on a port
server.listen(8000, '127.0.0.1', () => {


8000 → Port number

'127.0.0.1' → localhost

Callback runs when server starts successfully

4️⃣ Confirmation message
console.log('Listening to request on port 8000');


Just a message to confirm server is running

🌐 How to run this
1️⃣ Complete code (IMPORTANT)

You must include:

const http = require('http');

Final working code:
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello from the server!');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on port 8000');
});