const http=require("http");

let server=http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.write("abc<div style='color:red'>34</div>");

    res.end("123");
});

server.listen(9001,'127.0.0.1',()=>{
    console.log("服务已经启动");
});

