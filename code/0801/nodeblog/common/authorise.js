function renzheng(req, res, next){
    
    if(req.session.user){
      
      next();
    }else{
      res.redirect("/users/signin");
    }
  }

function norenzheng(req, res, next){
  if(req.session.user){
    res.locals.username=req.session.user.name;
  }

  next();
 
}


exports.renzheng=renzheng;
exports.norenzheng=norenzheng;



