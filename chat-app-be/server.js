const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

const { MONGO_DB_USER, MONGO_DB_PASSWORD, PORT } = process.env;
//TODO: Refactor connection logic, add more variables to env variables
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('server is running');
});

const db = mongoose.connection;
mongoose
  .connect(
    `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@cluster0.7qajsgr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    {
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
  });
});

db.on('error', () => console.error('FAILED TO CONNECT TO DB'));
