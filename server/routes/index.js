const user = require('./user')
const article = require('./story')
const topic = require('./topic')
const publication = require('./publication')

module.exports = (router) => {
    user(router)
    article(router)
    topic(router)
    publication(router)
}