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
  // Admins Only
  allUsersInfo,
  deleteMultipleUsers
} from '../controllers/user/userExports.js'

//Importing Middlewares 
import { AdminAuthorized, UserAuth, validationError } from '../middlewares/auth.js'

// Importing Validations
import { signUpValidation } from "../validations/exportValidations.js"

// Initializing Router in Strict Mode
const userRouter = express.Router({ strict: true })

// Public routes=For All
userRouter
  .get(":username", userInfo)
  .post('/login', login)
  .post('/signup', signUpValidation, validationError, signUp)
  .post('/logout', logout)

// Routes requiring user authentication
// Autherized Users Only
userRouter
  .use(UserAuth)
  .post('/upload/profilepic', uploadProfile)
  .post('/follow', follow)
  // Owners Only
  .delete("/delete", deleteUser)
  .put("/update", updateUser)

// Routes accessible only to admins
// userRouter.use(AdminAuthorized)
userRouter
  .use(AdminAuthorized)
  .delete('admin/deletemultiple', deleteMultipleUsers)
  .get('admin/allusers', allUsersInfo)

export default userRouter
