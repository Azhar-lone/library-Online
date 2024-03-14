// Importing dependencies
import express from 'express'

// Importing controllers
import {
    // For All
    getAboutUs,
    // Autherized Users Only

    // Owners Only

    // Admins Only
    editAboutUs
} from '../controllers/aboutUs/aboutUsExports.js'

//Importing Middlewares 
import { validationError, AdminAuthorized, UserAuth } from '../middlewares/auth.js'

// Importing Validations
import {
    validateAboutUs
} from "../validations/exportValidations.js"

// Initializing Router in Strict Mode
const aboutUsRouter = express.Router({ strict: true })

// Public routes=For All
aboutUsRouter
    .get("/", getAboutUs)

// Routes requiring user authentication

// Autherized Users Only
aboutUsRouter.use(UserAuth)

// Owners Only

// Routes accessible only to admins

aboutUsRouter
    .use(AdminAuthorized)
    .put("/edit", validateAboutUs, validationError, editAboutUs)

export default aboutUsRouter
