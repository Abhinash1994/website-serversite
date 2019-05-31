const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postdata = require('./routes/api/bloggingdata');
const commentdata = require('./routes/api/commentStore');
const path = require('path');
const app = express();

//body parser middleware

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());
//DB config
const db = require('./config/keys').mongoURI;

mongoose.connect(db).then(()=>console.log('mongoDB connected'))
	.catch(err=>console.log(err));


app.get('/',(req,res)=>
	res.send("hi"));

//use routes
app.use('/api/blog',postdata);
app.use('/api/blog',commentdata);


//Server static assets if in production

	app.use(express.static('client/build'));

	app.get('*',(req,res) => {

		res.sendFile(path.resolve(__dirname,'client','build','index.html'))

	})


app.listen(5000,function(){
	console.log("Server is running 3000")
});
