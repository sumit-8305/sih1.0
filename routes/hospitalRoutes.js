const express = require('express');
const { registerHospital, addMaintainer, updateBedAvailability, getBedAvailability } = require('../controllers/hospitalController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerHospital);
router.post('/add-maintainer', authMiddleware, addMaintainer);
router.put('/update-beds', authMiddleware, updateBedAvailability);
router.get('/bed-availability', getBedAvailability);

module.exports = router;