const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  addThought,
  updateThought,
  deleteThought,
  addThoughtReaction,
  removeThoughtReaction
} = require('../../controllers/thoughtController')

// /api/thoughts
router.route('/')
      .get('')

// /api/thoughts/:thoughtId/reactions


module.exports = router;