import userModel from "../../../model/userModel.js"
export default async function allUsersInfo(req, res) {
  try {
    let users = await userModel.find()
    if (!users) {
      return res.status(404).json({
        msg: 'no Users found',
        success: false
      })
    }
    res.status(200).json({
      users: users,
      success: true
    })
  } catch (error) {
    res.status(500).json({
      msg: 'internal server error',
      success: false,
      error: error.message
    })
  }
}