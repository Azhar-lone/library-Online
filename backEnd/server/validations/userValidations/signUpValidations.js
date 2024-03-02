import { check } from "express-validator"

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
    check("email")
        .exists().withMessage("Email is required")
        .isEmail().withMessage("not a valid email")
        .isLength({ max: 30 }).withMessage("not a valid length"),
        // .isWhitelisted(allowedDomains).withMessage("not allowed domain"),
    // password
    check("password")
        .exists().withMessage("password is required")
        .isString().withMessage("not a valid string")
        .isStrongPassword().withMessage("not A strong password")
        .isLength({ max: 16 }).withMessage("not a valid length"),

    // confirm passowrd
    check("confirmPassword")
        .exists().withMessage("confirm password is required")
        .isLength({ max: 16 }).withMessage("not a valid length")
        .isString().withMessage("not a valid string"),

    // name
    check("name")
        .exists().withMessage("name is required")
        .isString().withMessage("not a valid string")
        .isLength({ max: 16 }).withMessage("not a valid length"),
    // DOB
    check("DOB")
        .exists().withMessage("DOB is required")
        // .isDate().withMessage("not a valid date")
]
export default signUpValidation