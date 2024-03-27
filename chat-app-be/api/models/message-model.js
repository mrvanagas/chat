const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  room: { // Optional: remove or modify based on your requirements
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { collection: 'chat-data' });

module.exports = mongoose.model('Message', messageSchema, 'chat-data');
