import reviewModel from "../../../model/reviewModel.js"


export default function allBookReviews(req, res) {
  let bId = req.query.id
  reviewModel
    .find({ reviewOfBook: bId })
    .then(reviews => {
      return res.json({
        msg: 'reviews fetched successfully',
        reviews: reviews
      })
    })
    .catch(err => {
      res.json({
        msg: 'error while fetching reviews of book',
        error: err.message
      })
    })
}
