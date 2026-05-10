const fs = require('fs');

let startDate = new Date().getTime();
console.log("startDate:", startDate);
let data1 = fs.promises.readFile("hello.txt")
let data2 = fs.promises.readFile("hello2.txt")
let data3 = fs.promises.readFile("hello.txt")

Promise.all([data1, data2, data3]).then((results)=>{
    let endDate = new Date().getTime();
    console.log("endDate:", endDate);
    let time = endDate - startDate;
    console.log("time:", time);
})