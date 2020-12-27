const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema(
    {
        username: String,
        firstname: String,
        lastname: String,
        password: String,
        topics: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Topic'                
            }
        ],
        publications: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Publication'                
            }
        ],
        followers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        following: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
)
UserSchema.methods.follow = function (id, follow) {
    if (follow === 'following' && this.following.indexOf(id) === -1)
        this.following.push(id)
    else if (follow === 'follower' && this.followers.indexOf(id) === -1)
        this.followers.push(id)
    return this.save()
}
UserSchema.methods.unfollow = function (id, follow) {
    if (follow === 'following')
        this.following = this.following.filter((id_) => { id_ !== id })
    else if (follow === 'follower')
        this.followers = this.followers.filter((id_) => { id_ !== id })
    return this.save()
}
UserSchema.methods.followTopic = function (id) {
    this.topics.push(id)
    return this.save()
}
UserSchema.methods.unfollowTopic = function (id) {
    this.topics = this.topics.filter((id_) => {id_ !== id})
    return this.save()
}
module.exports = mongoose.model('User', UserSchema)