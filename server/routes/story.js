const articlecontroller = require('./../controllers/story.ctrl')

module.exports = (router) => {

    /**
     * get all story
     */
    router
        .route('/story')
        .get(articlecontroller.getAll)
    /**
     * get  story according to topic
     */
    router
        .route('/story/topic/:id')
        .get(articlecontroller.getArticleByTopic)
    /**
     * get  story according to publicaiton
     */
    router
        .route('/story/publication/:id')
        .get(articlecontroller.getArticleByPublication)

    /**
     * add an article
     */
    router
        .route('/story')
        .post(articlecontroller.addArticle)

    /**
     * update an article
     */
    router
        .route('/story/:id')
        .put(articlecontroller.updateArticle)

    /**
     * update an article
     */
    router
        .route('/story')
        .delete(articlecontroller.deleteArticle)

    /**
     * get a particlular article to view
     */
    router
        .route('/story/:id')
        .get(articlecontroller.getArticle)
}