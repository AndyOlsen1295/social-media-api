const { Schema, model } = require('mongoose');
const reactionSchema = require('./reactions');

const thoughtSchema = new Schema(
{
  thoughtText: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String,
    required: true
  },
  reactions: [{
    reactionBody: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
}
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought