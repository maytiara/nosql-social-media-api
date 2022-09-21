const connection = require('../config/connection');
const { User, Thought } = require('../models'); 
const {
  seedUsers,
  seedThoughts
} = require('./data');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Drop the existing collections
  await User.deleteMany({});
  await Thought.deleteMany({});

  
  // Wait for the users to be inserted into the database
  await User.insertMany(seedUsers);
  await Thought.insertMany(seedThoughts);

  console.log('seeding complete 🌱');
  connection.close();                           

});