import bookModel from "../../../model/bookModel.js"
export default async function downloadBook(req, res) {
  try {
    //Need Changes in This Function
    let { id } = req.params
    let book = await bookModel.findById(id).select('filePath')

    if (!book)
      return res.status(404).json({
        msg: 'book not available'
      })
    //download book using books id
    console.log("Book FilePath :", book.filePath)
    res.download(book.filePath, (err) => {
      if (err) {
        console.log(err)//test
      }
      else {
        console.log("no error")
      }
    })
  } catch (error) {
    res.json({
      msg: 'internal server error',
      error: error.message
    })
  }
}