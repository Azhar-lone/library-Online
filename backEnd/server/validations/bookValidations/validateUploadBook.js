import { check } from "express-validator"
const validateUploadBook = [
    // bookName
    check("bookName")
        .exists().withMessage("bookName is required")
        .isString().withMessage("bookName expected string")
        .isLength({ max: 30 }).withMessage("too long bookName")
        .escape().trim(),
    // bookAuthor
    check("bookAuthor")
        .exists().withMessage("bookAuthor is required")
        .isString().withMessage("bookAuthor, expected string")
        .isLength({ max: 30 }).withMessage("too long Author Name")
        .escape().trim(),
    // bookDiscription
    check("bookDiscription")
        .exists().withMessage("discription is required")
        .isString().withMessage("discription, expected string")
        .isLength({ min: 50, max: 2000 }).withMessage("discription should be atleast 50 charactors and maximam 1000 charactors long")
        .escape(),
    // bookCategory
    check("bookCategory")
        .exists().withMessage("book category is required")
        .isString().withMessage("expected string")
        .isLength({ max: 30 }).withMessage("should'nt be more than 30 charactors")
        .escape(),

    // publishedOn
    check("publishedOn")
        .exists().withMessage("published date expected")
        .isDate().withMessage("date expected")
        .escape()

]
export default validateUploadBook
// bookName, bookAuthor, bookDiscription, bookCategory, publishedOn