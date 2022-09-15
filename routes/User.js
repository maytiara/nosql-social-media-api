const { Schema, model } = require('mongoose'); // this import the mongoose module | to use the Schema | create a model
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
      type: Schema.Types.ObjectId, // array of Id referencing Thought (model)
      ref: 'Thought', // model name
    },
    endDate: {
      type: Date,
      // Sets a default value of 12 weeks from now
      default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
    },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Student',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Course = model('course', courseSchema);

module.exports = Course;