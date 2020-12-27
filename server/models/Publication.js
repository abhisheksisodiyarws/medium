const mongoose = require('mongoose')

let PublicationSchema = new mongoose.Schema(
    {
        publication: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        // articles: [
        //     {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: 'Article'
        //     }
        // ]
    }
)

module.exports = mongoose.model('Publication', PublicationSchema)