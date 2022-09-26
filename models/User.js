const { Schema, model } = require('mongoose'); // this import the mongoose module | to use the Schema | create a model
const Thought = require('./Thought');
const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; // this regex pattern compatible for JS & Perl | RFC 5322

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
      trim: true, //required
      lowercase: true,
      unique: true,
      validate: { // Valid schema validator
        validator: function(v) {
            return regex.test(v);
        },
        message: "Please fill a valid email address"
      },
      required: [true, "Email address is required"] // required
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId, // array of Id     referencing to User (model)
        ref: Thought, // model name
      },
    ],
    friends: [ this ], // self referencing the parent _id
  },
  {
    toJSON: {
      virtuals: true,
      versionKey: false, // set to false to remove version key -__v:
    },
    id: false,
  },
);

// Virtual property to call the friendCount and retrieves the length of the friends array (getter)
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Initialise the User model
const User = model('user', userSchema);

module.exports = User;