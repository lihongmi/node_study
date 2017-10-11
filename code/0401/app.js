var http=require("http");
var fs=require("fs");

var server=http.createServer((req,res)=>{
    console.log(req.url);
    res.setHeader("content-Type","text/html");


    var result=fs.readFileSync("index.html");
    res.end(result);

});


server.listen("9999",()=>{
    console.log("服务已经启动 http://localhost:9000/");
});