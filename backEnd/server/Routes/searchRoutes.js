// Importing dependencies
import express from 'express'

// Importing controllers
import {
    // For All
    searchFromAll,
    searchFromBooks,
    searchFromUsers,
    // Autherized Users Only

    // Owners Only

    // Admins Only
} from '../controllers/search/searchExports.js'

//Importing Middlewares 
import { validationError } from '../middlewares/auth.js'

// Importing Validations
import {
    queryValidations
} from "../validations/exportValidations.js"

// Initializing Router in Strict Mode
const searchRouter = express.Router({ strict: true })

// Public routes=For All
searchRouter
    .get("/", queryValidations, validationError, searchFromAll)
    .get("/books/", queryValidations, validationError, searchFromBooks)
    .get("/users/", queryValidations, validationError, searchFromUsers)
// Routes requiring user authentication

// Autherized Users Only


// Owners Only

// Routes accessible only to admins

export default searchRouter
