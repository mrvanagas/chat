const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/collections', async (req, res) => {
  try {
    // Access the native MongoDB connection from Mongoose
    const db = mongoose.connection.db;
    
    db.listCollections().toArray((err, collections) => {
      if (err) {
        console.error('Failed to retrieve collections:', err); // Corrected variable name
        return res.status(500).send('Server Error');
      }
      const collectionNames = collections.map(c => c.name);
      res.json(collectionNames); // Correctly placed inside the callback
    });
    
  } catch (error) {
    console.error('Failed to retrieve collections:', error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
