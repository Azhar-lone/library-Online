import userModel from "../../../model/userModel.js";

export default async function uploadProfile(req, res) {
  try {
    let { image } = req.body

    let allowedImageTypes = {
      'image/png': 'png',
      'image/jpeg': 'jpeg',
      'image/jpg': 'jpg'
    }

    let user = await userModel.findById(req.currentUserId)

    let uploadF = upload(
      allowedImageTypes,
      `${user.userName}_${user._id}`,
      user.userName
    )

    uploadF.single(image)(req, res, async err => {
      console.log("file Object :", req.file)
      if (err) {
        return res.json({
          msg: 'error while uploading file',
          success: false,
          error: err
        })
      }
    })
    user.profilePicPath = req.file.path
    let savedUser = await user.save()
    res.status(200).json({
      msg: 'image uploaded successfully',
      success: true,
      user: savedUser
    })
  } catch (error) {
    res.status(500).json({
      msg: 'internal server error',
      success: false,
      error: error.message
    })
  }
}
