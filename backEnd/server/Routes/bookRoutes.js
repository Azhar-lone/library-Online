//Importing dependencies
import express from "express";

//Importing middlewares
import { AdminAuthorized, UserAuth } from "../middlewares/auth.js";

//Importing Controllers
import {
    // For All
    getAllBooks,
    featuredBook,
    getBook,
    usersBooks,
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

// Initializing Router
const bookRouter = express.Router();

// Visitors can see book =ForAll
bookRouter
    .get("/getbook/:id", getBook)
    .get("/getallbooks", getAllBooks)
    .get("/getusersbooks", usersBooks)
    .get("/featured", featuredBook)

// Users Only
bookRouter.use(UserAuth);
bookRouter
    .post("/upload", uploadBook_Multer.single("file"), uploadBook)
    .get("/download/:id", downloadBook)
    .patch("/like", likeBook)
    // Owners Only
    .delete("/delete", deleteBook)
    .put("/update", updateBook)

//Admins Only
bookRouter.use(AdminAuthorized);

export default bookRouter;
