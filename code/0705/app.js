
var Student =require("./model/Student");

//添加数据
/*var wujian=new Student({name:"wujian",age:31,sex:"男"});
var liuziun=new Student({name:"liu",age:21,sex:"女"});
var xuxiangke=new Student({name:"xu",age:11,sex:"男"});
wujian.save();
liuziun.save();
xuxiangke.save();*/


//查询数据
/*Student.find(function (err, students) {
    if (err) return console.error(err);
    console.log(students);
});

Student.find({ name: "liu" }, function (err, students) {
    if (err) return console.error(err);
    console.log(students);
});


Student.findByName("liu",function(err,data){
    console.log(data);
});
*/

//修改数据
/*Student.update({ age: { $gt: 20 } }, { age: 25 }, {multi: true }, function(err){
    if (err) return console.error(err);
    console.log("修改成功");
});*/

//删除数据
/*Student.remove({ _id: '59f161f7154ae10fd427bb70' }, function (err) {
    if (err) return handleError(err);
    console.log("removed!");
  });*/









