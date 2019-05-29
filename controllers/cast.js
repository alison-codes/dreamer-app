const Dream = require('../models/dream');

module.exports = {
  create
};

function create(req, res) {
  Dream.findById(req.params.id, function(err, dream) {
    dream.cast.push(req.body);
    dream.save(function(err) {
      res.redirect(`/dreams/${dream._id}`);
    });
  });
}