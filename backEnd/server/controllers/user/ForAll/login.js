import bcrypt from 'bcrypt'
import userModel from '../../../model/userModel.js'
import { createToken } from '../../../middlewares/auth.js'

// STEP 2
// TODO: Cancel account deletion process scheduled on login
// and set suspended state to false

/**
 * Handles the login process.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export default async function login(req, res) {
  try {
    // Extract email and password from the request body
    const { email, password, ...unexpectedFields } = req.body
console.log("password: ",password)
    // Check for unexpected fields
    // if their is somthing unexpected then it is not what we need in the server
    if (Object.keys(unexpectedFields).length > 0) {
      return res.status(400).json({
        msg: "unexpected fields in the body"
      })
    }

    // Find user by email and select password and userName fields
    const user = await userModel.findOne({ email }).select('password userName')

    // If user is not found, return a 401 Unauthorized response
    if (!user) {
      return res.status(401).json({
        msg: 'User not found',
      })
    }

    // Compare the provided password with the hashed password in the database
    const isMatched = await bcrypt.compare(password, user.password)

    // If passwords don't match, return a 401 Unauthorized response
    if (!isMatched) {
      return res.status(401).json({
        msg: "Password didn't match",
      })
    }

    // If login is successful, create and send an authentication token
    const token = createToken(user._id.toString())

    // Return a 200 OK response with a success message and the user's name and Id
    return res
      .status(200)
      .cookie('login', token, {
        httpOnly: true,
        secure: true,
        sameOrigin: 'none'
      })
      .json({
        msg: 'Login successful',
        userName: user.userName
      })
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Login Error:', error)

    // Return a 500 Internal Server Error response with an error message
    return res.status(500).json({
      msg: 'Internal server error occurred during login',
      error: error.message
    })
  }
}



