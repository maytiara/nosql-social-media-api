# NoSQL : Social Media API
![mit-license](https://img.shields.io/badge/license-MIT-yellowgreen) ![npm-mysql2](https://img.shields.io/badge/npm-mysql2-blue) ![npm-mongoose](https://img.shields.io/badge/npm-mongoose-blue) ![npm-express](https://img.shields.io/badge/npm-express-blue) ![npm-dotenv](https://img.shields.io/badge/npm-dotenv-red) ![npm-nodemon](https://img.shields.io/badge/npm-nodemon-blue)

![m-e-n-app](public/media/men-logo.jpg)
<br />
<br />

## Description

**API routes for the social network application. Using MongoDB for NoSQL database associated with Mongoose v6.0.13 - npm package ODM library for MongoDB and Nodejs. Express.js for routing with different endpoints using "GET", "POST", "PUT" and "DELETE".**


[Walkthrough Video](https://vimeo.com/753962115)

## User Story (Big Idea) 
Create an API database for social media app where user can share their thoughts, create friendlist and react to friend's thought.

## Application/Tools
- npm packages (express, mongoose, nodemon, dotenv)
- **MongoDB** for store the data, **Nodejs** to run the app, **Insomnia** for testing the API Routes


## Table of Contents
1. [Demo](#demo)
    1. [Database Seeding in MongoDB](#database-seeding-in-mongodb)
    2. [GET routes for all and a single users and thoughts](#get-routes-for-all-and-a-single-users-and-thoughts)
    3. [POST routes for users and thoughts](#post-routes-for-users-and-thoughts)
    4. [PUT routes for users and thoughts](#put-routes-for-users-and-thoughts)
    5. [DELETE routes for users and thoughts](#delete-routes-for-users-and-thoughts)
2. [Feedback or Contribute](#feedback-or-contribute)
3. [License](#license)
4. [Reference](#reference)


## Demo
```
- For database seeding: npm run seed
- to activate connection: npm run watch
- Open Insomnia: test all the different http request for each USERS, THOUGHTS, FRIENDS and REACTIONS
```
#### Database Seeding in MongoDB

![mongo-db-seeding](public/media/mongodb-database.gif)
<br />

#### GET routes for all and a single users and thoughts

![get-http-request](public/media/get-request-API.gif)
<br />

#### POST routes for users and thoughts

![post-http-request](public/media/post-request-API.gif)
<br />

#### PUT routes for users and thoughts

![put-http-request](public/media/put-request-API.gif)
<br />

#### DELETE routes for users and thoughts

![put-http-request](public/media/delete-request-API.gif)
<br />
<br />

## Feedback or Contribute
***If you have any feedback or suggestion feel free to send an email,*** codingowl898@gmail.com

## License
All rights reserved. Under the MIT license.

## Reference
[Mongoose](https://mongoosejs.com/docs/guide.html) documentation for queries.