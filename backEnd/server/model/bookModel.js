import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
  bookName: {
    type: String,
    required: true,
    unique: true,
    max: 16
  },
  filePath: {
    type: String,
    required: true,
    select: false
  },
  bookAuthor: {
    type: String,
    required: true,
    max: 16

  },
  thumbnailPicture: {
    type: String,
    required: true
  },

  bookDiscription: {
    type: String,
    required: true
  },
  bookCategory: {
    type: String,
    required: true
  },
  publishedOn: {
    type: String
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userModel',
    required: true
  },
  uploadedIn: {
    type: Date,
    default: Date.now()
  },
 
  bookSize: {
    type: Number
  },
  likedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'userModel',
      unique: true
    }
  ],
  downloads: {
    type: Number,
    default: 0
  }

  //reviews ratings likes
})

const bookModel = mongoose.model('bookModel', bookSchema)
export default bookModel
