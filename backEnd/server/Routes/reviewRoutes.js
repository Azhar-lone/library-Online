// Importing dependencies
import express from 'express'

//Importing controllers 
import {
  // For All
  allBookReviews,
  topReviews,
  // Autherized Users Only
  addReview,
  likeReview,
  replyReview,
  // Owners Only
  deleteReview,
  updateReview,
  // Admins Only
  getAllReviews
} from '../controllers/review/reviewExports.js'

//Importing Middlewares 
import { AdminAuthorized, UserAuth, validationError } from '../middlewares/auth.js'

//Importing Validations
import { validateId, addReviewValidation } from "../validations/exportValidations.js"
// Initializing Router in strict Mode
const reviewRouter = express.Router({ strict: true })

//visitors can read reviews ForAll

reviewRouter
  .get('/getall',
    validateId,
    validationError,
    allBookReviews)
  .get('/gettop3',
    validateId,
    validationError,
    topReviews)


// Autherized Users Only
reviewRouter
  .use(UserAuth)
  .post('/add',
    addReviewValidation,
    validationError,
    addReview)
  .post('/like',
    validateId,
    validationError,
    likeReview)
  .post("/reply",
    validateId,
    validationError,
    replyReview)
  //owners only
  .delete("/delete",
    validateId,
    validationError,
    deleteReview)
  .put("/update",
    validateId,
    validationError,
    updateReview)
  // Admins Only
  .use(AdminAuthorized)
  .get("/admin/allreviews", getAllReviews)
export default reviewRouter
