// For All
import getAllBooks from "./ForAll/getAllBooks.js"
import featuredBook from "./ForAll/featuredBook.js"
import getBook from "./ForAll/getBook.js"
import usersBooks from "./ForAll/usersBooks.js"
import getRelatedBooks from "./ForAll/getRelatedBooks.js"

// Autherized Users Only
import downloadBook from "./AutherizedUsersOnly/downloadBook.js"
import followingsBooks from "./AutherizedUsersOnly/followingsBooks.js"
import likeBook from "./AutherizedUsersOnly/likeBook.js"
import { uploadBook, uploadBook_Multer } from "./AutherizedUsersOnly/uploadBook.js"

// Owners Only
import deleteBook from "./AutherizedUsersOnly/OwersOnly/deleteBook.js"
import updateBook from "./AutherizedUsersOnly/OwersOnly/updateBook.js"

// Admins Only
// import { } from "./AdminsOnly"

export {
  // For All
  getAllBooks,
  featuredBook,
  getBook,
  usersBooks,
  // Autherized Users Only
  downloadBook,
  followingsBooks,
  likeBook,
  uploadBook,
  uploadBook_Multer,
  // Owners Only
  deleteBook,
  updateBook,
  // Admins Only

}
