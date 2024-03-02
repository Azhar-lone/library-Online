// Importing models
import reviewModel from "../../../model/reviewModel.js";

export default function likeReview (req, res) {
    let  rId  = req.body.id
    reviewModel
      .findById(rId)
      .then(review => {
        if (!review.likedBy.contains(req.currentUserId)) {
          review.likes += 1
          review.likedBy.push(req.currentUserId)
          // review.isLiked=true
          review.save()
          return res.json({
            msg: 'added like successfully'
          })
        }
        review.likes -= 1
        //use remove instead of pop
        review.likedBy.pop(req.currentUserId)
        // review.isLiked=false
        review.save()
        return res.json({
          msg: 'removed like successfully'
        })
      })
      .catch(err => {
        return res.json({
          msg: 'error while updating likes',
          error: err.message
        })
      })
  }