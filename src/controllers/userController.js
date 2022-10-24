const { model } = require("mongoose")
const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")

//////////////////////////////////////////////////////////Assinment/////////////////////////////////////////////////////////////////////

const creatbookslist= async function(req,res){
    let books=req.body;
    let save = await userModel.create(books)
    res.send({"List" : save})

}

const getBooklist= async function(req,res){
    let bookdata= await userModel.find()
    res.send({"List": bookdata})
}



module.exports.creatbookslist=creatbookslist
module.exports.getBooklist=getBooklist

