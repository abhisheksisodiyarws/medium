/** */
jwt = require('jsonwebtoken');
util = require('../utils');


const User = require('./../models/User')
const Article = require('../models/Story')

module.exports = {

    login: (req, res, next) => {
        if (!req.body.username || !req.body.password) {
            return res.status(400).send("You must send the username and the password");
        }
        User.find({ 'username': req.body.username.toString() }).then((user, err) => {
            if (err)
                res.send(err)
            else if (user.length === 0)
                return res.status(400).send("User not found");
            else if (user[0].password !== req.body.password)
                return res.status(400).send("The username or password don't match");
            else
                res.send({
                    access_token: util.createAccessToken(user[0])
                })
            next()
        });

    },
    addUser: (req, res, next) => {

        User.find({ 'username': req.body.username.toString() }).then((user, err) => {
            if (user.length === 0)
                new User(req.body).save((err, newUser) => {
                    if (err)
                        res.send(err)
                    else if (!newUser)
                        res.send(400)
                    else
                        res.send(newUser)
                    next()
                });
            else res.status(409).send('Username already exist')
        })

    },
    getUser: (req, res, next) => {
        User.findById(req.params.id).then
        /*populate('following').exec*/((err, user) => {
            if (err)
                res.send(err)
            else if (!user)
                res.send(404)
            else
                res.send(user)
            next()
        })
    },
    /**
     * user_to_follow_id, user_id
     */
    followUser: (req, res, next) => {
        User.findById(req.body.id).then((user) => {
            user.follow(req.body.user_id, 'following').then(() => {
                User.findById(req.body.user_id).then((user) => {
                    user.follow(req.body.id, 'follower').then(() => {
                        return res.json({ msg: "followed" })
                    })
                })
            })
        }).catch(next)
    },
    unfollowUser: (req, res, next) => {
        User.findById(req.body.id).then((user) => {
            user.unfollow(req.body.user_id, 'following').then(() => {
                User.findById(req.body.user_id).then((user) => {
                    user.unfollow(req.body.id, 'follower').then(() => {
                        return res.json({ msg: "unfollowed" })
                    })
                })
            })
        }).catch(next)
    },
    getUserProfile: (req, res, next) => {
        User.findById( req.params.id, { 'password': 0 }).then
            ((_user) => {
                return Article.find({ 'author': req.params.id }).then((_articles) => {
                    return res.json({ user: _user, articles: _articles })
                })
            }).catch((err) => console.log(err))
    },

    deleteUser: (req, res, next) => {
        User.deleteOne(req.params.id).then
            (() => {
                return res.json({ msg: "done!" })
            }).catch((err) => console.log(err))
    },

    followTopic: (req, res, next) => {
        User.findById(req.body.id).then((user) => {
            user.followTopic(req.body.topicId).then(() => {
                return res.json({msg : 'followed'})
            })
        })
    },

    unfollowTopic: (req, res, next) => {
        User.findById(req.body.id).then((user) => {
            user.unfollowTopic(req.body.topicId).then(() => {
                return res.json({msg : 'unfollowed'})
            })
        })
    },

    
    /**
     * article_id
     */
    updateUser: (req, res, next) => {
        User.findByIdAndUpdate(req.body.id, {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            password: req.body.password,
        }, { new: true }).then((err, article) => {
            if (err)
                res.send(err)
            else if (!article)
                res.send(404)
            else
                res.send(article)
            next()
        })
    },
}

