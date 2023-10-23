const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require('uuid');
const db = require("../models");

exports.register = async(userJson) => {
    const User = db.User;
    const user = await User.findOne({
        where: {
            username: userJson.username,
        }
    });
    if(user) {
        return {
            status: 400,
            message: 'Account already exist!'
        }
    }
    const body = {
        email: userJson.email,
        username: userJson.username,
        password: userJson.password
      };
      
    await User.create({
        userId: uuidv4(),
        tokenId: uuidv4(),
        ...body,
    });

    return {
        status: 200,
        message: 'User created!',
    };
};