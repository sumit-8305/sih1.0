
const Inventory = require('../models/Inventory');
const Hospital = require('../models/Hospitals');

exports.getItems = async (req, res) => {
  try {
    const { hospitalId } = req.params;
    console.log(`Fetching inventory for hospitalId: ${hospitalId}`);
    if (!hospitalId) {
      return res.status(400).json({ message: 'Hospital ID is required' });
    }

    const inventory = await Inventory.find({ hospitalId });
    if (!inventory) {
      return res.status(404).json({ message: 'Inventory not found' });
    }

    res.json(inventory);
  } catch (error) {
    console.error('Error fetching inventory:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.addItem = async (req, res) => {
  try {
    const { hospitalId } = req.params;
    const { name, quantity } = req.body;

    const newItem = new Inventory({ hospitalId, name, quantity });
    await newItem.save();
    res.json(newItem);
  } catch (error) {
    console.error('Error adding inventory item:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
