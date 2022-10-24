
const mongoose = require('mongoose');

////////////////////////////////////////////////////////////Assinment//////////////////////////////////////////////////////////////////


const bookSchema= new mongoose.Schema({
    bookName:{
        type : String,
        unique: true
    },
    authorName:String,
    category:String,
    publish_year:Number
},
{timestamps:true})


module.exports=mongoose.model('Book',bookSchema)





// String, Number
// Boolean, Object/json, array