import bookModel from '../../../model/bookModel.js'

export default async function usersBooks(req, res) {
  try {
    const { userId, page } = req.query
    console.log("typof UserId :", typeof userId, "  typof page :", typeof page)
    //convert page to int and 

    if (typeof page !== "number" || typeof userId !== "string") {
      return res.status(401).json({
        msg: 'not authorized '
      })
    }

    let books = await bookModel
      .find({ addedBy: userId })
      .sort({ timeStamp: -1 })
      .limit(8)
      .skip((pageNumber - 1) * 8)

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
