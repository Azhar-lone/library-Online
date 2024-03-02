import mongoose from 'mongoose'
//this is about users interest
let interestSchema = mongoose.Schema({
  booksLiked: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'booksModel'
    }
  ],
  booksDownloaded: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'booksModel'

    }
  ],
  booksVisited: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'booksModel'
    }
  ],
  usersVisited: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'userModel'
    }
  ],

})

let interestModel=mongoose.model("interestModel",interestSchema)
export default interestModel