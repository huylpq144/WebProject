const express = require("express");
const userService = require('../services/user.service');

exports.getAllUsers = async (req, res) => {
    try {

        const resData = await userService.getAllUsers();
        return res.json(resData);
    } catch (error) {
        console.log(error);
        return res.send({
            status: error.code || 400,
            message: error.message,
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        console.log(userId);
        const resData = await userService.deleteUser(userId);
        return res.json(resData);
    } catch (error) {
        console.log(error);
        return res.send({
            status: error.code || 400,
            message: error.message,
        });
    }
};