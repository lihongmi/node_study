var express = require('express');
var authorise=require("../common/authorise");


var router = express.Router();


/* GET home page. */
router.get('/',authorise,function(req, res, next) {

    res.render('index', { title: 'Express',username:req.session.user.name });
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
