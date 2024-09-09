import React, { useEffect, useState } from 'react';
import Footer from './Footer';

const BedStatus = () => {
  const [bedData, setBedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBedData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/hospital/bed-availability');
        const data = await response.json();
        setBedData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bed data:', error);
        setLoading(false);
      }
    };

    fetchBedData();


    const intervalId = setInterval(fetchBedData, 1000); 

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <div className='mt-48'>Loading...</div>;
  }

  return (
    <>
    <div className='mt-48 container mx-auto px-4'>
      <h1 className='text-3xl font-bold text-center mb-8' style={{color:"#FC5F2B"}}>Real-Time Bed Availability</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {bedData.length > 0 ? (
          bedData.map((hospital) => (
            <div key={hospital._id} className='bg-white shadow-md rounded-lg p-6'>
              <h2 className='text-xl font-bold mb-4'>{hospital.name}</h2>
              <p>Total Beds: {hospital.totalBeds}</p>
              <p>Available Beds: {hospital.availableBeds}</p>
              <p>Last Updated: {new Date(hospital.lastUpdated).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p className='text-center'>No data available</p>
        )}
      </div>
      
    </div>
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <div style={{flexGrow: 1}}>
    {/* Other page content here */}
  </div>
    <div style={{marginBottom:'0px',}} >
    <Footer />
    </div>
    </div>
    </>
  );
};

export default BedStatus;
