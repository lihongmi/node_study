const url=require("url");
const fs=require("fs");

function express (req,res){
    var urlObj=url.parse(req.url);
  //  console.log(urlObj);

    var filePath="./www"+urlObj.pathname;
    var content="not found";

    if(fs.existsSync(filePath)){
        content =fs.readFileSync(filePath);
    }

    res.end(content.toString());
  
}


module.exports=express;

