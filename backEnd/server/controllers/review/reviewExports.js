// For All
import allBookReviews from "./ForAll/allBookReviews.js"
import topReviews from "./ForAll/topReviews.js"



// Autherized Users Only
import addReview from "./AutherizedUsersOnly/addReview.js"
import likeReview from "./AutherizedUsersOnly/likeReview.js"
import replyReview from "./AutherizedUsersOnly/replyReview.js"

// Owners Only
import deleteReview from "./AutherizedUsersOnly/OwnersOnly/deleteReview.js"
import updateReview from "./AutherizedUsersOnly/OwnersOnly/updateReview.js"


// Admins Only
import getAllReviews from "./AdminsOnly/getAllReviews.js"



export {
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
}