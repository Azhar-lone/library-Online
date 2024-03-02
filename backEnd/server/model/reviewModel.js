import mongoose, { Mongoose, mongo } from 'mongoose'

const reviewSchema = mongoose.Schema({
  review: {
    type: String,
    required: true
  },
  reviewBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userModel',
    required: true
  },
  reviewOfBook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'bookModel',
    required: true
  },
  ratings: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  addedOn: {
    type: Date,
    default: Date.now()
  },
  likes: {
    type: Number,
    default: 0
  },
  likedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'userModel'
    }
  ]
})
const reviewModel = mongoose.model('reviewModel', reviewSchema)
export default reviewModel
