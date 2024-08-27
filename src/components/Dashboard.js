import React, { useState, useEffect } from 'react';
import { updateBedAvailability, getBedAvailability } from '../services/api';
import NavbarAdm from './Admin/Navbar';
import Inventory from './Inventory';

const Dashboard = ({ setHospitalName, uniqueId , hospitalName}) => {
  const [hospitals, setHospitals] = useState([]);
  const [availableBeds, setAvailableBeds] = useState(0);
  const [currentHospital, setCurrentHospital] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchHospitalNameByUniqueId = async (uniqueId) => {
    try {
      const response = await fetch('http://localhost:5000/api/hospital/bed-availability');
      const hospitals = await response.json();
      
      const hospital = hospitals.find(hospital => hospital.uniqueId === uniqueId);
      if (hospital) {
        setHospitalName(hospital.name);
        // Add a 2-second delay before setting the current hospital
        setTimeout(() => {
          setCurrentHospital(hospital);
          setIsLoading(false);
        }, 2000);
      } else {
        setError('Hospital not found');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error fetching hospital data:', error);
      setError('Error fetching hospital data');
      setIsLoading(false);
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

  const getBedAvailabilityColor = (availableBeds) => {
    if (availableBeds < 5) return 'red';
    if (availableBeds >= 5 && availableBeds <= 20) return 'yellow';
    return 'lightgreen';
  };
  
  const getBedAvailabilityColortext = (availableBeds) => {
    if (availableBeds < 5) return 'white';
    if (availableBeds >= 5 && availableBeds <= 20) return 'black';
    return 'black';
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
        {isLoading ? (
          <p>Loading current hospital details...</p>
        ) : currentHospital ? (
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
        ) : null}
        <Inventory  uniqueId={uniqueId} hospitalName={hospitalName} />
        <h3
          style={{
            padding: '5px 20px',
            background: 'white',
            margin: '10px 0',
            color: 'black',
            border: '1px solid black',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            width: '20%',
            textAlign: 'center',
          }}
        >
        
          All Hospitals
        </h3>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <table style={{
            padding: '5px 20px',
            background: '#D1F4FA',
            margin: '10px 0',
            color: 'black',
            border: '1px solid black',
            borderRadius: '5px',
            fontSize: '16px',
            borderCollapse: 'collapse',
          }}>
            <thead>
              <tr 
                style={{
                  background: '#D1F4FA',
                  color: 'black',
                  border: '1px solid black',
                }}
              >
                <th
                  style={{
                    padding: '10px',
                    border: '1px solid black',
                    textAlign: 'center',
                  }}
                >
                  Hospital Name
                </th>
                <th
                  style={{
                    padding: '10px',
                    border: '1px solid black',
                    textAlign: 'center',
                  }}
                >
                  Available Beds
                </th>
                <th
                  style={{
                    padding: '10px',
                    border: '1px solid black',
                    textAlign: 'center',
                  }}
                >
                  Total Beds
                </th>
              </tr>
            </thead>
            <tbody>
              {hospitals.map((hospital) => (
                <tr key={hospital._id}
                  style={{
                    background: 'white',
                    color: 'black',
                    border: '1px solid black',
                  }}
                >
                  <td
                    style={{
                      padding: '10px',
                      border: '1px solid black',
                      textAlign: 'center',
                    }}
                  >
                    {hospital.name}
                  </td>
                  <td
                    style={{
                      padding: '10px',
                      border: '1px solid black',
                      textAlign: 'center',
                      color: getBedAvailabilityColortext(hospital.availableBeds),
                      backgroundColor: getBedAvailabilityColor(hospital.availableBeds), 
                    }}
                  >
                    {hospital.availableBeds}
                  </td>
                  <td
                    style={{
                      padding: '10px',
                      border: '1px solid black',
                      textAlign: 'center',
                    }}
                  >
                    {hospital.totalBeds}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;