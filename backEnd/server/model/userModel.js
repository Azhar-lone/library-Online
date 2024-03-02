import mongoose from 'mongoose'
import path from "path"

let userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: [true, 'email should be unique'],
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  name: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    unique: [true, 'this userName is already taken'],
    required: true
  },
  profilePicPath: {
    type: String,
    default: path.resolve('Backend/Files/static/profile.png')
  },
  bio: {
    type: String
  },
  DOB: {
    type: String
  },

  memberSince: {
    type: Date,
    default: Date.now()
  },
  livesIn: {
    type: String
  },
  from: {
    type: String
  },

  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'userModel',
      unique: true

    }
  ],

  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'userModel',
      unique: true
    }
  ],
  isSuspended: {
    type: Boolean,
    default: false,
    select: false
  }
  , isAdmin: {
    type: Boolean,
    select: false,
    default: false
  }
})

let userModel = mongoose.model('userModel', userSchema)

export default userModel
