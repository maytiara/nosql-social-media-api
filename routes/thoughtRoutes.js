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
      .get(getThoughts)
      .get(getSingleThought)
      .post(addThought)
      .put(updateThought)
      .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
      .post(addThoughtReaction)
      .delete(removeThoughtReaction);

module.exports = router;