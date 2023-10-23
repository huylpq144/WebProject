const express = require("express");
const {Posts} = require('../models');
const sso = require('../controllers/sso.controller')
//const {User} = require('../models');
const db = require('../models')
const User = db.User;
const Product = db.Product;
const ProductCate = db.ProductCategories
const Payment = db.Payment

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

routers.post('/user', async (req, res) => {
    const user1 = req.body;
    await User.create(user1);
    res.json(user1);
});

routers.post('/product', async (req, res) => {
    const product = req.body;
    await Product.create(product);
    res.json(product);
});

routers.post('/productCate', async (req, res) => {
    const productCate = req.body;
    await ProductCate.create(productCate);
    res.json(productCate);
});

routers.post('/register', sso.register);
module.exports = routers