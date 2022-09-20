const connection = require('../config/connection');
const { User, Thought } = require('../models');
const {
  seedUsers,
  seedReactions,
  seedThoughts,
} = require('./data');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Drop the existing collections
  await User.deleteMany({});
  await Thought.deleteMany({});

  
  // Wait for the users to be inserted into the database
  await User.collection.insertMany(seedUsers);
  await Thought.collection.insertMany(seedReactions, seedThoughts);

  console.timeEnd('seeding complete 🌱');
  connection.close();

});