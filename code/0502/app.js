var http=require("http");
var fs=require("fs");
var cheerio=require("cheerio");



const wz="http://news.baidu.com/?tn=news";


var strHtml="";
var results=[];
http.get(wz,function(res){
	res.on("data",function(chunk){
		strHtml+=chunk;
	})
	res.on("end",function(){

		//console.log(strHtml);

		


		var $=cheerio.load(strHtml);
		var menus=[];

		$("#channel-all li").each((index,element)=>{
			menus.push({id:index,txt:$(element).text()});
	
		});
		var res=JSON.stringify(menus);
		fs.writeFile("./data.json",res,(err)=>{
			if(!err) console.log("save successed!!");
		})




		/*$(".cbo_left>div").each(function(){
			var asDom=$(this).find("a");
			var value=asDom.eq(0).text();
			var key=asDom.eq(1).text();

			value=value.replace(/(\n)|(\s)/gi, ""); 
			console.log(value.length);
			results.push({key:key,value:value});
		});
		console.log(results);

		fs.writeFile("data.json",JSON.stringify(results));

		*/
	});
})
