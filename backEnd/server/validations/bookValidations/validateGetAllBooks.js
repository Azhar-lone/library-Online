import { check } from "express-validator"
const validateGetAllBooks = [
    check("page")
        .isInt({ gt: 0 })
        .withMessage("invalid page number"),
    check("limit")
        .isInt({ gt: 0 })
        .withMessage("invalid limit")
]
export default validateGetAllBooks