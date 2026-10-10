const fs = require("node:fs");

let time = new Date().getTime();

let data = fs.readFileSync("hello.txt")
let data2 = fs.readFileSync("hello2.txt")
let data3 = fs.readFileSync("hello3.txt")
let end = new Date().getTime();

let diff = end - time;
console.log(diff)
console.log("data", data.toString().length);
console.log("data2", data2.toString().length);
console.log("data3", data3.toString().length);
