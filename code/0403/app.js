const fs=require("fs");


var content=fs.readFileSync("./1.txt");
console.log(content.toString());


fs.writeFile("./2.txt","hello",{flag:"a"},(err)=>{
    console.log("写入成功");
});

fs.writeFile("./2.txt","world",{flag:"a"},(err)=>{
    console.log("写入成功");
});


console.log("读取文件成功");