var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/student', { useMongoClient: true });
mongoose.Promise = global.Promise;

var studentSchema = mongoose.Schema({
    name: String,
    age:Number,
    sex:String
});

studentSchema.statics.findByName = function(name, cb) {
    return this.find({ name: new RegExp(name, 'i') }, cb);
};

var Student = mongoose.model('Student', studentSchema);


module.exports=Student;

