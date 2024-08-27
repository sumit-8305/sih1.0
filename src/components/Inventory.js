import React, { useState, useEffect } from 'react';
import { getInventory, updateInventory } from '../services/api';

const Inventory = ({ uniqueId, hospitalName }) => {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hospitalId, setHospitalId] = useState(null);

  const fetchHospitalId = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/hospital/bed-availability');
      const hospitals = await response.json();
      const hospital = hospitals.find(h => h.uniqueId === uniqueId);
      if (hospital) {
        setHospitalId(hospital._id);
      } else {
        setError('Hospital not found');
      }
    } catch (error) {
      console.error('Error fetching hospital data:', error);
      setError('Error fetching hospital data: ' + error.message);
    }
  };

  const fetchInventory = async () => {
    if (!hospitalId) return;
    try {
      const response = await fetch(`http://localhost:5000/api/inventory/items/${hospitalId}`);
      const data = await response.json();
      setInventory(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching inventory:', error);
      setError('Error fetching inventory: ' + error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (uniqueId) {
      setLoading(true);
      fetchHospitalId();
    }
  }, [uniqueId]);

  useEffect(() => {
    if (hospitalId) {
      setTimeout(() => {
        fetchInventory();
      }, 500);
    }
  }, [hospitalId]);

  const handleAddItem = async () => {
    if (!hospitalId) return;
    try {
      const existingItem = inventory.find(item => item.name.toLowerCase() === newItem.toLowerCase());
      if (existingItem) {
        await updateInventory(hospitalId, { 
          id: existingItem._id, 
          name: existingItem.name, 
          quantity: existingItem.quantity + quantity 
        });
      } else {
        await updateInventory(hospitalId, { name: newItem, quantity });
      }
      setNewItem('');
      setQuantity(0);
      fetchInventory();
    } catch (error) {
      console.error('Error updating inventory item:', error);
      setError('Error updating inventory item: ' + error.message);
    }
  };

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    if (!hospitalId) return;
    try {
      await updateInventory(hospitalId, { id: itemId, quantity: newQuantity });
      fetchInventory();
    } catch (error) {
      console.error('Error updating item quantity:', error);
      setError('Error updating item quantity: ' + error.message);
    }
  };

  const handleDeleteItem = async (itemId) => {
    if (!hospitalId) return;
    try {
      // Instead of using a separate delete function, we'll set the quantity to 0
      await updateInventory(hospitalId, { id: itemId, quantity: 0 });
      fetchInventory();
    } catch (error) {
      console.error('Error deleting inventory item:', error);
      setError('Error deleting inventory item: ' + error.message);
    }
  };

  if (loading) {
    return <p>Loading Inventory...</p>;
  }

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
          Add/Update Item
        </button>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f2f2f2' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Item</th>
            <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Quantity</th>
            <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item._id}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.name}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.quantity}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <button onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)} style={{ marginRight: '5px' }}>+</button>
                <button onClick={() => handleUpdateQuantity(item._id, Math.max(0, item.quantity - 1))} style={{ marginRight: '5px' }}>-</button>
                <button onClick={() => handleDeleteItem(item._id)} style={{ background: '#ff4d4d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;