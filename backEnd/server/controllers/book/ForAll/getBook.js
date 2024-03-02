import bookModel from "../../../model/bookModel.js"

export default async function getBook(req, res) {
  try {
    let id = req.params.id
    // if (typeof id !== String) {
    //   return res.status(401).json({
    //     msg: 'not authorized '
    //   })
    // }
    let book = await bookModel.findById(id)
    if (!book) {
      return res.status(404).json({
        msg: 'book not Available'
      })
    }
    res.json({
      msg: 'book Retreived Successfully',
      Book: book
    })
  } catch (error) {
    res.json({
      msg: 'internal server error',
      error: error.message
    })
  }
}
