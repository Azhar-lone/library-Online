import bookModel from '../../../model/bookModel.js'

export default async function featuredBook(req, res) {
  try {
    // use some operators for
    const book = await bookModel
      .find()
      .sort({ likes: -1, downloads: -1, timeStamp: -1 })
      .select({ bookName: 1, thumbnailPicture: 1, bookDiscription: 1 })
      .exec()

    res.status(200).json({
      msg: 'book retreived successfully',
      book: book
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'internal server error',
      error: error
    })
  }
}
