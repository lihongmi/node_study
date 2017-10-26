var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog', { useMongoClient: true });
mongoose.Promise = global.Promise;

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

