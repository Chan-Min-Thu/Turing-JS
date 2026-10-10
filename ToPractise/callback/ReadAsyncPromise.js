const fs = require("node:fs");

const start = new Date().getTime();
const p1 = fs.promises.readFile("hello.txt");
const p2 = fs.promises.readFile("hello2.txt");
const p3 = fs.promises.readFile("hello3.txt");
Promise.all([p1,p2,p3]).then((error,data)=>{
    const end = new Date().getTime();
    const diff = end -start;
    console.log("diff",diff)
})