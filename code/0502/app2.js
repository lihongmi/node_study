var http = require('http');
var fs = require('fs');

//保存网络图片
function saveImage(imageUrl){
	http.get(imageUrl, function (res) {
		res.setEncoding('binary');//二进制（binary）
		
		var imageData ='';
		res.on('data',function(data){//图片加载到内存变量
			imageData += data;
        }).on('end',function(){//加载完毕保存图片
            if(!fs.existsSync("./images")){
                fs.mkdirSync("./images");
            };
			fs.writeFile('images/'+Math.random()+'.png', imageData, 'binary', function (err) {//以二进制格式保存
				if (err) throw err;
				console.log('保存成功');
			});
		});
	});
}

var images=['http://www.baidu.com/img/bdlogo.gif','http://img0.bdstatic.com/img/image/shouye/dengni5.jpg','http://img6.bdstatic.com/img/image/smallpic/gaoqingdonmanxiaotuzis.jpg'];


for(var i=0;i<images.length;i++){
	saveImage(images[i]);
}