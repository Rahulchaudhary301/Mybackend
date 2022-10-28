
const authorModel=require('../models/autModel')
const bookModel=require('../models/booModel')
const publishModel=require('../models/publishModel')




const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await authorModel.create(author)
    res.send({data: authorCreated})
}

const createBook= async function (req, res) {
    let author = req.body
    let authorCreated = await bookModel.create(author)
    res.send({data: authorCreated})
}

const creatPublisher= async function (req, res) {
    let author = req.body
    let authorCreated = await publishModel.create(author)
    res.send({data: authorCreated})
}

module.exports.createAuthor=createAuthor
module.exports.createBook=createBook
module.exports.creatPublisher=creatPublisher