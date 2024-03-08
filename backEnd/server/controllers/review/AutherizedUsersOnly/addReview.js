// Importing models
import reviewModel from "../../../model/reviewModel.js";


export default async function addReview (req, res) {
    try {
      let { review, ratings, reviewOfBook } = req.body
  
      let reviewBy = req.currentUserId
  
      let Review = await reviewModel.create({
        review,
        reviewBy,
        reviewOfBook,
        ratings
      })
      if (!Review) {
        return res.status(404).json({
          msg: 'error while creating review'
        })
      }
      return res.status(200).json({
        msg: 'review posted successfully',
        review: Review
      })
    } catch (error) {
      res.status(500).json({
        msg: 'internal server error',
        error: error.message
      })
    }
  }