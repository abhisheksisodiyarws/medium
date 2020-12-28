# Medium Clone 
This is a [Medium](https://medium.com) clone built using [Node.js](https://nodejs.org).
# Status 
The project are under re-development for become materail on my course staytune for update
# Technologies

1. [Express.js](https://expressjs.com)
1. [Node.js](https://nodejs.org)
1. [MongoDB](https://mongodb.com)

### Features
- Write a story
- View a story
- View all stories
- Follow a user
- Follow topics
- Add publication

### Installation
<!-- * Git clone this repo [here](https://github.com/krissnawat/medium-clone-on-node). -->
* Move into the folder from your terminal:
```sh
    cd medium
```
* Run `npm install` to install node dependencies.
* Start MongoDB instance: `mongod`.
* Run `node app.js` to start the daemon.
* Use postman to hit apis.

* API root

http://localhost:5000/api

### User APIs-

* Create User (POST)
/user 

body: {
      "username": "string",
      "password": "string",
      "firstname": "string",
      "lastname": "string"
}



* Update User (PUT)
/user 

body: {
      "username": "string",
      "password": "string",
      "firstname": "string",
      "lastname": "string",
      "id": "string"
}

* Login User (POST)
/login

body: {
      "username": "string",
      "password": "string"
}

* Follow/Unfollow User (POST)
/user/follow     /user/unfollow

body: {
      "id": "string",
      "user_id": "string"
}

* Follow/Unfollow Topic (POST)
/user/followtopic    /user/unfollowtopic

body: {
      "id": "string",
      "topicId": "string"
}

* Get user profile (GET)
/user/profile/id



### Story APIs-


* Get all stories (GET)
/storyall

* Create new story (POST)
/story

body: {
 "title": "string",
      "description": "string",
      "author_id": "string",
      "topics": [string],
      "publication": "string"
      }

* Delete story (POST)
/story/id

* Get story story (GET)
/story/id

* Update story (PUT)
/story/id

body: {
     "title": "string",
      "description": "string",
      "topics": [string]
}


* Get stories by topic (GET)
/story/topic/id

* Get stories by publication (GET)
/story/publication/id



### Topic APIs-


* Get all topics (GET)
/topicall


* Add  topic (POST)
/topic

body: {"topic": "string"}


* GET  a topic (GET)
/topic/id

* Update  a topic (PUT)
/topic/id

body: {"topic": "string"}


* Delte  a topic (DELETE)
/topic/id


### Publication APIs-


* Get all Publications (GET)
/publicationall


* Add  publication (POST)
/publication

body: {"publication": "string"}


* GET  a publication (GET)
/publication/id

* Update  a publication (PUT)
/publication/id

body: {"publication": "string"}


* Delte  a publication (DELETE)
/publication/id


### Contribution

Abhishek Sisodiya
