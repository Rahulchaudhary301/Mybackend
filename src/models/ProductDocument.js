const mongoose=require('mongoose')

const Schema=new mongoose.Schema({
    name:String,
    category:String,
    price:{
        type:Number,
        require:true
    },
},{timestamps:true});

module.exports=mongoose.model('UserProduct',Schema)