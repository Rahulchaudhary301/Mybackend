const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
//const mongoose=require('mongoose')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://RahulChaudhary:Rahul321@cluster1.42h1ws9.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



// const schema=new mongoose.Schema(
//     {timestamps:true});
// const a=mongoose.model('d',schema)



app.use (
    function (req, res, next) {
        console.log ("Hiii Rahul I am here YArrr");
        next();
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
