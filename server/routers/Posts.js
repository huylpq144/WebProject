const express = require("express");
const { Posts } = require('../models');
const sso = require('../controllers/sso.controller')
const userRight = require('../controllers/user.controller')
const product = require('../controllers/product.controller')

const middleware = require('../middlewares/middlewares')
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

//SSO Auth
routers.post('/register', sso.register);
routers.post('/login', sso.login);

//USER
routers.get('/get-all-users', middleware.checkAuthAndToken, userRight.getAllUsers)
routers.delete('/delete-user/:id', middleware.checkTokenAdmin, userRight.deleteUser)

//PRODUCT
routers.post('/product/create-product-cate', middleware.checkTokenAdmin, product.createProductCate)
routers.post('/product/create-product', middleware.checkTokenAdmin, product.createProduct)
routers.get('/product/get-all-product', middleware.checkAuthAndToken, product.getAllProduct)

module.exports = routers