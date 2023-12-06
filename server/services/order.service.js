const db = require('../models')
const {Op} = require('sequelize')
const { v4: uuidv4 } = require('uuid');

exports.createOrder = async(cartId) => {
    const Order = await db.Order;
    const Cart = await db.Cart;

    const cart = await Cart.findOne({
        where: {
            id: cartId
        }
    });

    await Order.create({
        id: uuidv4(),
        userId: cart.userId,
        cartId: cart.id,
        totalAmount: cart.totalPrice,
        status: 1
    })

    return {
        status: 200,
        message: "Order success"
    }
};