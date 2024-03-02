// Importing models
import reviewModel from "../../../../model/reviewModel.js";

export default function deleteReview(req, res) {
  let rId = req.body.id

  reviewModel
    .findById(rId)
    .then(review => {
      if (review.reviewBy !== currentUserId)
        return res.json({
          msg: "you can't perform this operation sorry!"
        })
      //delete review here
      review.delete()
      //cofirm first Need Testing here
      review.save()
      res.json({
        msg: 'review deleted successfully'
      })
    })
    .catch(err => {
      return res.json({
        msg: 'error while deleting review',
        error: err.message
      })
    })
}