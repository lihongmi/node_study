const path=require("path");
const fs=require("fs");



let lujing="E:\\node_study\\code\\0403\\2.txt";
let lujing1="E:\\node_study\\code\\0403\\";




console.log(path.basename(lujing));
console.log(path.extname(lujing));
console.log(path.dirname(lujing1));

fs.readdir(lujing1,(err,files)=>{
    console.log(files);
});

let newlujing=path.join("a","b","c","..","g/f/e/d","..");


console.log(newlujing);

let pathObj=path.parse(lujing);
console.log(pathObj);




