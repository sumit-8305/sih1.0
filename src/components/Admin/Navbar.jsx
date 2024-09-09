import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ setIsLoggedIn, setUniqueId }) => {
  const navigate = useNavigate();
  const [hospitalName, setHospitalName] = useState('');

  useEffect(() => {
    // Fetch the hospital name from local storage
    const storedHospitalName = localStorage.getItem('hospitalName');
    if (storedHospitalName) {
      setHospitalName(storedHospitalName);
    }
  }, []);

  const handleLogout = () => {
    // Clear session storage and local storage
    sessionStorage.clear();
    localStorage.clear();

    // Update state variables
    setIsLoggedIn(false);
    setHospitalName('');
    setUniqueId('');

    // Navigate to the login page
    navigate('/login');
  };

  return (
    <header>
      <nav className="navbar">
        <ul className="nav-list">
          <div>
            <button onClick={handleLogout}>
              <a href="/login">Logout</a>
            </button>
          </div>
          <div>
            <button>
              <a href="/">Go back to homepage</a>
            </button>
          </div>
          <div>
            <button>
              <a href="/inventory">Manage Inventory</a>
            </button>
          </div>
          <li className="nav1">{hospitalName ? `${hospitalName} Dashboard` : 'Your Dashboard'}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;