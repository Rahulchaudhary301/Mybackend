let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}





////////////////////////////////////////////////////Assinment-1///////////////////////////////////////////////////////////////////////

const vassinationAbilityByDistrictId= async function(req,res){
    try{
        let id=req.query.district_Id
        let date=req.query.date
        let options={
            method:'get',
            url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result= await axios(options)
        let data=result.data
        res.status(200).send({msg:data})
    }
    catch(err){
        res.status(500).send({ msg: err.message })
    }
}





/////////////////////////////////////////////////////Assinment-2////////////////////////////////////////////////////////////////////


  const weather=async function(req,res){
    try{
        let arr1=[]
        let arr=["Bengaluru", "Mumbai","Patna","Delhi","Kolkata","Chennai","London","moscow"]
        for(let i=0;i<arr.length;i++){
            let city=arr[i]
            let options={
            method:"get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec92c65ef4c828f8298b23228b620970`
         }
         let result= await axios(options)
         let data=result.data
         let {name,main:{temp}}=data
         //let save=`City: ${name} , temp: ${m}`
          arr1.push({name,temp})
           
        }
        arr1.sort((a,b)=>{
            return a.temp - b.temp
         })
         res.status(200).send({msg:arr1})
    }
    catch(err){
        res.status(400).send({msg:err.message})
    }
  }


////////////////////////////////////////////////////Assinment3////////////////////////////////////////////////////////////////////////////


 const mems=async function(req,res){
    try{
        let {template_id,text0,text1,username,password}=req.query
        let options={
            method:"get",
            url:`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let result= await axios(options)
        res.status(200).send({msg:result.data})
    }
    
    catch(err){
        res.status(400).send({msg:err.message})
    }
 }
 
 
module.exports.mems=mems
module.exports.weather=weather
module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.vassinationAbilityByDistrictId=vassinationAbilityByDistrictId