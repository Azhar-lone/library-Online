import { check } from "express-validator"

const loginValidation=[
check("email")
.exists().withMessage("Email is required")
    .isEmail().withMessage("not a valid email"),
check("password")
.exists().withMessage("Email is required")
.trim()
.isStrongPassword().withMessage("not correct password")
.escape()
]
export default loginValidation
