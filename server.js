const db = require('./config/connection'); // MongoDB connection
const express = require('express'); // express.js
//const routes = require('./routes'); // API endpoints

const app = express();
const PORT = 3001;

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to Parse URL data from any form

// This connects to different api endpoints > routes folder
//app.use(routes);

// Server setup
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API Server listening on ${PORT} 🚀`);
  });
});
