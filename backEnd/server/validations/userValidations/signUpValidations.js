import { body } from "express-validator"

const allowedDomains = [
    'test.com',
    'gmail.com',
    'hotmail.com',
    'outlook.com',
    'yahoo.com',
    'icloud.com',
    'protonmail.com',
]



const signUpValidation = [

    // email
    body("email")
        .exists().withMessage("Email is required")
        .isEmail().withMessage("not a valid email"),
    // .isWhitelisted(allowedDomains).withMessage("not allowed domain"),
    // password
    body("password")
        .exists().withMessage("password is required")
        .trim()
        .isStrongPassword().withMessage("not A strong password")
        // .isLength({ max: 16 }).withMessage("not a valid length")
        .escape(),

    // confirm passowrd
    body("confirmPassword")
        .exists().withMessage("confirm password is required")
        .trim()
        // .isLength({ max: 16 }).withMessage("not a valid length")
        .escape(),
    // name
    body("name")
        .exists().withMessage("name is required")
        .isString().withMessage("not a valid string")
        .isLength({ max: 20 }).withMessage("not a valid length")
        .escape(),

    // DOB
    body("DOB")
        .exists().withMessage("DOB is required")
        .escape(),

    // .isDate().withMessage("not a valid date")
]
export default signUpValidation
