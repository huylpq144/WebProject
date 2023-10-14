const express = require("express");
const {Posts} = require('../models');

const routers = express.Router();

routers.get('/', async (req, res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
});

routers.post('/', async (req, res) => {
    const post = req.body;
    await Posts.create(post);
    res.json(post);
});

module.exports = routers