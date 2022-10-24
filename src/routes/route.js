const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController");
const userModel = require('../models/userModel.js');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


/////////////////////////////////////////////////////Assinments ///////////////////////////////////////////////////////////////////////////

router.post("/booksList",UserController.creatbookslist)

router.get("/getBookList",UserController.getBooklist)



module.exports = router;