function renzheng(req, res, next){
    
    if(req.session.user){
      next();
    }else{
      res.redirect("/users/signin");
    }
  }


module.exports=renzheng;


