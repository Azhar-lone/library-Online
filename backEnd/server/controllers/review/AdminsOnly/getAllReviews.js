// Importing models
import reviewModel from "../../../model/reviewModel.js";

 export default function getAllReviews (req, res) {
    reviewModel
      .find()
      .then(reviews => {
        res.status.json({
          msg:"reviews retreived successfully",
          reviews: reviews
        })
      })
      .catch(err => {
        res.status(500).json({
          msg: 'error while fetching reviews',
          error:err
        })
      })
  }
  