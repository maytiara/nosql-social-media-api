const db = require('./config/connection'); // MongoDB connection
const express = require('express'); // express.js
const routes = require('./routes/api'); // API endpoints

const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to Parse URL data from any form

// This connects to different api endpoints > routes folder
app.use('/api', routes);

// Server setup
db.once('open', () => { // 'open' event before listening to PORT
  app.listen(PORT, () => {
    console.log(`API Server listening on ${PORT} 🚀`);
  });
});

// for testing purposes
// const User = require('./models/User');
// 
// const user = new User ({
//   username: "  mdnd  ",
//   email: "test",
//   thoughts: [],
//   friends: [],
// });
// user.save().then(console.log);

