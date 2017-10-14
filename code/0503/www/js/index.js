var userName=prompt("请输入用户名")||"匿名用户"+10000+Math.floor(Math.random()*10000);

var socket = io();


$('form').submit(function(){


    var msg={name:userName,msg: $('#m').val()};


    socket.emit('chat message',JSON.stringify(msg));



    $('#messages').append($('<li>').text("我说:"+$('#m').val()));
    $('#m').val('');

    return false;
  });


  socket.on('clientE', function(msg){

        var msgObj=JSON.parse(msg);

      $('#messages').append($('<li>').text(msgObj.name+"说:"+msgObj.msg));
  });