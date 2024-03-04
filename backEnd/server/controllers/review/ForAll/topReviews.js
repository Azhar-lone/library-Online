
// Importing models
import reviewModel from "../../../model/reviewModel.js";

export default async function topReviews (req, res) {
    try {
      const  bId  = req.query.id
      const range=req.query.range
      //use & operators and asending order for likes to select most likes reviews
      const bookReviews = await reviewModel
        .find({ reviewOfBook: bId })
        .sort({ likes: -1 })
        .limit(range)
      if (!bookReviews) {
        return res.status(404).json({
          msg: 'No reviews for this book'
        })
      }
      return res.json({
        msg: 'reviews fetched successfully',
        bookReviews: bookReviews
      })
    } catch (error) {
      res.json({
        msg: 'internal server error',
        error: error.message
      })
    }
  }