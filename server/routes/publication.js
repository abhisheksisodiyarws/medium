const publicationcontroller = require('./../controllers/publication.ctrl')

module.exports = (router) => {

    router.route('/publication').post(publicationcontroller.addPublication)
    router.route('/publication').get(publicationcontroller.getAllPublications)
    router.route('/publication/:id').get(publicationcontroller.getPublicationById)
    router.route('/publication').delete(publicationcontroller.deletePublication)
    router.route('/publication').put(publicationcontroller.updatePublication)
}