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
      .delete(deleteThought)
      .post(addThoughtReaction)
      .delete(removeThoughtReaction)

// /api/thoughts/:thoughtId/reactions


module.exports = router;