var mongoose = require('mongoose');




var articleSchema = mongoose.Schema({
    title: String,
    author:String,
    content:String,
    createtime:{
        default:new Date(),
        type:Date
    }
});



var Article = mongoose.model('Article', articleSchema);


module.exports=Article;

