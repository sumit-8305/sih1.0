import React, { useState, useEffect } from 'react';
import { getInventory, updateInventory, getHospitalByUniqueId } from '../services/api'; 

const Inventory = ({ uniqueId, hospitalName }) => {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(null);
  const [hospitalId, setHospitalId] = useState(localStorage.getItem('hospitalId') || null); // Default to localStorage value

  // Fetch Hospital ID only if it's not in localStorage
  const fetchHospitalId = async () => {
    if (!hospitalId) {
      try {
        const hospitalData = await getHospitalByUniqueId(uniqueId);
        setHospitalId(hospitalData._id); 
        localStorage.setItem('hospitalId', hospitalData._id); // Store the hospitalId in localStorage
      } catch (error) {
        console.error('Error fetching hospital ID:', error);
        setError('Error fetching hospital ID: ' + (error.response?.data?.message || error.message));
      }
    }
  };

  const fetchInventory = async () => {
    if (!hospitalId) {
      setError('Invalid hospital ID.');
      return;
    }
    try {
      const data = await getInventory(hospitalId);
      setInventory(data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
      setError('Error fetching inventory: ' + (error.response?.data?.message || error.message));
    }
  };

  useEffect(() => {
    if (!hospitalId && uniqueId) {
      fetchHospitalId();
    } else if (hospitalId) {
      fetchInventory();
    }
  }, [uniqueId, hospitalId]);

  const handleAddItem = async () => {
    if (!newItem || quantity <= 0 || !hospitalId) {
      setError('Invalid item, quantity, or hospital ID.');
      return;
    }
    try {
      await updateInventory(hospitalId, { name: newItem, quantity });
      setNewItem('');
      setQuantity(0);
      fetchInventory();
    } catch (error) {
      console.error('Error adding inventory item:', error);
      setError('Error adding inventory item: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div style={styles.container}>
      <h3>Inventory Management for {hospitalName}</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Item Name"
          style={styles.input}
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          placeholder="Quantity"
          style={styles.input}
        />
        <button
          onClick={handleAddItem}
          style={styles.button}
        >
          Add Item
        </button>
      </div>
      <table style={styles.table}>
        <thead>
          <tr style={styles.headerRow}>
            <th style={styles.headerCell}>Item</th>
            <th style={styles.headerCell}>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item._id} style={styles.dataRow}>
              <td style={styles.dataCell}>{item.name}</td>
              <td style={styles.dataCell}>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    background: '#f9f9f9',
    borderRadius: '5px',
    marginBottom: '20px',
    maxWidth: '100%',
    boxSizing: 'border-box',
  },
  inputContainer: {
    marginBottom: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  input: {
    flex: '1 1 auto',
    minWidth: '150px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 15px',
    background: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    flex: '0 0 auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  headerRow: {
    background: '#f2f2f2',
  },
  headerCell: {
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'left',
  },
  dataRow: {
    backgroundColor: 'white',
  },
  dataCell: {
    padding: '10px',
    border: '1px solid #ddd',
  },
  '@media (max-width: 600px)': {
    inputContainer: {
      flexDirection: 'column',
    },
    input: {
      width: '100%',
      marginBottom: '10px',
    },
  },
};

export default Inventory;
