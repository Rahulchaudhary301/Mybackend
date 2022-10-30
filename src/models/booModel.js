
const mongoose=require('mongoose')


const bookSchema = new mongoose.Schema( {
    Book_name: String,
    author_id: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "NewAut"
    }, 
    Publish_id: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "NewPublisher"
    },
    price: Number,
    ratings: Number,
    isHardCover:{
        type:Boolean,
        default:false
    },
    

}, { timestamps: true });

module.exports=mongoose.model('NewBook',bookSchema)