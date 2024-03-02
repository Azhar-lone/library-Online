// Importing models
import reviewModel from "../../../../model/reviewModel.js";

export default function updateReview(req, res) {
  const review = req.body.review
  const rId = req.body.id
  reviewModel.findById(rId).then(Review => {
    if (Review.reviewBy !== currentUserId)
      return res.json({
        msg: "you can't perform this operation sorry!"
      })
    Review.review = review
    Review.save()
    res.json({
      msg: 'review updated successfully'
    })
  })
}