
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



module.exports = router;
