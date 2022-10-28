const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const assinmentcontroller=require('../controllers/assinmentController')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

//////////////////////////////////////assinment////////////////////////////////////////////////////////////
router.post("/createAuthor", assinmentcontroller.createAuthor  )
router.post("/createBook", assinmentcontroller.createBook  )
router.post("/createPublisher", assinmentcontroller.creatPublisher )


module.exports = router;