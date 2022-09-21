const router = require('express').Router();
const userRoutes = require('./postRoutes');
const thoughtRoutes = require('./tagRoutes');

// this will include friends
router.use('/api/users', userRoutes);

// this include reactions
router.use('/api/thoughts', thoughtRoutes);

module.exports = router;