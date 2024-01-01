const prodService = require('../services/product.service')

exports.createProductCate = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { cateName } = req.body;
        const resData = await prodService.createProductCate(userId, cateName);
        return res.json(resData);
    }
    catch (error) {
        console.log(error);
        return res.send({
            status: error.code || 400,
            message: error.message,
        });
    }
}

exports.createProduct = async (req, res) => {
    try {
        const userId = req.user.userId;
        const dataProduct = req.body;
        const resData = await prodService.createProduct(userId, dataProduct);
        return res.json(resData);
    }
    catch (error) {
        console.log(error);
        return res.send({
            status: error.code || 400,
            message: error.message,
        });
    }
}

exports.getAllProduct = async (req, res) => {
    try {
        const { categoryId} = req.body;
        const resData = await prodService.getAllProduct(categoryId);
        console.log(resData);
        return res.json(resData);
    }
    catch (error) {
        console.log(error);
        return res.send({
            status: error.code || 400,
            message: error.message,
        });
    }
}

exports.getAllProductNotCheck = async (req, res) => {
    try {
        const { categoryId } = req.body;
        const resData = await prodService.getAllProduct(categoryId);
        console.log(resData);
        return res.json(resData);
    }
    catch (error) {
        console.log(error);
        return res.send({
            status: error.code || 400,
            message: error.message,
        });
    }
}

exports.searchProduct = async (req, res) => {
    try {
        const { keyword } = req.body;
        const resData = await prodService.searchProduct(keyword);
        console.log(resData);
        return res.json(resData);
    }
    catch (error) {
        console.log(error);
        return res.send({
            status: error.code || 400,
            message: error.message,
        });
    }
}

exports.getListCategory = async (req, res) => {
    try {
        const resData = await prodService.getListCategory();
        return res.json(resData);
    }
    catch (error) {
        console.log(error);
        return res.send({
            status: error.code || 400,
            message: error.message,
        });
    }
}