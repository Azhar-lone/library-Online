import bookModel from '../../../model/bookModel.js'

export default async function usersBooks(req, res) {
  try {
    const { limit, page } = req.query
    const userId = req.body.id

    let books = await bookModel
      .find({ addedBy: userId })
      .sort({ timeStamp: -1 })
      .select({ thumbnailPicture: 1, bookName: 1 })
      .limit(limit)
      .skip((pageNumber - 1) * limit)

    if (!books)
      return res.status(404).json({
        msg: 'books not Found',
        success: false
      })
    let count = await bookModel.find({ addedBy: userId }).count()

    res.status(200).json({
      msg: 'Books retreived Successfully',
      success: true,
      books: books,
      count: count
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'internal server error',
      success: false,
    })
  }
}
