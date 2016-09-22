var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var userModel = require('../models/user').user;
mongoose.connect('mongodb://localhost/mongodbaduq');

router.get('/', function(req, res, next) {
    var deviceAgent = req.headers['user-agent'].toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad|android|midp|ucweb|mobile)/);
    if (agentID) {
        res.redirect('phone/index');
    } else {
        res.redirect('pc/index');
    }
});

router.get('/phone/index', function(req, res, next) {
    res.render('phone/index.html');
});

router.get('/pc/index', function(req, res, next) {
    res.render('pc/index.html');
});

router.get('/pc/about-me', function(req, res, next) {
    res.render('pc/about-me.html');
});

router.get('/pc/about-view', function(req, res, next) {
    res.render('pc/about-view.html');
});

router.get('/add', function(req, res, next) {
    res.render('add.html', { title: 'add' });
});

router.post('/add', function(req, res) {
    console.log('create user excute!');
    var user = new userModel({
        uid: req.body.uid,
        title: req.body.title,
        content: req.body.content
    });
    user.save(function(err, docs) {
        console.log(docs);
        res.redirect('/');
    });
});

router.get('/delById', function(req, res, next) {
    var id = req.query.id;
    console.log('id=' + id);
    if (id && '' != id) {
        console.log('delete id:' + id);
        userModel.findByIdAndRemove(id, function(err, docs) {
            console.log('docs:' + docs);
            res.redirect('/');
        });
    };
});

router.get('/modify', function(req, res, next) {
    var id = req.query.id;
    console.log('id = ' + id);

    if (id && '' != id) {
        console.log('----delete id = ' + id);
        userModel.findById(id, function(err, docs) {
            console.log('-------findById()------' + docs);
            res.render('modify.html', { title: 'modify', user: docs });
        });
    };
});

router.post('/modify', function(req, res) {
    console.log('modify excute');
    var user = {
        uid: req.body.uid,
        title: req.body.title,
        content: req.body.content
    };
    var id = req.body.id;
    if (id && '' != id) {
        console.log('update id:id , ' + user);
        userModel.findByIdAndUpdate(id, user, function(err, docs) {
            console.log('update ' + docs);
            res.redirect('/');
        });
    }
});
module.exports = router;
