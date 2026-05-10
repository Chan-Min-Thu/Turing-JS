const fs = require('fs');

fs.readFile("hello.txt", (err, data) => {
    fs.readFile("hello2.txt", (err, data2) => {
        console.log("data:", data);
        console.log("data2:", data2);
    })
});