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
      .get(getThoughts)
      .post(addThought);

// /api/thoughts/:thoughtsId
router.route('/:thoughtsId')
      .get(getSingleThought)
      .put(updateThought)
      .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/thoughts/:thoughtId/reactions/:reactionsId')
      .get(getReactions)
//      .post(addThoughtReaction)
//      .delete(removeThoughtReaction);

module.exports = router;