import bookModel from "../../../../model/bookModel.js";

export default async function deleteBook(req, res) {
  try {
    let { id} = req.body
      

    let book = await bookModel.findById(id).select('filePath addedBy')
    if (!book)
      res.status(404).json({
        msg: 'book not available'
      })

    let bookOwner = book.addedBy.toString()
    if (req.currentUserId !== bookOwner) {
      return res.json({
        msg: "your can't perform this task You are not Owner"
      })
    }
    //just Delete book that you have got from dataBase
    //and Server's Files folder

    fs.rm(book.filePath, err => {
      if (err) console.log('eroror deleting file', err.message)
      else console.log('file deleted successfully')
    })
    await book.delete()
    res.json({
      msg: 'book deleted successfully'
    })
  } catch (error) {
    res.json({
      msg: 'internal server error',
      error: error.message
    })
  }
}