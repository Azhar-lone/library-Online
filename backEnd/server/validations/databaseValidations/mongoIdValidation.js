import {check} from "express-validator"
const validateId=[
check("id")
.isMongoId().withMessage("invalid id")
]
export default validateId