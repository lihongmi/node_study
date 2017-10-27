var express = require('express');



var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session.user);
  if(req.session.user){
    res.render('index', { title: 'Express' });
  }else{
    res.redirect("/users/signin");
  }


  
});


router.get('/session', function(req, res, next) {
    if(req.session.views==undefined){
      req.session.views=0;
    }else{
      req.session.views++;
    }

    
    res.send(req.session.views.toString());
    res.end();
});


module.exports = router;
