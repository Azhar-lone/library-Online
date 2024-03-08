// importing dependencies 

// importing models
import userModel from "../../../model/userModel";
import bookModel from "../../../model/bookModel";

export default async function searchFromAll(req,res) {
    try {
        const search=req.query.query
// const users=await userModel.find()
// const books=await bookModel.find()

res.status(200).json({
    msg:"success",
    users:users,
    books:books
})


    } catch (error) {
        res.status(500).json({
            msg:"internal server error",
            error:error//develepment only
        })
    }
}