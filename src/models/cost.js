const {
    Schema,
    model
} = require('mongoose');

const CostSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    total:{
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Cost = model('Cost', CostSchema);

module.exports = Cost;