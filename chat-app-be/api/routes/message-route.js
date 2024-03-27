const express = require('express');
const Message = require('../models/message-model'); // Adjust the path as necessary
const router = express.Router();

router.post('/messages', async (req, res) => {
  try {
    const { sender, content } = req.body;
    const newMessage = await Message.create({
      sender,
      content,
    });
    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error saving message to database:', error);
    res.status(500).send('Server error while saving message');
  }
});

module.exports = router;
