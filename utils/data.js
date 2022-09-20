const seedUsers = [
  {
    username: 'Aaran',
    email: 'first@email.com'
  },
  {
    username: 'Gillian',
    email: 'second@email.com'
  },
  {
    username: 'Zubair',
    email: 'third@email.com'
  },
  {
    username: 'Tamar',
    email: 'fourth@email.com'
  },
  {
    username: 'AParker',
    email: 'fifth@email.com'
  },
];

const seedReactions = [
  {
    reactionBody: 'Cool! There are many variations'
  },
  {
    reactionBody: 'Awesome! is simply dummy text'
  },
  {
    reactionBody: 'Great! Contrary to popular belief'
  },
  {
    reactionBody: 'Interesting! Various versions have evolved'
  },
  {
    reactionBody: 'Unbelievable! combined with a handful of model sentence structures'
  },
];

const seedThoughts = [
  {
    thoughtText: 'Lorem Ipsum is not simply random text'
  },
  {
    thoughtText: 'Content here, content here'
  },
  {
    thoughtText: 'Scrambled it to make a type specimen book'
  },
  {
    thoughtText: 'You are going to use a passage of Lorem Ipsum'
  },
  {
    thoughtText: 'Going through the cites of the word'
  },
]

// Export the functions for use in seed.js
module.exports = {
  seedUsers,
  seedReactions,
  seedThoughts,
};