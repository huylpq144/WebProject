const db = require("../models");
const express = require("express");
const { v4: uuidv4 } = require('uuid');

exports.createProductCate = async(userId, cateName) => {
    const ProductCate = await db.ProductCategories;
    await ProductCate.create({
        id: uuidv4(),
        cateName: cateName,
        createdBy: userId,
    })
    return {
        status: 200,
        message: "create product categories successfully"
    }
};

exports.createProduct = async(userId, dataProd) => {
    const Product = await db.Product;
    await Product.create({
        id: uuidv4(),
        createdBy: userId,
        ...dataProd,
    })
    return {
        status: 200,
        message: "create product categories successfully"
    }
};

exports.getAllProduct = async () => {
    const Product = await db.Product;

    const product = await Product.findAll();
    
    return {
        status: 200,
        rows: product
    }
}