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
        message: "create product successfully"
    }
};

exports.getAllProduct = async (categoryId) => {
    const Product = await db.Product;
    let product;
    if (categoryId == "") {
        product = await Product.findAll();
    }
    else {
        product = await Product.findAll({
            where: {
                cateId: categoryId
            }
        });
    }
    
    return {
        status: 200,
        rows: product
    }
}

exports.getListCategory = async() => {
    const ProductCategories = await db.ProductCategories;

    const category = await ProductCategories.findAll();

    return {
        status: 200,
        rows: category
    }
}