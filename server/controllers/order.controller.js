const orderService = require("../services/order.service")

exports.createOrder = async (req, res) => {
    try {
        const userId = req.user.userId;
        const {listItem} = req.body;
        console.log(listItem)
        const resData = await orderService.createOrder(userId, listItem);
        return res.json(resData);
    } 
    catch (error) {
        console.log(error);
        return res.send({
            status: error.code || 400,
            message: error.message,
        });
    }
}

exports.confirmPayment = async(req, res) => {
    try {
        const userId = req.user.userId;
        const {price, discountAmount, totalAmount, paymentMethod, discountCode, shippingAddress, notes} = req.body;
        const paymentJson = {
            price, discountAmount, totalAmount, paymentMethod, 
            discountCode, shippingAddress, notes
        };
        const resData = await orderService.confirmPayment(userId, paymentJson);
        return res.json(resData);
    } 
    catch (error) {
        console.log(error);
        return res.send({
            status: error.code || 400,
            message: error.message,
        });
    }
};

exports.approveTransfer = async(req, res) => {
    try {
        const {orderNo} = req.params;
        const resData = await orderService.approveTransfer(orderNo);
        return res.json(resData);
    } 
    catch (error) {
        console.log(error);
        return res.send({
            status: error.code || 400,
            message: error.message,
        });
    }
};

exports.cancelTransfer = async(req, res) => {
    try {
        const {orderNo} = req.params;
        const resData = await orderService.cancelTransfer(orderNo);
        return res.json(resData);
    } 
    catch (error) {
        console.log(error);
        return res.send({
            status: error.code || 400,
            message: error.message,
        });
    }
};