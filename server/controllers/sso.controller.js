const express = require("express");
const ssoService = require('../services/sso.service');

exports.register = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.send({
                status: 400,
                message: 'Error creating',
            });
        }

        const resData = await ssoService.register(req.body);
        return res.json(resData);
    } catch (error) {
        console.log(error);
        return res.send({
            status: error.code || 400,
            message: error.message,
        });
    }
};