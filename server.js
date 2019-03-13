const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/users');

app.post('/data',(req,res)=>{
	var user = new User({
		name:req.body.name,
		paragraph:req.body.paragraph,
		address:req.body.address
	});

	user.save().then((doc)=>{
		res.send(doc);
	},(e)=>{
		res.status(400).send(e);
	})
})


app.listen(3000,function(){
	console.log("Server is running 3000")
});