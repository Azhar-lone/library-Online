//Importing dependencies
import express from "express";

//Importing middlewares
import { AdminAuthorized, UserAuth, validationError } from "../middlewares/auth.js";

//Importing Controllers
import {
    // For All
    getAllBooks,
    featuredBook,
    getBook,
    usersBooks,
getRelatedBooks,
    // Autherized Users Only
    downloadBook,
    followingsBooks,
    likeBook,
    uploadBook,
    uploadBook_Multer,
    // Owners Only
    deleteBook,
    updateBook,
    // Admins Only
} from "../controllers/book/bookExports.js";

// Importing Validations
import {
    // database Validations
    validateId,

    // book validations
    validateGetAllBooks,
    validateUploadBook

} from "../validations/exportValidations.js"
// Initializing Router
const bookRouter = express.Router();
// first perform validation then run controller functions
// Visitors can see book =ForAll
bookRouter
    .get("/getbook/:id",
        validateId,
        validationError,
        getBook)
    .get("/getallbooks",
        validateGetAllBooks,
        validationError,
        getAllBooks)
    .get("/getusersbooks",
        validateGetAllBooks,
        validateId,
        validationError,
        usersBooks)
    .get("/featured",
        featuredBook)
    .get("/following",
        validateGetAllBooks,
        validationError,
        followingsBooks)
.get("/related",
    validateId,
     validationError,
     getRelatedBooks

)
// Users Only
bookRouter.use(UserAuth);
bookRouter
    .post("/upload",
        validateUploadBook,
        validationError,
        uploadBook_Multer.single("pdf")
        , uploadBook)
    .get("/download/:id"
        , validateId,
        validationError,
        downloadBook)
    .patch("/like",
        validateId,
        validationError,
        likeBook)
    // Owners Only
    .delete("/delete",
        validateId,
        validationError,
        deleteBook)
    .put("/update",
        validateId,
        validationError,
        updateBook)

//Admins Only
bookRouter.use(AdminAuthorized);

export default bookRouter;
