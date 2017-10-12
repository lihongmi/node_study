const url = require('url');
const querystring = require('querystring');

var wangzhi="http://www.shitu91.com/a/b.html?foo=bar&abc=xyz&abd=123#123";


var urlObj=url.parse(wangzhi)


console.log(JSON.stringify(urlObj));


var queryObj=querystring.parse(urlObj.query);
console.log(queryObj);

console.log(queryObj.abc);


