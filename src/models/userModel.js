 const mongoose = require('mongoose')

// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
//     // isIndian: Boolean,
//     // parentsInfo: {
//     //     motherName: String,
//     //     fatherName: String,
//     //     siblingName: String
//     // },
//     // cars: [ String  ]
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema) //users

/////////////////////////////////////////////Assinment/////////////////////////////////////////////////////////////////////////////////////


const userSchema = new mongoose.Schema( {
    bookName:{
        type: String,
        require: true,
    },
    prices: {
        types:String,
        indianPrice: String,
        europePrice: String
    },
    year:{
        type:Number,
        default:2021
    },
    tag:[String],
    authorName:String,
    totalPage:Number,
    stockAvailable:Boolean,
}, { timestamps: true });

module.exports.bookmodel = mongoose.model('BooksList', userSchema)

// String, Number
// Boolean, Object/json, array