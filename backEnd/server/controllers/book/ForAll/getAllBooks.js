import bookModel from '../../../model/bookModel.js'


export default async function getAllBooks(req, res) {
  try {
    let pageNumber = req.query.page
    let limit = req.query.limit
    // pageNumber = parseInt(pageNumber)
    // if (isNaN(pageNumber) || pageNumber < 0) {
    //   return res.status(401).json({
    //     msg: 'not authorized '
    //   })
    // }
    let books = await bookModel
      .find()
      .select({ thumbnailPicture: 1, bookName: 1 })
      .sort({ timeStamp: -1 })
      .limit(limit)
      .skip((pageNumber - 1) * limit)
    let count = await bookModel.find().count()
    if (!books)
      return res.status(404).json({
        msg: 'books not Found'
      })

    res.status(200).json({
      msg: 'Books retreived Successfully',
      books: books,
      count: count
    })
  } catch (error) {
    res.status(500).json({
      msg: 'internal server error',
      error: error.message
    })
  }
}
