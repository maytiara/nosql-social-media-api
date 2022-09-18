const { Schema, model } = require('mongoose'); // this import the mongoose module | to use the // Schema | create a model

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280, // must be between 1 and 280 characters
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
    toJSON: {
      getters: true, // getter method to format the timestamp on query
      virtuals: true
    },
  },
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;