const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/orderController');

router.get('/', OrderController.index);
router.get('/:orderId', OrderController.indexOne);
router.post('/', OrderController.create);
router.put('/:orderId', OrderController.update);
router.delete('/:orderId', OrderController.delete);

module.exports = app => app.use('/order', router);
