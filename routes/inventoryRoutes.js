
const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.get('/items/:hospitalId', (req, res, next) => {
  console.log('GET /items/:hospitalId');
  console.log('Hospital ID:', req.params.hospitalId);
  next();
}, inventoryController.getItems);

router.post('/items/:hospitalId', (req, res, next) => {
  console.log('POST /items/:hospitalId');
  console.log('Hospital ID:', req.params.hospitalId);
  next();
}, inventoryController.addItem);

router.delete('/items/:itemId', (req, res, next) => {
  console.log('DELETE /items/:itemId');
  console.log('Item ID:', req.params.itemId);
  next();
}, inventoryController.deleteItem);



module.exports = router;
