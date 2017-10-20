var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render("order",{msg:"我的订单"});
  });
router.get('/list', function(req, res, next) {
    res.send('订单列表');
  });

 module.exports = router;