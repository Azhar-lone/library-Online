import { query } from "express-validator"

const queryValidations = [
    query("query")
        .isString().withMessage("query must be string")
        .isLength({ min: 3, max: 30 }).withMessage("not a valid length of query")
        .escape(),
    query("limit")
        .isInt({ gt: 0 }).withMessage("limit:expected integer")
    ,
    query("page")
        .isInt({ gt: 0 }).withMessage("page expected Integer")

]

export default queryValidations
