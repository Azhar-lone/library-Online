import { check } from "express-validator"
const userInfoValidation = [
    // username
    check("username")
        .isSlug().withMessage("unexpected user name")
    //no need for sanitization   
]
export default userInfoValidation