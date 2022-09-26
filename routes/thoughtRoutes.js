const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  addThought,
  updateThought,
  deleteThought,
  getReactions,
  addThoughtReaction,
  removeThoughtReaction
} = require('../controllers/thoughtController');

// /api/thoughts
router.route('/')
      .get(getThoughts);

// /api/thoughts/:thoughtsId
router.route('/:thoughtsId')
      .get(getSingleThought)
      .post(addThought)
      .put(updateThought)
      .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/thoughts/:thoughtId/reactions')
      .get(getReactions)
//      .post(addThoughtReaction)
//      .delete(removeThoughtReaction);

module.exports = router;