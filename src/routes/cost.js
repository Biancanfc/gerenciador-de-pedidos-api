const express = require('express');
const router = express.Router();

const CostController = require('../controllers/costController');

router.get('/', CostController.index);
router.post('/', CostController.create);
router.put('/:costId', CostController.update);
router.delete('/:costId', CostController.delete);

module.exports = app => app.use('/cost', router);
