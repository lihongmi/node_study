var express = require('express');

var Article = require('../model/Article');
var authorise=require("../common/authorise");

var router = express.Router();


/* GET home page. */
router.get('/',authorise.norenzheng,function(req, res, next) {



    Article.find(function(err,data){

      res.render('index',{title: 'Express',articles:data });
    });

});


router.get('/articledetail/:id',authorise.norenzheng, function(req, res, next) {
  
    Article.find({_id:req.params.id},function (err, article) {
      if (err) return handleError(err);
      console.log(article);
     res.render("articledetail",{article:article[0]});
    });
  
    
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
