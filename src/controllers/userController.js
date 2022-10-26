const { query } = require("express")
const UserModel= require("../models/userModel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

/////////////////////////////////////////////////////Assinment///////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////Assinment 1 //////////////////////////////////////////////////////////////////////

const createBooks= async function (req, res) {
    let data= req.body
    let booksCollection= await UserModel.bookmodel.create(data)
    res.send({msg: booksCollection})
}

/////////////////////////////////////////////////Assinment 2////////////////////////////////////////////////////////////////////////////////
const getBooklist= async function (req, res) {
        let allBooks= await UserModel.bookmodel.find().select({bookName:1, authorName:1, _id:0})
        res.send({msg: allBooks})
     }


/////////////////////////////////////////////////////////Assinment 3///////////////////////////////////////////////////////////////////////

     const getBooksInYear= async function (req, res) {
        let year=req.query.year
        let allBooks= await UserModel.bookmodel.find({ year:year})
        res.send({msg: allBooks})
     }
  
     ///////////////////////////////////////////////////////////Assinment4 /////////////////////////////////////////////////////////////////////
     const getParticularBooks= async function (req, res) {
        let body=req.body;
        let allBooks= await UserModel.bookmodel.find(body)
        res.send({msg: allBooks})

     }

     //////////////////////////////////////////////////Assinment 5////////////////////////////////////////////////////////////////////

     const getXINRBooks= async function (req, res) {
        let allBooks= await UserModel.bookmodel.find({"prices.indianPrice":{$in:[100,200,500]}})
        res.send({msg: allBooks})
     }

      ////////////////////////////////////////Assinment 6/////////////////////////////////////////////////////////////////////////////////

     const getRandomBooks= async function (req, res) {
        let allBooks= await UserModel.bookmodel.find({stockAvailable:true, totalPage:{$gt:500}})
        res.send({msg: allBooks})
     }

     
module.exports.getRandomBooks=getRandomBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getParticularBooks=getParticularBooks
module.exports.getBooksInYear=getBooksInYear
module.exports.createBooks=createBooks

module.exports.getBooklist=getBooklist
//module.exports.createUser= createUser
//module.exports.getUsersData= getUsersData