const Dream = require('../models/dream');

module.exports = {
  create
};

function create(req, res) {
  Dream.findById(req.params.id, function (err, dream) {
    if (!req.user.allCastMembers.includes(req.body.castMember)) {
      req.user.allCastMembers.push(req.body.castMember);
      req.user.save(function (err) {
        dream.cast.push(req.body);

        dream.save(function (err) {
          // console.log("saved dream after adding cast to user");
          // console.log("User object " + req.user);
          res.redirect(`/dreams/${dream._id}`);
        });
      });
    } else {
      dream.cast.push(req.body);
      dream.save(function (err) {
        // console.log("saved dream without adding cast to user");
        res.redirect(`/dreams/${dream._id}`);
      });
    }
  });
}