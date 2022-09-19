const { Schema, model, Types } = require('mongoose'); // this import the mongoose module | to use the // Schema | create a model

// reactionSchema, as a subdocument in the 'Thought' (model)
const reactionSchema = new Schema (
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(), // Default value is set to a new ObjectId
    },
    reactionBody: {
      type: String,
      required: true, // must fill the field
      minLength: 1,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    _id : false, //to stop mongoose to create an _id for the subdocument
  },
);

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
    },
    reactions: [reactionSchema], //replies, array of nested docs
  },
  {
    timestamps: true,
    toJSON: {
      getters: true, // getter method to format the timestamp on query
      virtuals: true
    },
  },
);

// Virtual property to call the reactionCount and retrieves the length of the reactions array (getter)
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;