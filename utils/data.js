const seedUsers = [
  {
    username: 'Aaran',
    email: 'first@email.com',
    friends: []
  },
  {
    username: 'Gillian',
    email: 'second@email.com',
    friends: []
  },
  {
    username: 'Zubair',
    email: 'third@email.com',
    friends: []
  },
  {
    username: 'Tamar',
    email: 'fourth@email.com',
    friends: []
  },
  {
    username: 'AParker',
    email: 'fifth@email.com',
    friends: []
  },
];

const seedThoughts = [
  {
    username: 'AParker',
    thoughtText: 'Lorem Ipsum is not simply random text',
    reactions: [
      {
        username: 'AParker',
        reactionBody: 'Cool! There are many variations'
      },
    ]
  },
  {
    username: 'Aaran',
    thoughtText: 'Content here, content here',
    reactions: [
      {
        username: 'Aaran',
        reactionBody: 'Awesome! is simply dummy text'
      },
    ]
  },
  {
    username: 'Zubair',
    thoughtText: 'Scrambled it to make a type specimen book',
    reactions: [
      {
        username: 'Aaran',
        reactionBody: 'Great! Contrary to popular belief'
      },
    ]
  },
  {
    username: 'Zubair',
    thoughtText: 'You are going to use a passage of Lorem Ipsum',
    reactions: [
      {
        username: 'Aaran',
        reactionBody: 'Interesting! Various versions have evolved'
      },
    ]
  },
  {
    username: 'Zubair',
    thoughtText: 'Going through the cites of the word',
    reactions: [
      {
        username: 'Aaran',
        reactionBody: 'Unbelievable! combined with a handful of model sentence structures'
      },
    ]
  },
]

// Export the functions for use in seed.js
module.exports = {
  seedUsers,
  seedThoughts,
};