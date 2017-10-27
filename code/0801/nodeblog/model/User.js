var mongoose = require('mongoose');


var userSchema = mongoose.Schema({
    name: String,
    pwd:String,
    createtime:{
        default:new Date(),
        type:Date
    }
});



var User = mongoose.model('User', userSchema);


module.exports=User;

