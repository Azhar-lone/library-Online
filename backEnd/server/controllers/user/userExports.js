// For All
import signUp from "./ForAll/signUp.js"
import login from "./ForAll/login.js"
import userInfo from "./ForAll/userInfo.js"

// Autherized Users Only
import logout from "./AutherizedUsers/logout.js"
import follow from "./AutherizedUsers/follow.js"
import uploadProfile from "./AutherizedUsers/uploadProfile.js"

// Owners Only
import deleteUser from "./AutherizedUsers/OwnersOnly/deleteUser.js"
import updateUser from "./AutherizedUsers/OwnersOnly/updateUser.js"

// Admins Only
import allUsersInfo from "./AdminsOnly/allUsersInfo.js"
import deleteMultipleUsers from "./AdminsOnly/deleteMultipleUsers.js"

export {
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
}