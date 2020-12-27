const Topic = require('./../models/Topic')

module.exports = {

    
    getAllTopics: (req, res, next) => {
        Topic.find(req.params.id).then((err, topics) => {
            if (err)
                res.send(err)
            else if (!topics)
                res.send(404)
            else
                res.send(topics)
            next()
        })
    },

    getTopicById: (req, res, next) => {
        Topic.findById(req.params.id).then((err, topics) => {
            if (err)
                res.send(err)
            else if (!topics)
                res.send(404)
            else
                res.send(topics)
            next()
        })
    },


    createTopic: (req, res, next) => {
        Topic(req.body).save(() => {
            res.send({ 'msg': 'Done' })
            next()
        })
    },

    updateTopic: (req, res, next) => {
        Topic.findByIdAndUpdate({ _id: req.params.id }, {
                topic: req.body.topic
        }, {new: true}).then((err, topic) => {
            if (err)
                res.send(err)
            else if (!topic)
                res.send(404)
            else
                res.send(topic)
            next()
        })
    },

    deleteTopic: (req, res, next) => {
        Topic.deleteOne(req.params.id).then
            (() => {
                return res.json({ msg: "done!" })
            }).catch((err) => console.log(err))
    },
}