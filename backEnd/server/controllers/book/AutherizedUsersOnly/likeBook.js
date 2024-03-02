import bookModel from "../../../model/bookModel.js";


export default function likeBook(req, res) {
  let { id } = req.body
  bookModel
    .findById(id)
    .then(book => {
      if (!book.likedBy.contains(req.currentUserId)) {
        book.likes += 1
        book.likedBy.push(currentUserId)
        book.save()
        return res.json({
          msg: 'liked added successfully',
          likes: book.likes
        })
      }
      book.likes -= 1
      // use remove instead of pop
      book.likedBy.pop(currentUserId)
      // book.isLiked = false
      book.save()
      return res.json({
        msg: 'liked removed successfully',
        likes: book.likes
      })
    })
    .catch(err => {
      return res.json({
        msg: 'error occured while liking review',
        error: err.message
      })
    })
}