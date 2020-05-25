const Order = require('../models/order');

module.exports = {
    async index(req, res) {
        try {
            const order = await Order.find().where({deliveryStatus: false});

            return res.send({
                order
            });
        } catch (error) {
            return res.status(400).send({
                error: 'Error loading orders'
            })
        }
    },

    async indexOne(req, res) {
        try {
            const order = await Order.findById(req.params.orderId);

            return res.send({
                order
            });
        } catch (error) {
            return res.status(400).send({
                error: 'Error loading orders'
            })
        }
    },


    async create(req, res) {
        try {
            const order = await Order.create({
                ...req.body
            });

            return res.send({
                order
            });

        } catch (error) {
            console.log(error)
            return res.status(400).send({
                error: 'Error creating new order'
            });
        }
    },

    async update(req, res) {
        try {
            const order = await Order.findByIdAndUpdate(req.params.orderId, {
                ...req.body
            }, {
                new: true
            });

            return res.send({
                order
            });
        } catch (error) {
            return res.status(400).send({
                error: 'Error updating order'
            });
        }
    },
    async delete(req, res) {
        try {
            await Order.findByIdAndRemove(req.params.orderId);

            return res.send();
        } catch (error) {
            return res.status(400).send({
                error: 'Error deleting order'
            })
        }
    }
}