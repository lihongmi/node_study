var https=require("https");
var fs=require("fs");

const options = {
    key: fs.readFileSync('./privatekey.pem'),
    cert: fs.readFileSync('./certification.pem')
};

var server=https.createServer(options,(req,res)=>{
    console.log(req.url);

    
    res.setHeader("content-Type","text/html");
    res.write("sdf");
    res.write("123");
    res.end("hello<div style='color:red;'>123</div>");
});


server.listen("9998",()=>{
    console.log("服务已经启动 http://localhost:9998/");
});