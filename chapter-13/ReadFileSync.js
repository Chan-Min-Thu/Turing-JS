const fs = require("node:fs");

let startDate = new Date().getTime();
console.log("startDate:", startDate);
let data = fs.readFileSync("hello.txt")
let data2 = fs.readFileSync("hello2.txt")
let data3 = fs.readFileSync("hello.txt")

let endDate = new Date().getTime();
console.log("endDate:", endDate);

let time = endDate - startDate;

console.log("time:", time);
console.log("data:", data.toString().length);
console.log("data2:", data2.toString().length);
console.log("data3:", data3.toString().length);