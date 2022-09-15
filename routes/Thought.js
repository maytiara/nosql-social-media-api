const { Schema, model } = require('mongoose'); // this import the mongoose module | to use the Schema | create a model

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
    thoughts: {
      type: Schema.Types.ObjectId, // array of Id referencing to Thought (model)
      ref: 'Thought', // model name
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

module.exports = User;