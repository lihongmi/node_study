const fs=require("fs");

//重命名
/*fs.rename("./1.txt","./11.txt",(err)=>{
    if(!err) console.log("重命名成功");
});*/
//判断文件是否存在
var res=fs.existsSync("./2.txt");
console.log(res);

//获取文件基本信息
fs.stat("./2.txt",(err,stats)=>{
    if(err){
         console.log("获取信息失败");
         return false;
    }

    console.log(stats);

});
//删除文件
if(fs.existsSync("./11.txt")){
    fs.unlink("./11.txt");
}

if(!fs.existsSync("./c")){
    fs.mkdir("./c");
}


fs.readdir(".",(err,files)=>{
    console.log(files);
});