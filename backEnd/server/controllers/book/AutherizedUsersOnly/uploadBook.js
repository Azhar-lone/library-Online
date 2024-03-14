import fs from 'fs'
import path from 'path'
import slugify from 'slugify'
import multer from 'multer'
import bookModel from '../../../model/bookModel.js'
import userModel from '../../../model/userModel.js'
import { PDFImage } from 'pdf-image';//vernalable pakage

// importing Validations
import { validateUploadBook } from '../../../validations/exportValidations.js'
import {validationError} from "../../../middlewares/auth.js"

const storage = multer.diskStorage({
  destination: async function (req, file, cb) {
    try {
validateUploadBook
validationError
console.log("somewhere")

      let { bookName, bookAuthor, bookDiscription, bookCategory, publishedOn } =
        req.body

      let username = await userModel.findById(req.currentUserId, {
        userName: 1,
        _id: 0
      })
      let slugedName = slugify(bookName)

      let book = new bookModel({
        bookName: slugedName,
        bookAuthor,
        bookDiscription,
        bookCategory,
        publishedOn,
        addedBy: req.currentUserId,
        bookSize: file.size
      })

      const isValid = 'application/pdf'
      let uploadError = new Error('invalid File Type')
      if (file.mimetype === isValid) {
        uploadError = null
        fs.mkdirSync(path.resolve(`Files/${username.userName}/${slugedName}/`), { recursive: true }, err => {
          if (err) {
            return res.status(500).json({
              msg: 'internal server error'
            })
          } else {
            console.log('Folder created for book')
          }
        })
      }

      req.slugedName = slugedName
      req.book = book

      cb(uploadError, path.resolve(`Files/${username.userName}/${slugedName}/`))
    }
    catch (error) {
      console.log(({
        msg: "error while uploading book",
        error: error
      }))
    }
  },
  filename: function (req, file, cb) {
    try {
      req.book = req.book
      cb(null, (req.slugedName + '.pdf'))
    }
    catch (error) {
      res.status(500).json({
        msg: "error while uploading book"
      })
    }
  }
})

export const uploadBook_Multer = multer({
  storage: storage,
  // limits: {
  //   fileSize: 100 * 1024 * 1024,//100Mb
  //   fields: 6,
  //   files: 1,
  //   parts: 6
  // },
})

export async function uploadBook(req, res) {
  try {
    req.book.filePath = req.file.path
    let pdfImage = new PDFImage(req.file.path)
    let imagePath = await pdfImage.convertPage(0)
    req.book.thumbnailPicture = path.resolve(imagePath)
    let savedBook = await req.book.save()

    res.status(200).json({
      msg: 'book uploaded successfully',
      book: savedBook
    })
  }catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'internal server error',
      error: error.message
    })
  }
}
