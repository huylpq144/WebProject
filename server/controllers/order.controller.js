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