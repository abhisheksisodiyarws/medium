/** */
const Article = require('./../models/Story')
const express = require("express");
jwtT = require('express-jwt')
config = require('../config');
module.exports = {
    addArticle: (req, res, next) => {

        new Article(req.body).save((err, article) => {
            if (err)
                res.send(err)
            else if (!article)
                res.send(400)
            else {
                return article.addAuthor(req.body.author_id).then((_article) => {
                    return res.send(_article)
                })
            }
            next()
        })

    },
    getAll: (req, res, next) => {
        Article.find(req.params.id)
            .populate('author').exec((err, article) => {
                if (err)
                    res.send(err)
                else if (!article)
                    res.send(404)
                else
                    res.send(article)
                next()
            })
    },

    /**
     * article_id
     */
    getArticle: (req, res, next) => {
        Article.findById(req.params.id)
            .populate('author').exec((err, article) => {
                if (err)
                    res.send(err)
                else if (!article)
                    res.send(404)
                else
                    res.send(article)
                next()
            })
    },

    /**
     * article_id
     */
    getArticleByTopic: (req, res, next) => {
        Article.find({ "topics": { "$in": req.params.id } })
            .populate('author').exec((err, article) => {
                if (err)
                    res.send(err)
                else if (!article)
                    res.send(404)
                else
                    res.send(article)
                next()
            })
    },

    /**
     * article_id
     */
    getArticleByPublication: (req, res, next) => {
        Article.find({ "publication": req.params.id })
            .populate('author').exec((err, article) => {
                if (err)
                    res.send(err)
                else if (!article)
                    res.send(404)
                else
                    res.send(article)
                next()
            })
    },

    /**
     * article_id
     */
    updateArticle: (req, res, next) => {
        Article.findByIdAndUpdate({ _id: req.params.id }, {
            title: req.body.title,
            description: req.body.description,
            topics: req.body.topics
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

    deleteArticle: (req, res, next) => {
        Article.deleteOne(req.params.id).then
            (() => {
                return res.json({ msg: "done!" })
            }).catch((err) => console.log(err))
    }
}

