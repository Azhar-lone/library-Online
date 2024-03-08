import { check } from "express-validator";


const addReviewValidation = [
    // review
    check("review")
        .exists().withMessage("review is required")
        .isString().withMessage("review ,expected string")
        .isLength({ min: 10, max: 300 }).withMessage("review should be ateast 10 or maximam 300 charactors long")
        .escape(),
    // ratings
    check("ratings")
        .exists().withMessage("rating is required")
        .isInt({ min: 1, max: 5 }).withMessage("rating expected integer between 1 and 5")
        .escape(),
    // review of book
    check("reviewOfBook")
        .exists().withMessage("review of book is required")
        .isMongoId().withMessage("not a valid id")
        .escape()

]

export default addReviewValidation
// review, ratings, reviewOfBook