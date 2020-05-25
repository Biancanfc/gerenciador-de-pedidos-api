const {
    Schema,
    model
} = require('mongoose');

const OrderSchema = new Schema({
    client: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    streetAddress: {
        type: String
    },
    numberAddress: {
        type: String
    },
    districtAddress: {
        type: String
    },
    deliveryDate: {
        type: Date,
        required: true
    },
    deliveryType: {
        type: String,
        required: true
    },
    deliveryFee: {
        type: Number,
        default: 0
    },
    payment: {
        type: String,
        required: true
    },
    unitValue: {
        type: Number,
        required: true
    },
    order: [{
        type: String,
        required: true
    }],
    paymentStatus:{
        type: Boolean,
        required: true,
        default: false
    },
    deliveryStatus:{
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Order = model('Order', OrderSchema);

module.exports = Order;