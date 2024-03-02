import bookModel from '../../../model/bookModel.js'
import userModel from '../../../model/userModel.js'
export default async function followingsBooks(req, res) {
  try {
    let pageNumber = req.query.page

    pageNumber = parseInt(pageNumber)

    if (isNaN(pageNumber) || pageNumber < 0) {
      return res.status(401).json({
        msg: 'not authorized '
      })
    }
    let followings = await userModel
      .findById(req.currentUserId)
      .select('followings')
    let books = await bookModel
      .find({ timeStamp: { $sort: -1 } }, { addedBy: { $in: followings } })
      .limit((pageNumber - 1) * 8)
    return res.status(200).json({
      msg: 'books retreived successfully',
      successs: true,
      books: books
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'internal server error',
      error: error.message
    })
  }
}
