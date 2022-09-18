require('dotenv').config();
const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
// Throwing an error using promise wrapper

// For future reference: Add MONGODB_URI to connect in Atlas (same dotenv guide)
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Database successfully connected');
}).catch((err) => {
  console.log('Something went wrong', err);
});

// Export connection
module.exports = mongoose.connection;