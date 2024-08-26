import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Set authentication token
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

// Login function
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { username, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      setAuthToken(response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data?.message || error.message);
    throw error;
  }
};

// Update bed availability
export const updateBedAvailability = async (availableBeds) => {
  const response = await axios.put(`${API_URL}/hospital/update-beds`, { availableBeds });
  return response.data;
};

// Get bed availability
export const getBedAvailability = async () => {
  const response = await axios.get(`${API_URL}/hospital/bed-availability`);
  return response.data;
};

// Add new maintainer
export const addMaintainer = async (hospitalId, username, password) => {
  const response = await axios.post(`${API_URL}/hospital/add-maintainer`, { hospitalId, username, password });
  return response.data;
};

// Get inventory for a specific hospital
export const getInventory = async (uniqueId) => {
  try {
    const response = await axios.get(`${API_URL}/inventory/items/${uniqueId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching inventory:', error);
    throw error;
  }
};

// Update inventory (Add new item)
export const updateInventory = async (uniqueId, item) => {
  try {
    const response = await axios.post(`${API_URL}/inventory/items/${uniqueId}`, item);
    return response.data;
  } catch (error) {
    console.error('Error adding inventory item:', error);
    throw error;
  }
};
