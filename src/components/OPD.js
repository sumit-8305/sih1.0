import React, { useState } from 'react';

const OPDRequest = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    contact: '',
    hospital: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/opd/requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Request submitted successfully!');
    } else {
      const errorData = await response.json(); // Capture response error details
      alert(`Error: ${errorData.message || 'Error submitting request.'}`);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong.');
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Request an OPD Bed</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Patient Name:</label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Contact:</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Hospital:</label>
            <select
              name="hospital"
              value={formData.hospital}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-500"
              required
            >
              <option value="">Select a Hospital</option>
              <option value="Max-vaishali">Max-vaishali</option>
              <option value="kailash">kailash</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit Request
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default OPDRequest;
