const db = require('../models')
const {Op} = require('sequelize')
const { v4: uuidv4 } = require('uuid');

exports.createOrder = async(userId, listItem) => {
    const Order = await db.Order;
    const Cart = await db.Cart;
    const CartItem = await db.CartItem

    const cart = await Cart.create({
        id: uuidv4(),
        userId: userId
    })

    let totalQuantity = 0;
    let totalPrice = 0;
    for (let item of listItem) {
        await CartItem.create({
            id: uuidv4(),
            cartId: cart.id,
            productId: item.id,
            quantity: item.quantity,
            price: item.price
        });
        totalQuantity += item.quantity
        totalPrice += item.price * item.quantity
    }

    await Cart.update({
        totalQuantity: totalQuantity,
        totalPrice: totalPrice,
    }, {
        where: {
            id: cart.id
        }
    })

    const cartUpdated = await Cart.findOne({
        where: {
            id: cart.id
        }
    })

    await Order.create({
        id: uuidv4(),
        userId: userId,
        cartId: cartUpdated.id,
        totalAmount: cartUpdated.totalPrice,
        status: 1
    })
    
    return {
        status: 200,
        message: "Order success"
    }
};

exports.confirmPayment = async() => {

}