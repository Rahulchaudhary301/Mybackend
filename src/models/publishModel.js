const mongoose=require('mongoose');


const Schema = new mongoose.Schema( {
    name: String, 
    headQuarter:String

}, { timestamps: true });

module.exports = mongoose.model('NewPublisher', Schema)