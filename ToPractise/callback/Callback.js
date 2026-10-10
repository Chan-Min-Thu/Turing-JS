const fs = require("node:fs");

fs.readFile("hello.txt",(err,data)=>{
    fs.readFile("hello2.txt",(err,data1)=>{
        console.log("data", data);
        console.log("data1", data1)
    })
})