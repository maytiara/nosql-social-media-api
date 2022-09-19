const { connect, connection } = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
// Throwing an error using promise wrapper

// For future reference: Add MONGODB_URI to connect // Atlas (same dotenv guide)
connect('mongodb://localhost/socialMedia_Module', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Database successfully connected');
}).catch((err) => {
  console.log('Something went wrong', err);
});

// Export connection
module.exports = connection;