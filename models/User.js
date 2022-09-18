const { Schema, model } = require('mongoose'); // this import the mongoose module | to use the Schema | create a model
const Thought = require('./Thought');
const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; // this regex pattern compatible for JS & Perl | RFC 5322


//const validateEmail = (email) => {
//  const regex 
//  return regex.test(email); // test(method) to match the string
//};

// Schema to create a User model (ref: mini-proj)
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true, // this will remove whitespace from start .. end only
      dropDups: true, // means MongoDB will "drop" any queries which try to create a record with a schema value that already exists in the database. (ref: stackoverflow)
      minLength: 3,
    },
    email: {
      types: String,
      validate: {
        validator: function (email) {
          return regex.test(email);
        },
        message: "Please fill a valid email address"
      },
      match: [/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, "Please fill a valid email address"],
      required: [true, "Email address is required"],
      unique: true,
      lowercase: true,
      dropDups: true,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId, // array of Id     referencing to User (model)
        ref: Thought, // model name
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId, // array of Id   referencing to User (model)
        ref: 'User', // model name
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// Virtual property to call the friendCount and retrieves the length of the friends array (getter)
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Initialise the User model
const User = model('User', userSchema);

// for testing purposes
// const user = new User ({
//   username: "  mdnd  ",
//   email: "test",
//   thoughts: [],
//   friends: [],
// });
// console.log(user);
// user.save();

module.exports = User;