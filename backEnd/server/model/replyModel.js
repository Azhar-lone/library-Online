import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    reply: {
        type: String,
        required: true
    },
    replyBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel',
        required: true
    },
    repliedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reviewModel',
        required: true
    },
    addedOn: {
        type: Date,
        default: Date.now(),
        required:false
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
const replyModel = mongoose.model('replyModel', reviewSchema)
export default replyModel
