const fs = require("node:fs");

const time = new Date().getTime();
fs.readFile("hello.txt",(error,data)=>{
    console.log("data",data.toString().length);
});

fs.readFile("hello2.txt",(error,data)=>{
    console.log("data",data.toString().length);
})

fs.readFile("hello3.txt",(error,data)=>{
    console.log("data",data.toString().length)
})

const time2 = new Date().getTime();
const diff = time2-time;
console.log(diff)