const UserModel= require("../models/userModel")
const UserDocument=require('../models/UserDocument')
const UserProduct=require('../models/ProductDocument')
const OrderDocument=require('../models/OrderDocument')




const basicCode= async function(req, res, next) {
    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    //res.send({ msg: "This is coming from controller (handler)"})
    next()
    }

const createUser= async function (req, res) {
    // Remember that inside request object we already know multiple attributes
    // Examples - body(req.body), query(req.query), params(req.params)
    let body = req.body
    let headers = req.headers
    console.log("The body attribute of this request is: ", body)
    console.log("The headers attribute of thisd request is: ",headers)
    let hostValue = headers.host
    console.log("The host header of this request is: ",hostValue)
    // Bracket notation is safe to use when dealing with keys that have a hyphen
    let contentType = headers["content-type"]
    console.log("The content type header of this request is: ",contentType)
    
    //Set a header in request
    req.headers["year"] = 2022
    console.log("The updated headers attribute of this request is: ",req.headers)
    res.setHeader("message","Hi there!")
    res.send({msg: "Hi"})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const dummyOne = function (req, res) {
    if (req.wantsJson) res.send({msg: "ok"})
    else res.send("ok")
}

const dummyTwo = function (req, res) {
    if (req.wantsJson) res.send({msg: "another example response"})
    else res.send("another example response")
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const documentCreat=async function(req,res){
    let data=req.body
    let savedata=await UserDocument.create(data)
    res.send({msg:savedata})

}



const creatProcuct=async function(req,res){
    let data=req.body
    let savedata=await UserProduct.create(data)
    res.send({msg: savedata})
}

const Ordercreat=async function(req,res){
    let data=req.body
    let userId=req.body.userId
    let productId=req.body.productId
    if(userId=="6362c498df67f7ca52b8dc9d" && productId=="6362d11c3b56c006f4bed39e"){
        let savedata=await OrderDocument.create(data)
        res.send({msg: savedata})
    }
   else{
      res.send({msg:"Either userId or productId is wrong and missing"})
   }
}






// const Order=async function(req,res){
//     let data=req.body
//     let savedata=await OrderDocument.create(data)
//     res.send({msg: savedata})
// }

//module.exports.Order=Order
module.exports.Ordercreat=Ordercreat
module.exports.creatProcuct=creatProcuct
module.exports.documentCreat=documentCreat


module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode
module.exports.dummyOne = dummyOne
module.exports.dummyTwo = dummyTwo