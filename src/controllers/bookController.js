const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const Author=require("../models/autModel")
const Book=require("../models/booModel")
const Publish=require("../models/publishModel")
const { find } = require("../models/authorModel")

// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }
////////////////////////////////////////////////////Assinment1///////////////////////////////////////////////////////////////////////////////////////////

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await Author.create(author)
    res.send({data: authorCreated})
}

/////////////////////////////////////////////////////////////Assinment2////////////////////////////////////////////////////////////////////////////
const creatPublisher= async function (req, res) {
    let author = req.body
    let authorCreated = await Publish.create(author)
    res.send({data: authorCreated})
}

////////////////////////////////////////////////////////////Assinment3////////////////////////////////////////////////////////////////////////
const createBooks= async function (req, res) {
    let {author_id,name,Publish_id}=req.body
    let x=author_id
    let y=x.toString()
    if(!author_id){
        return res.send(" author_id is require")
    }
    if(y!=="635c2293017099b56496a994"){
          return res.send("author is not present")
    }

    if(!Publish_id){
        return res.send(" Publish_id is require")
    }
    let a=Publish_id
    let b=a.toString()
    if(b!=="635c38dafc664af471f6644a"){
        return res.send("Publisher is not present")
  }
    let author = req.body
    let authorCreated = await Book.create(author)
    res.send({data: authorCreated})
}

//////////////////////////////////////////////////////////////////Assinment 4////////////////////////////////////////////////////////////////

const Allbooks=async function(req,res){
    let savedata=await Book.find({}).populate([{path:'author_id'},{path:'Publish_id'}])
    res.send({msg:savedata})
}

///////////////////////////////////////////////////////////////////////Assinment 5 a//////////////////////////////////////////////////////////////
const putbooks=async function(req,res){
     let savedata= await Book.find({$or:[{name:"Penguin"},{name:"Harper Collins"}]}).select({_id:1})
     let arr=[]
     for(let i=0;i<savedata.length;i++){
         const element=savedata[i]
         let id=element._id
         let b=await Book.updateMany({Publish_id:id},{isHardCover:true})
         arr.push(b)
     }
     res.send({smg:arr})
}
////////////////////////////////////////////////////////////////////Assinment5 b//////////////////////////////////////////////////////////////////
 
const updateBook = async function (req, res) {
    let saveData = await Author.find({ rating: { $gt: 3.5 } }).select({ _id: 1 })
    let arr = []
    for (let i= 0; i< saveData.length; i++) {
        const element = saveData[i];
        let id = element._id
        
        let b = await Book.updateMany({ author: id }, { price:90})
        arr.push(b)
    }
    res.send({ msg: arr })

}


module.exports.updateBook=updateBook
module.exports.Allbooks=Allbooks
module.exports.createAuthor=createAuthor

module.exports.creatPublisher= creatPublisher
module.exports.createBooks= createBooks
module.exports.putbooks=putbooks

