const mongoose = require('mongoose')

let TopicSchema = new mongoose.Schema(
    {
        topic: String,
        // articles: [
        //     {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: 'Article'
        //     }
        // ]
    }
)

module.exports = mongoose.model('Topic', TopicSchema)