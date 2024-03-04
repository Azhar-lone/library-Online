import { check } from "express-validator"

const loginValidation=[
check("email")
    .isEmail().withMessage("not a valid email"),
check("password")
//   .isString().withMessage("invalid password")
  .isStrongPassword("not correct password")    

]
export default loginValidation