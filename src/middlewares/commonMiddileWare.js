const jwt=require('jsonwebtoken')

const Middleware = function(req, res, next){
    let header=req.headers["x-auth-token"]
    if(!header) return res.send({status:false, msg:"'X-Auth-Token' header is must require"})


    next()
}


const totenValidation =function(req,res,next){
    let token=req.headers["x-auth-token"]
    let decodeToken=  jwt.verify(token,'Rahul@321')
    if(!decodeToken) {
      return res.send({status:false, msg:"token is invalid"})
    }
  next()
}

module.exports.totenValidation =totenValidation 
module.exports.Middleware=Middleware