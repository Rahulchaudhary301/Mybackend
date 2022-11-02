//const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")




const basicCode= async function(req, res) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    }

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

///////////////////////////////////////////////////////////////Assinment///////////////////////////////////////////////////////////////////

const list=async function(req,res){
    let s="Heyyy Rahul I am your Good Friend"
    res.send({msg: s})
}

const createMember=async function(req,res){
    let data=req.body
    let save=await UserModel.create(data)
    res.send({msg:save})
}
const allmember=async function(req,res){
    let data=await UserModel.find()//.select({name:1,_id:0,mobile:1})
    res.send({msg:data})
}


module.exports.allmember=allmember
module.exports.list=list
module.exports.createMember=createMember
// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
// module.exports.basicCode= basicCode