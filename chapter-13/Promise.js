const fs = require('fs');

let startDate = new Date().getTime();

fs.promises.readFile("hello.txt").then((data) => {
    console.log("data:", data.toString().length);
})

console.log("startDate:", startDate);