import React, { useState, useEffect } from 'react';
import { getInventory, updateInventory } from '../services/api';

const Inventory = ({ uniqueId, hospitalName }) => {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(null);

  // Function to fetch inventory
  const fetchInventory = async () => {
    try {
      const data = await getInventory(uniqueId);
      setInventory(data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
      setError('Error fetching inventory: ' + (error.response?.data?.message || error.message));
    }
  };

  useEffect(() => {
    if (uniqueId) {
      fetchInventory();
    }
  }, [uniqueId]);

  const handleAddItem = async () => {
    try {
      await updateInventory(uniqueId, { name: newItem, quantity });
      setNewItem('');
      setQuantity(0);
      fetchInventory(); // Refresh inventory after adding new item
    } catch (error) {
      console.error('Error adding inventory item:', error);
      setError('Error adding inventory item: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div style={{ padding: '20px', background: '#f9f9f9', borderRadius: '5px', marginBottom: '20px' }}>
      <h3>Inventory Management for {hospitalName}</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Item Name"
          style={{ padding: '5px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          placeholder="Quantity"
          style={{ padding: '5px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button
          onClick={handleAddItem}
          style={{ padding: '5px 10px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Add Item
        </button>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f2f2f2' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Item</th>
            <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item._id}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.name}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
