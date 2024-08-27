
const Inventory = require('../models/Inventory');
const Hospital = require('../models/Hospitals');

exports.getItems = async (req, res) => {
  try {
    const { hospitalId } = req.params;
    const inventory = await Inventory.find({ hospitalId });
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

// Add these to your existing inventoryController.js file

exports.increaseItemQuantity = async (req, res) => {
  try {
    // Implement logic to increase item quantity
    // You might want to increase by 1 or by a specified amount
    res.status(200).json({ message: 'Item quantity increased successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error increasing item quantity', error: error.message });
  }
};

exports.decreaseItemQuantity = async (req, res) => {
  try {
    // Implement logic to decrease item quantity
    // Make sure quantity doesn't go below 0
    res.status(200).json({ message: 'Item quantity decreased successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error decreasing item quantity', error: error.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    // Implement logic to delete the item
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item', error: error.message });
  }
};