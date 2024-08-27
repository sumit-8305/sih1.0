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

// New routes for increasing, decreasing, and deleting items
router.put('/items/:hospitalId/:itemId/increase', (req, res, next) => {
  console.log('PUT /items/:hospitalId/:itemId/increase');
  console.log('Hospital ID:', req.params.hospitalId);
  console.log('Item ID:', req.params.itemId);
  next();
}, inventoryController.increaseItemQuantity);

router.put('/items/:hospitalId/:itemId/decrease', (req, res, next) => {
  console.log('PUT /items/:hospitalId/:itemId/decrease');
  console.log('Hospital ID:', req.params.hospitalId);
  console.log('Item ID:', req.params.itemId);
  next();
}, inventoryController.decreaseItemQuantity);

router.delete('/items/:hospitalId/:itemId', (req, res, next) => {
  console.log('DELETE /items/:hospitalId/:itemId');
  console.log('Hospital ID:', req.params.hospitalId);
  console.log('Item ID:', req.params.itemId);
  next();
}, inventoryController.deleteItem);

module.exports = router;