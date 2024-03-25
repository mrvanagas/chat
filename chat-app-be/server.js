const express = require('express');
require('dotenv').config();
const app = express();
const http = require('http');
const server = http.createServer(app);
const { setupWebSocket } = require('./services/socket')
const connectDB = require('./config/db')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

connectDB(); //Connect to DB
setupWebSocket(server); // Initialize WebSocket

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
