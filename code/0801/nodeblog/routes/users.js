var express = require('express');
var User = require('../model/User');
var authorise=require("../common/authorise");

var router = express.Router();


/* GET article listing. */

router.get('/signup', function(req, res, next) {
  res.render("users/signup");
})
router.get('/signin', function(req, res, next) {


  res.render("users/signin");
})

router.post('/signin', function(req, res, next) {
   var {userName,pwd}=req.body;
  
    User.find({name:userName,pwd:pwd},function(err,data){
      if(err) {
        res.json({status:-1,msg:"登录失败"});
      }else{
        if(data.length==0){
          res.json({status:-1,msg:"用户不存在"});
        }else{
          console.log(data);
          req.session.user=data[0];
          console.log(req.session.user);
          res.json({status:1,msg:"ok"});
        }
       
        
      }
    });
});


router.post("/signout",function(req, res, next){
  req.session.destroy(function(err) {
    // cannot access session here
    if(err) res.json({state:-1});
     res.json({state:1});
  });
});
  
  



router.post('/signup', function(req, res, next) {
  var {userName,pwd}=req.body;

  User.find({name:userName},function(err,data){
    if(data.length==0){
      var user=new User({
        name:userName,
        pwd:pwd
    
      });
    
      user.save(function(err,data){
        console.log(err);
        if(err) {
          res.json({status:-1,msg:"注册失败"});
        }else{
          
          res.json({status:1,msg:"成功了"});
          
        }
       
      });
    }else{
      res.json({status:-1,msg:"用户名已存在"});
      //console.log("用户名以存在！");
    }
  });
  

})




module.exports = router;
