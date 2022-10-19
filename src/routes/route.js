const express = require('express');
const router = express.Router();
const lodash=require('lodash')

///////////////////////////////////////////////////////////solution 3//////////////////////////////////////////////////////////////////////

let players = [
    {
      name: "Rahul",
      dob: "20/08/1998",
      gender: "male",
      city: "Darbhanga",
      sports: ["Cricket"],
    },
    {
      name: "Aman",
      dob: "10/01/2000",
      gender: "male",
      city: "Dabhanga",
      sports: ["Volleyball"],
    },
    {
      name: "Abhishek",
      dob: "05/11/2002",
      gender: "male",
      city: "Darbhanga",
      sports: ["swimming"],
    }
  ];
  router.post("/players",function (req, res) {
    console.log(players)
    let newplayer = req.body;
    let found=req.body.name;
    console.log("New Players Found :- ",newplayer)
    for (i of players) {
        if (i.name == found) {
            return res.send("name already exists")   
        }
    }
    players.push(newplayer)
    res.send({ msg: players, status: true });
  });







///////////////////////////////////////////////////////////solution 1/////////////////////////////////////////////////////////////////////////

router.get('/sol1',function (req , res,){
    let arr=[1,2,3,5,6,7];  
    let sum=lodash.sum(arr) 
    let n=(arr.length)+1;
    let number=(n*(n+1))/2
    let missingNumber=number-sum;
    res.send({"data":missingNumber})
   
    
    //////////////////////////////////////////////////////solution 2//////////////////////////////////////////////////////////////////////////
  
  })
  router.get('/sol2',function (req , res,){
    let ar=[33,34,35,37,38];
    let sum=lodash.sum(ar)
     let first=lodash.first(ar)
     let second=lodash.last(ar)
    let n=(ar.length)+1;
    let number=(n*(first+second))/2
    let missingNumber=number-sum;
    res.send({"data":missingNumber})
     
  })



module.exports = router;