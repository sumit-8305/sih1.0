const Hospital = require('../models/Hospitals');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.loginMaintainer = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hospital = await Hospital.findOne({ 'maintainers.username': username });
    if (!hospital) return res.status(400).json({ message: 'Invalid credentials' });
    
    const maintainer = hospital.maintainers.find(m => m.username === username);
    const isMatch = await bcrypt.compare(password, maintainer.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    
    const token = jwt.sign({ id: hospital._id, uniqueId: hospital.uniqueId }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, hospitalId: hospital._id, hospitalName: hospital.name });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};