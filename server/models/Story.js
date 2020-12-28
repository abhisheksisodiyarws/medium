const mongoose = require('mongoose')

let ArticleSchema = new mongoose.Schema(
    {
        text: String,
        title: String,
        description: String,
        feature_img: String,
        topics: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Topic'                
            }
        ],
        publication:
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Publication'                
            },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }
);
ArticleSchema.methods.clap = function() {
    this.claps++
    return this.save()
}
ArticleSchema.methods.comment = function(c) {
    this.comments.push(c)
    return this.save()
}
ArticleSchema.methods.addAuthor = function (author_id) {
    this.author = author_id
    return this.save()
}
ArticleSchema.methods.getUserArticle = function (_id) {
    Article.find({'author': _id}).then((article) => {
        return article
    })
}
module.exports = mongoose.model('Article', ArticleSchema)