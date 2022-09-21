const router = require('express').Router();
const userRoutes = require('./postRoutes');
const thoughtRoutes = require('./tagRoutes');

router.use('/api/users', userRoutes);
router.use('/api/thoughts', thoughtRoutes);

module.exports = router;