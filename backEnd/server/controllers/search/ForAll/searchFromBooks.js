// importing dependencies 

// importing models
import bookModel from "../../../model/bookModel";

export default async function searchFromUsers(req,res) {
    try {
        const search=req.query.query
        // search here
// const books=await bookModel.find()

res.status(200).json({
    msg:"success",
    books:books
})


    } catch (error) {
        res.status(500).json({
            msg:"internal server error",
            error:error//develepment only
        })
    }
}