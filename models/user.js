var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
	uid:String,
	title:String,
	content:String,
	createTime:{type:Date,default:Date.now}
});
exports.user = mongoose.model("users",userSchema);