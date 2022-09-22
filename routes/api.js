const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// this will include friends
router.use('/api/users', userRoutes);

// this include reactions
router.use('/api/thoughts', thoughtRoutes);

module.exports = router;