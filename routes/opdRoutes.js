const express = require('express');
const router = express.Router();
const OPDRequest = require('../models/OPDRequest'); // Ensure this path is correct

// Handle new OPD requests
router.post('/', async (req, res) => {
  const { patientName, contact, hospital } = req.body;

  try {
    const newRequest = new OPDRequest({ patientName, contact, hospital, status: 'pending' });
    await newRequest.save();
    res.status(201).json({ message: 'OPD request submitted successfully' });
  } catch (error) {
    console.error('Error saving request:', error);
    res.status(500).json({ message: 'Server error, try again later.' });
  }
});

// Fetch all OPD requests
router.get('/', async (req, res) => {
  try {
    const requests = await OPDRequest.find();
    res.status(200).json(requests);
  } catch (error) {
    console.error('Error fetching requests:', error);
    res.status(500).json({ message: 'Server error, try again later.' });
  }
});

// Fetch specific OPD request by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const request = await OPDRequest.findById(id);
    if (request) {
      res.status(200).json(request);
    } else {
      res.status(404).json({ message: 'Request not found' });
    }
  } catch (error) {
    console.error('Error fetching request:', error);
    res.status(500).json({ message: 'Server error, try again later.' });
  }
});

module.exports = router;
