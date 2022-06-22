// const Router = require('express')
// const router = new Router
const postController = require('../controllers/post.controller')

// router.get('/post', postController.getAllPosts)
// router.get('/newPost', postController.createPost)

// module.exports = router


const express = require('express');
const db = require("../db");
const Cities = require("../models/Cities");
const router = express.Router();

router.get('/', postController.getAllPosts);
router.post('/', postController.createOnePost);

module.exports = router

// router.get('/post', (req, res) =>
//     Cars.findAll()
//         .then(car => {
//             console.log(cars)
//             console.log(cars)
//             res.json(car)
//             console.log(cars)
//             // router.get('/post', postController.getAllPosts)
//
//         })
//         .catch(err => console.log(err)));
// const user = await Cars.findOne();
// console.log(user)

    // await db.transaction(async () => {
    //     const cars = new Cities({ name: 'Kazan', car_id: 1});
    //     await cars.save();
    // })




module.exports = router
