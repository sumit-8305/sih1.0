import React, { useState, useEffect } from 'react';
import { getHospitals, getHospitalMaintainers, addMaintainer, getBedAvailability } from '../services/api';

const AdminPanel = () => {
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [maintainers, setMaintainers] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const fetchHospitals = async () => {
    try {
      const data = await getBedAvailability();
      setHospitals(data);
    } catch (error) {
      console.error('Failed to fetch hospitals:', error);
    }
  };
  
  useEffect(() => {
    fetchHospitals();
    const interval = setInterval(fetchHospitals, 10000); // Fetch every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchMaintainers = async (hospitalId) => {
    const data = await getHospitalMaintainers(hospitalId);
    setMaintainers(data);
  };

  const handleHospitalSelect = (hospital) => {
    setSelectedHospital(hospital);
    fetchMaintainers(hospital._id);
  };

  const handleAddMaintainer = async (username, password) => {
    await addMaintainer(selectedHospital._id, username, password);
    fetchMaintainers(selectedHospital._id);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        <h3>Hospitals</h3>
        <ul>
          {hospitals.map(hospital => (
            <li key={hospital._id} onClick={() => handleHospitalSelect(hospital)}>
              {hospital.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedHospital && (
        <div>
          <h3>Maintainers for {selectedHospital.name}</h3>
          <ul>
            {maintainers.map(maintainer => (
              <li key={maintainer.username}>{maintainer.username}</li>
            ))}
          </ul>
            {selectedHospital && (
              <div>
                <h3>Add Maintainer for {selectedHospital.name}</h3>
                <input
                  type="text"
                  placeholder="Username"
                  value={newMaintainerUsername}
                  onChange={(e) => setNewMaintainerUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={newMaintainerPassword}
                  onChange={(e) => setNewMaintainerPassword(e.target.value)}
                />
                <button onClick={() => handleAddMaintainer(newMaintainerUsername, newMaintainerPassword)}>
                  Add Maintainer
                </button>
              </div>
            )}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;