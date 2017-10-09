const _ =require("lodash");


let result=_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
console.log(result);