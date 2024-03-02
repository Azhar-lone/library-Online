import userModel from '../../../../model/userModel.js'
//problems in this function
export default function updateUser(req, res) {
  let { email, password, name, DOB } = req.body
  userModel
    .findById(req.currentUserUd)
    .then(user => {
      user = { email, password, name, DOB }
      user.save()
      res.status(200).json({
        msg: 'user updated successfully',
      })
    })
    .catch(err => {
      return res.status(500).json({
        msg: 'error while updating userInfo',
        error: err.message,
      })
    })
}
