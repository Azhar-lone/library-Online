// Importing dependencies
import express from 'express'

// Importing controllers
import {
  // For All
  signUp,
  login,
  userInfo,
  // Autherized Users Only
  logout,
  follow,
  uploadProfile,
  // Owners Only
  deleteUser,
  updateUser,
  getUsersCart,
  // Admins Only
  allUsersInfo,
  deleteMultipleUsers
} from '../controllers/user/userExports.js'

//Importing Middlewares 
import { AdminAuthorized, UserAuth, validationError } from '../middlewares/auth.js'

// Importing Validations
import {
  validateId,
  signUpValidation,
  userInfoValidation,
  loginValidation
} from "../validations/exportValidations.js"

// Initializing Router in Strict Mode
const userRouter = express.Router({ strict: true })

// Public routes=For All
userRouter
  .post('/signup', signUpValidation, validationError, signUp)
  .post('/login', loginValidation, validationError, login)
  .get(":username",
    userInfoValidation,
    validationError,
    userInfo)
// Routes requiring user authentication
// Autherized Users Only
userRouter
  .use(UserAuth)
  .post('/logout', logout)
  .post('/upload/profilepic', uploadProfile)
  .post('/follow',
    validateId,
    validationError,
    follow)
  // Owners Only
  .delete("/delete", deleteUser)
  .put("/update", updateUser)
  .get("/getcart", getUsersCart)
// Routes accessible only to admins
// userRouter.use(AdminAuthorized)
userRouter
  .use(AdminAuthorized)
  .delete('admin/deletemultiple', deleteMultipleUsers)
  .get('admin/allusers', allUsersInfo)

export default userRouter
