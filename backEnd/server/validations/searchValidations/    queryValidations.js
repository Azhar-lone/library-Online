import { query } from "express-validator"

const queryValidations = [
    query("query")
        .isString().withMessage("query must be string")
        .isLength({ min: 3, max: 30 })
        .escape()

]

export default queryValidations
