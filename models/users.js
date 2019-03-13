var mongoose = require('mongoose');


var User = mongoose.model('User',{
	name:{
		type:String
	},
	paragraph:{
		type:String
	},
	address:{
		type:String
	}
});

module.exports = {User}