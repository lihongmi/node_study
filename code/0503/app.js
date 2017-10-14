const http=require("http");
const express=require("./express");



const server=http.createServer(express);

var io = require('socket.io')(server);

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('chat message', function(msg){
     console.log('message: ' + msg);

     socket.broadcast.emit("clientE",msg);
    });
});
  


server.listen(8888,()=>{
    console.log("服务端已启动 请访问  http://localhost:8888");
})



