const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema

const UserSchema = new mongoose.Schema(
   {
      firstname: {
         type: String,
         required: [true, 'firstName is required'],
         trim: true,
         text: true

      },

      lastname: {
         type: String,
         required: [true, 'lastName is required'],
         trim: true,
         text: true,
      },

      username: {
         type: String,
         required: [true, 'userName is required'],
         trim: true,
         text: true,
         unique: true
      },

      email: {
         type: String,
         required: [true, 'email address is required'],
         unique: true,
         trim: true
      },

      password: {
         type: String,
         required: [true, 'password is required']
      },

      userPic: {
         type:String,
         default: ""
      },

      coverPic: {
         type: String,
         default: ""
      },

      gender: {
         type: String,
         required: [true, 'gender is required']
      },

      birthDay: {
         type: Number,
         required: true,
         trim: true
      },

      birthMonth: {
         type: Number,
         required: true,
         trim: true
      },

      birthYear: {
         type: Number,
         require: true,
         trim: true
      },

      verified: {
         type: Boolean,
         default: false
      },

      friends: {
         type: Array,
         default: [],
      },

      following: {
         type: Array,
         default: []
      },

      followers: {
         type: Array,
         default: []
      },

      requests: {
         type: Array,
         default: []
      },

      search: [
         {
            user: {
               type: ObjectId,
               ref: 'User'
            }
         }
      ],

      details: {
         bio: {
            type: String
         },

         otherName: {
            type: String
         },

         job: {
            type: String
         },

         workPlace: {
            type: String
         },

         highSchool: {
            type: String
         },

         collage: {
            type: String
         },

         curentCity: {
            type: String
         },

         homeTown: {
            type: String
         },

         relationship: {
            type: String,
            enum: ['single', 'in a relationship', 'married', 'Divorced']
         },

         instagram: {
            type: String
         }
      },

      savedPosts: [
         {
            post: {
               type: ObjectId,
               ref: 'Post'
            },

            savedAt: {
               type: Date,
               default: new Date()
            }
         }
      ]
   },

   {timestamps: true}
);

const User = mongoose.model("User", UserSchema);

module.exports = User;