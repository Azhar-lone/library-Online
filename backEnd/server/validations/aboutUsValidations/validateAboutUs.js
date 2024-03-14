import { check } from "express-validator"

const validateAboutUs = [

    // title
    check("title")
        .isString().withMessage(" title expected string")
        .isLength({ max: 30 }).withMessage("title should be less 31 charactors")
        .escape(),

    // Features
    check("features")
        .isArray().withMessage("features expected array")
        .escape(),

    // out Team
    check("ourTeam")
        .isArray().withMessage("ourTeam expected array")
        .escape(),

]
export default validateAboutUs