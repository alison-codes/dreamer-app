const Dream = require('../models/dream');

module.exports = {
    new: newDream,
    index,
    create,
    show,
    delete: deleteDream,
    edit,
    update,
};

function newDream(req, res) {
    Dream.find(function (err, dreams) {
        res.render('dreams/new', {
            user: req.user,
            title: 'Welcome to Reverie',
            dream: req.body,
        });
    });
}


function index(req, res) {
    var str = req.user.name
    var firstName = str.substr(0, str.indexOf(' '));
    Dream.find({ user_id: req.user.id }, function (err, dreams) {
        res.render('dreams/', {
            user: req.user,
            title: 'Welcome to Reverie',
            name: firstName,
            dreams,
        });
    });
}

function create(req, res) {
    if (!req.body.hoursSlept) delete req.body.hoursSlept;
    if (!req.body.date) delete req.body.date;
    req.body.user_id = req.user.id;
    var dream = new Dream(req.body);
    var Sentiment = require('sentiment');
    var sentiment = new Sentiment();
    var result = sentiment.analyze(dream.description);
    dream.score = result.score;
    dream.keyWords = result.words;
    console.log(dream.keyWords);
    dream.save(function (err) {
        if (err) return res.render('/');
        res.redirect('/dreams');
    });
}


function show(req, res) {
    Dream.findById(req.params.id)
        .then(dream => {
            res.render('dreams/show', {
                dream,
                user: req.user,
            });
        }).catch(err => console.log(err));
}


function deleteDream(req, res) {
    Dream.findByIdAndDelete(req.params.id,
        function (err, deletedDream) {
            res.redirect('/dreams');
        });
}


function edit(req, res) {
    Dream.findById(req.params.id).exec(function (err, dream) {
        res.render('dreams/edit', { 
            dream, 
            user: req.user,
        });
    });
}

function update(req, res) {
    Dream.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, dream) {
        if (err) {
            console.log(err)
        }
        res.redirect(`/dreams`)
    });
}

