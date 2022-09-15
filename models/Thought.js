const { Schema, model } = require('mongoose'); // this import the mongoose module | to use the Schema | create a model

// Schema to create a User model (ref: mini-proj)
const thoughtSchema = new Schema(
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', userSchema);

module.exports = Thought;