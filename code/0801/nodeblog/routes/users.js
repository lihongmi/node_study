var express = require('express');
var User = require('../model/User');


var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/logup', function(req, res, next) {
  res.render("users/logup");
})
router.get('/login', function(req, res, next) {
  res.render("users/login");
})



router.post('/logup', function(req, res, next) {
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
          res.redirect("/users/logup");
        }else{
          
          res.redirect("/users/login");
        }
       
      });
    }else{
      res.redirect("/users/logup");
      //console.log("用户名以存在！");
    }
  });
  

})




module.exports = router;
