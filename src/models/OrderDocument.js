const mongoose=require('mongoose')

const Schema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userdocuments"
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userproducts"
    },
    amount :Number,
    isFreeAppUser:Boolean,
    date:{
        type:String,
        default: new Date()
    },
},
{timestamps:true});

module.exports=mongoose.model('OrderDocument',Schema)