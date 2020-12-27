const Publication = require("../models/Publication")

module.exports = {

    addPublication: (req, res, next) => {
        new Publication(req.body).save().then((obj, err) => {
            if (err)
                res.send(err)
            else if (!obj)
                res.send(400)
            else {
                return res.send(obj)
            }
            next()
        })
    },

    getAllPublications: (req, res, next) => {
        Publication.find(req.params.id).then((err, publications) => {
            if (err)
                res.send(err)
            else if (!publications)
                res.send(404)
            else
                res.send(publications)
            next()
        })
    },

    getPublicationById: (req, res, next) => {
        Publication.findById(req.params.id).then((err, publications) => {
            if (err)
                res.send(err)
            else if (!publications)
                res.send(404)
            else
                res.send(publications)
            next()
        })
    },

    updatePublication: (req, res, next) => {
        Publication.findByIdAndUpdate({ _id: req.params.id }, {
            publication: req.body.publication,
        }, { new: true }).then((err, publication) => {
            if (err)
                res.send(err)
            else if (!publication)
                res.send(404)
            else
                res.send(publication)
            next()
        })
    },
    
    deletePublication: (req, res, next) => {
        Publication.deleteOne(req.params.id).then
            (() => {
                return res.json({ msg: "done!" })
            }).catch((err) => console.log(err))
    },

}
