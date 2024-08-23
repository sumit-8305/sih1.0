const Hospital = require('../models/Hospitals');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerHospital = async (req, res) => {
  const { name, uniqueId, totalBeds, username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newHospital = new Hospital({
      name,
      uniqueId,
      totalBeds,
      availableBeds: totalBeds,
      maintainers: [{ username, password: hashedPassword }]
    });
    
    await newHospital.save();
    res.status(201).json({ message: 'Hospital registered successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addMaintainer = async (req, res) => {
  const { hospitalId, username, password } = req.body;
  try {
    const hospital = await Hospital.findById(hospitalId);
    if (!hospital) return res.status(404).json({ message: 'Hospital not found' });
    
    const hashedPassword = await bcrypt.hash(password, 10);
    hospital.maintainers.push({ username, password: hashedPassword });
    await hospital.save();
    
    res.status(200).json({ message: 'Maintainer added successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateBedAvailability = async (req, res) => {
  const { availableBeds } = req.body;
  try {
    const hospital = await Hospital.findById(req.hospital.id);
    if (!hospital) return res.status(404).json({ message: 'Hospital not found' });
    
    hospital.availableBeds = availableBeds;
    hospital.lastUpdated = Date.now();
    await hospital.save();
    
    res.status(200).json({ message: 'Bed availability updated successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBedAvailability = async (req, res) => {
  try {
    const hospitals = await Hospital.find().select('name uniqueId totalBeds availableBeds lastUpdated');
    res.status(200).json(hospitals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};