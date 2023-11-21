const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require('uuid');
const db = require("../models");
const { use } = require("../routers/Posts");

exports.register = async(userJson) => {
    const User = await db.User;
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
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(userJson.password, salt)

    const body = {
        email: userJson.email,
        username: userJson.username,
        password: hashed
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

exports.login = async(userJson) => {
    const User = await db.User;
    const user = await User.findOne({
        where: {
            username: userJson.username,
        }
    });
    if (!user) {
        throw new Error("username invalid");
    }
    const validPassword = await bcrypt.compare(userJson.password, user.password);
    
    if (!validPassword) {
        throw new Error("password invalid");
    }
    if (user && validPassword) {
        const accessToken = jwt.sign({
            userId: user.userId,
            email: user.email,
            role: user.role
        },
        "secretKey",
        { expiresIn: "1d"}
        )
        
        return {
            status: 200,
            data: user,
            accessToken
        }
    }
};