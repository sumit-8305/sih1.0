import React, { useState, useEffect } from 'react';
import { updateBedAvailability } from '../services/api';
import NavbarAdm from './Admin/Navbar';
import Inventory from './Inventory';

const Dashboard = ({ setHospitalName, uniqueId , hospitalName}) => {
  const [setHospitals] = useState([]);
  const [availableBeds, setAvailableBeds] = useState(0);
  const [currentHospital, setCurrentHospital] = useState(null);
  const [setError] = useState(null);

  const fetchHospitalNameByUniqueId = async (uniqueId) => {
    try {
      const response = await fetch('http://localhost:5000/api/hospital/bed-availability');
      const hospitals = await response.json();
      
      const hospital = hospitals.find(hospital => hospital.uniqueId === uniqueId);
      if (hospital) {
        setHospitalName(hospital.name);
        setCurrentHospital(hospital);
      } else {
        setError('Hospital not found');
      }
    } catch (error) {
      console.error('Error fetching hospital data:', error);
      setError('Error fetching hospital data');
    }
  };

  useEffect(() => {
    if (uniqueId) {
      fetchHospitalNameByUniqueId(uniqueId);
      fetchHospitals();
    }
  }, [uniqueId]);

  const fetchHospitals = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/hospital/bed-availability');
      const hospitals = await response.json();
      setHospitals(hospitals);
      if (uniqueId) {
        const hospital = hospitals.find(h => h.uniqueId === uniqueId);
        setCurrentHospital(hospital);
      }
    } catch (error) {
      console.error('Failed to fetch hospitals:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      await updateBedAvailability(availableBeds);
      fetchHospitals();
    } catch (error) {
      console.error('Failed to update bed availability:', error);
    }
  };

  return (
    <div>
      <NavbarAdm />
      <h2 style={{ justifyContent: "center", textAlign: 'center', paddingTop: '12px' }}>Dashboard</h2>
      <div style={{ justifyContent: "center", textAlign: 'center', gap: '10px' }}>
        <input
          type="number"
          value={availableBeds}
          onChange={(e) => setAvailableBeds(e.target.value)}
          placeholder="Available Beds"
          style={{
            padding: '5px 20px',
            margin: '10px 0',
            color: 'black',
            border: '1px solid black',
            borderRadius: '5px',
            cursor: 'pointer',
            display: 'inline-flex',
            gap: '10px',
            fontSize: '16px',
          }}
        />
        <button
          onClick={handleUpdate}
          style={{
            padding: '5px 20px',
            background: '#D1F4FA',
            margin: '10px 0',
            color: 'black',
            border: '1px solid black',
            borderRadius: '5px',
            cursor: 'pointer',
            display: 'inline-flex',
            gap: '10px',
            fontSize: '16px',
          }}
        >
          Update Beds
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {currentHospital && (
          <div style={{ textAlign: 'center', margin: '10px 0' }}>
            <h3
              style={{
                padding: '5px 20px',
                background: '#D1F4FA',
                color: 'black',
                border: '1px solid black',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            >
              Current Hospital: {currentHospital.name}
            </h3>
            <p
              style={{
                padding: '5px 20px',
                background: '#D1F4FA',
                color: 'black',
                border: '1px solid black',
                borderRadius: '5px',
                fontSize: '16px',
                margin: '10px 0',
              }}
            >
              Available Beds: {currentHospital.availableBeds} / Total Beds: {currentHospital.totalBeds}
            </p>
          </div>
        )}
        <Inventory  uniqueId={uniqueId} hospitalName={hospitalName} />
        <AdminPanel currentHospital={currentHospital} />
      </div>
    </div>
  );
};


const AdminPanel = ({ currentHospital }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      if (!currentHospital) return;

      try {
        const response = await fetch('http://localhost:5000/api/opd/requests');
        if (!response.ok) {
          throw new Error('Failed to fetch requests');
        }
        const data = await response.json();
        // Filter requests to only include those matching the current hospital
        const filteredRequests = data.filter(request => request.hospital === currentHospital.name);
        setRequests(filteredRequests);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, [currentHospital]);

  const approveRequest = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/opd/approve/${id}`, {
        method: 'POST',
      });

      if (response.ok) {
        setRequests((prevRequests) => prevRequests.filter(request => request._id !== id));
        alert('Request approved');
      } else {
        throw new Error('Error approving request');
      }
    } catch (error) {
      console.error('Approval Error:', error);
      alert('Failed to approve the request');
    }
  };

  return (
    <div style={styles.container}>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pending OPD Requests</h2>
      {requests.length > 0 ? (
        <div style={styles.inputContainer}>
          <ul style={styles.table}>
            {requests.map((request) => (
              <thead key={request._id}>
                <tr style={styles.headerRow}>
                  <th style={styles.headerCell}>
                    <div>
                      <strong>{request.patientName}</strong> requested a bed at <strong>{request.hospital}</strong>
                    </div>
                  </th>
                  <th style={styles.headerCell}>
                    <button
                      onClick={() => approveRequest(request._id)}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
                    >
                      Approve
                    </button>
                  </th>
                </tr>
              </thead>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-500">No pending requests for this hospital.</p>
      )}
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
  deleteButton: {
    padding: '5px 10px',
    background: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
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
};


export default Dashboard;

