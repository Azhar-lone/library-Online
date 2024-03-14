// importing dependencies 

// importing models
import bookModel from "../../../model/bookModel.js";

export default async function searchFromUsers(req, res) {
    try {
        const search = req.query.query
        //default limit to 10 and page to 1
        const limit = req.query.limit||10 
        const pageNumber = req.query.page||1
        // search here
        // use or to search conditionally
        const books = await bookModel.find({
            '$or': [
                { bookName: { $regex: searchTerm, $options: 'i' } },
                { bookAuthor: { $regex: searchTerm, $options: 'i' } },
                { bookDiscription: { $regex: searchTerm, $options: 'i' } },
                { bookCategory: { $regex: searchTerm, $options: 'i' } },
            ]
        })
            .limit(limit)
            .skip((pageNumber - 1) * limit)

        res.status(200).json({
            msg: "success",
            books: books
        })


    } catch (error) {
        res.status(500).json({
            msg: "internal server error",
            error: error//develepment only
        })
    }
}
