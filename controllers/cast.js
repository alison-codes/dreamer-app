const Dream = require('../models/dream');

module.exports = {
  create
};

function create(req, res) {

  Dream.findById(req.params.id, function(err, dream) {
    req.user.allCastMembers.push(req.body.castMember);
    dream.cast.push(req.body);
    dream.save(function(err) {
      console.log(req.user);
      res.redirect(`/dreams/${dream._id}`);
    });
  });
}