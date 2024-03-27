const express = require('express');
require('dotenv').config();
const app = express();
const http = require('http');
const server = http.createServer(app);
const { setupWebSocket } = require('./services/socket');
const connectDB = require('./config/db');
const collectionsRoutes = require('./api/routes/collectionsRoutes'); // Adjust path as necessary
const messageRoutes = require('./api/routes/message-route'); // Adjust path as necessary
const authRoutes = require('./api/routes/auth-routes');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', collectionsRoutes); // Mount the collections routes
app.use('/api', messageRoutes);
app.use('/api', authRoutes);

connectDB(); //Connect to DB
setupWebSocket(server); // Initialize WebSocket

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
