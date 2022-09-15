const { Schema, model } = require('mongoose'); // this import the mongoose module | to use the Schema | create a model
const Thought = require('./Thought');
const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; // this regex pattern compatible for JS & Perl | RFC 5322

const validateEmail = function(email) {
  regex // using the global variable
  return regex.test(email); // test(method) to match the string
};


// Schema to create a User model (ref: mini-proj)
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true, // this will remove whitespace from start .. end only
      dropDups: true, // means MongoDB will "drop" any queries which try to create a record with a schema value that already exists in the database. (ref: stackoverflow)
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: 'Email address is required',
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [regex, 'Please fill a valid email address'],
    },
    thoughts: {
      type: Schema.Types.ObjectId, // array of Id referencing to Thought (model)
      ref: Thought, // model name
    },
    friends: {
      type: Schema.Types.ObjectId, // array of Id referencing to User (model)
      ref: 'User', // model name
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model('user', userSchema);

// for testing purposes
const user = new User ({
  username: "  mdnd  ",
  email: "testing",
  thoughts: [],
  friends: [],
});
console.log(user)

module.exports = User;