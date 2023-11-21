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