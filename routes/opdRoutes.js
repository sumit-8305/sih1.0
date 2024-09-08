const express = require('express');
const router = express.Router();
const OPDRequest = require('../models/OPDRequest'); // Ensure this path is correct
const RSS = require('rss');

// Handle new OPD requests
router.post('/requests', async (req, res) => {
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
router.get('/requests', async (req, res) => {
  try {
    const requests = await OPDRequest.find();
    res.status(200).json(requests);
  } catch (error) {
    console.error('Error fetching requests:', error);
    res.status(500).json({ message: 'Server error, try again later.' });
  }
});

// Fetch specific OPD request by ID
router.get('/requests/:id', async (req, res) => {
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

router.post('/approve/:id', async (req, res) => {
  const requestId = req.params.id;
  try {
    const opdRequest = await OPDRequest.findById(requestId);
    if (!opdRequest) {
      return res.status(404).json({ message: 'Request not found' });
    }

    const feed = new RSS({
      title: 'Hospital OPD Bed Appointments',
      description: 'Updates on OPD bed appointments',
      feed_url: 'http://localhost:5000/rss',
      site_url: 'http://localhost:5000',
      language: 'en',
    });

    feed.item({
      title: 'OPD Bed Appointment Confirmed',
      description: `Dear ${opdRequest.patientName}, your appointment for an OPD bed at ${opdRequest.hospital} has been confirmed.`,
      url: 'http://localhost:5000/api/opd/requests/' + requestId, // Link to the request details
      date: new Date(),
    });
    await OPDRequest.findByIdAndDelete(requestId);
    res.set('Content-Type', 'application/rss+xml');
    res.send(feed.xml());
  } catch (error) {
    console.error('Error approving and deleting request:', error);
    res.status(500).json({ message: 'Server error, try again later.' });
  }
});

module.exports = router;