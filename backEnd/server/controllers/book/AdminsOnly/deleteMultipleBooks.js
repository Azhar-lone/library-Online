import bookModel from "../../../model/bookModel.js"

export default function deleteMultipleBooks(req, res) {
    try {
        let booksIds = req.body.ids
        let deletedBooks = []
        let failedToDelete = []

        booksIds.forEach(bookId => {
            let book = bookModel
                .findByIdAndDelete(userId)
                .select("_id")
            if (book) {
                deletedBooks.push(bookId)
            }
            else {
                failedToDelete.push(bookId)
            }
        });

        return res.status(200).json({
            msg: "Done!!",
            deleted: deletedBooks,
            failed: failedToDelete
        })

    } catch (error) {
        res.status(500).json({
            msg: "internal server error",

        })

    }

}