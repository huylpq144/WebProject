const db = require("../models");

exports.getAllUsers = async() => {
    const User = await db.User;
    const user = await User.findAll({
        attributes: ['userId', 'username', 'email'],
    });
    return {
        status: 200,
        rows: user
    }
};

exports.deleteUser = async(userId) => {
    const User = await db.User;
    const user = await User.findOne({
        where: {
            userId: userId,
        }
    });
    if (!user) {
        throw new Error("User not exists");
    }
    await User.destroy({
            where: {
                userId: userId,
            }
    })
    return {
        status: 200,
        message: "Delete successfully"
    }
};

exports.editProfile = async(userId, userData) => {
    const User = await db.User;
    await User.update(userData, {
        where: {
            userId: userId
        }
    })
    return {
        status: 200,
        message: "Update profile success"
    }
};


exports.getUserProfile = async(userId) => {
    const User = await db.User;
    const user = await User.findByPk(userId)
    if (user == null) {
        throw new Error("User not exists");
    }
    return {
        status: 200,
        data: user
    }
};