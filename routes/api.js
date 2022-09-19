const router = require('express').Router();

router.get('/users', (req,res) => {

  // Grab all the users > and populate thought(fieldname) & friend(fieldname) data
  User.find({})
  .populate('thoughts') //fieldname
  .populate('friends') //fieldname
  .then((users) => {
    res.json(users);
  })
})


module.exports = router;