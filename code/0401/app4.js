var https=require("https");

https.get('https://www.baidu.com', (res) => {
    console.log(res.statusCode);

    var result="";
    res.on('data', (chunk) => { result += chunk; });

    res.on('end', () => {
        console.log(result);
    });

}).on('error', (e) => {
console.error(`错误: ${e.message}`);
});