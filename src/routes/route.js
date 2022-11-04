const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const commidd=require("../middlewares/commonMiddileWare")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/users", userController.createUser  )

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updateUser)

/////////////////////////////////////////////////////////////
router.post('/creat-user',userController.CreatUs )

router.post('/getlogin', userController.userloging)

router.get('/userss/:userId',commidd.Middleware,commidd.totenValidation, userController.useridd)

router.put('/update-user/:userId',commidd.Middleware, userController.update)

router.delete('/delete-user/:userId',commidd.Middleware, userController.Delete)



module.exports = router;