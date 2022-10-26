const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)



// router.post("/createBookkk", BookController.createBookkk  )

// router.get("/getBooksData", BookController.getBooksData)


////////////////////////////////////////////////////////////////////////Assinment////////////////////////////////////////////////////////////////

router.post("/creatBooks", UserController.createBooks)
router.get("/getBooklist", UserController.getBooklist)
router.get("/getBooksInYear", UserController.getBooksInYear)
router.post("/getParticularBooks", UserController.getParticularBooks)
router.get("/getXINRBooks", UserController.getXINRBooks)
router.get("/getRandomBooks", UserController.getRandomBooks)


module.exports = router;