import bookModel from '../../../model/bookModel.js'

export default async function getRelatedBooks(req, res) {
  try {
let bookId=req.query.id
    // use some operators for
    const books = await bookModel
      // .find()
      // .sort({ likes: -1, downloads: -1, timeStamp: -1 })
      // .select({ bookName: 1, thumbnailPicture: 1, bookDiscription: 1 })
      // .exec()

    res.status(200).json({
      msg: 'books retreived successfully',
      books: books
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'internal server error',
      error: error
    })
  }
}
