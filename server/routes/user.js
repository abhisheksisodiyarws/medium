const usercontroller = require('./../controllers/user.ctrl')

module.exports = (router) => {

    router.route('/login').post(usercontroller.login)

    /**
     * get a user
     */
    router
        .route('/user/:id')
        .get(usercontroller.getUser)

    /**
     * get a user profile
     */
    router
        .route('/user/profile/:id')
        .get(usercontroller.getUserProfile)

    /**
     * adds a user
     */
    router
        .route('/user')
        .post(usercontroller.addUser)

    /**
     * delete a user
     */
    router
        .route('/user')
        .delete(usercontroller.deleteUser)

    /**
     * update a user
     */
    router
        .route('/user')
        .put(usercontroller.updateUser)

    /**
     * follow a user
     */
    router
        .route('/user/follow')
        .post(usercontroller.followUser)
    /**
     * follow a topic
     */
    router
        .route('/user/followtopic')
        .post(usercontroller.followTopic)

    /**
     * unfollow a user
     */
    router
        .route('/user/unfollow')
        .post(usercontroller.unfollowUser)

            /**
     * unfollow a topic
     */
    router
    .route('/user/unfollowtopic')
    .post(usercontroller.unfollowTopic)
}