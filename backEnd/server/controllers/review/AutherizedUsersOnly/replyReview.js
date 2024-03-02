// Importing models
import replyModel from "../../../model/reviewModel.js";


export default async function replyReview(req, res) {
    try {
        const review = req.body.review
        const repliedTo = req.body.id
        const replyBy = req.currentUserId

        const reply = await replyModel.create({
            review,
            replyBy,
            repliedTo,
        })
        if (!reply) {
            return res.status(404).json({
                msg: 'error while replying'
            })
        }
        return res.status(200).json({
            msg: 'reply posted successfully',
            reply: reply
        })
    } catch (error) {
        res.json({
            msg: 'internal server error',
            error: error.message
        })
    }
}