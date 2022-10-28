const mongoose=require('mongoose');


const Schema = new mongoose.Schema( {
    name: String,
    address:String

}, { timestamps: true });

module.exports = mongoose.model('NewPublisher', Schema)