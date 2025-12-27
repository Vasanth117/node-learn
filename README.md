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