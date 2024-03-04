import bookModel from '../../../model/bookModel.js'
import userModel from '../../../model/userModel.js'
export default async function followingsBooks(req, res) {
  try {
    const { limit, page } = req.query

    let followings = await userModel
      .findById(req.currentUserId)
      .select('followings')
    let books = await bookModel
      .find({ timeStamp: { $sort: -1 } }, { addedBy: { $in: followings } })
      .skip((page - 1) * limit)
      .select({ thumbnailPicture: 1, bookName: 1 })
      .limit(limit)
    return res.status(200).json({
      msg: 'books retreived successfully',
      books: books
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'internal server error',
      error: error.message
    })
  }
}
