const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    //res.send('Post');
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', (req, res) => {
    console.log(req.body);
    const post = new Post({
        name: req.body.name,
        title: req.body.title,
        desc: req.body.desc
    });
    post.save().then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
        res.json({ message: err });
    });
});

module.exports = router;