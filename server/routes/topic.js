const topiccontroller = require('./../controllers/topic.ctrl')

module.exports = (router) => {
    router.route('/topic').get(topiccontroller.getAllTopics)
    router.route('/topic/:id').get(topiccontroller.getTopicById)
    router.route('/topic').post(topiccontroller.createTopic)
    router.route('/topic').delete(topiccontroller.deleteTopic)
    router.route('/topic/:id').put(topiccontroller.updateTopic)
}