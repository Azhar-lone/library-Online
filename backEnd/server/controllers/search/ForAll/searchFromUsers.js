// importing dependencies 

// importing models
import userModel from "../../../model/userModel";

export default async function searchFromBooks(req,res) {
    try {
        const search=req.query.query
// const users=await userModel.find()

res.status(200).json({
    msg:"success",
    users:users,
})


    } catch (error) {
        res.status(500).json({
            msg:"internal server error",
            error:error//develepment only
        })
    }
}