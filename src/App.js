import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory'; 
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import DocumentationPage from './components/DocumentationPage';
import AboutUs from './components/aboutUs';
import BedStatus from './components/BedStatus';
import Contact from './components/Contact';
import Licensing from './components/Documentation/Licensing';
import PrivacyPolicy from './components/Documentation/PrivacyPolicy';
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute
import OPDRequest from './components/OPD';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hospitalName, setHospitalName] = useState('');
  const [uniqueId, setUniqueId] = useState('');

useEffect(() => {
  const loggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
  const storedHospitalName = sessionStorage.getItem('hospitalName');
  const storedUniqueId = sessionStorage.getItem('uniqueId');
  
  console.log('Logged in:', loggedIn); // Debug log
  console.log('Stored hospital name:', storedHospitalName); // Debug log
  console.log('Stored unique ID:', storedUniqueId); // Debug log
  
  if (loggedIn) {
    setIsLoggedIn(true);
    setHospitalName(storedHospitalName);
    setUniqueId(storedUniqueId);
  } else {
    setIsLoggedIn(false);
  }
}, []);


  return (
    <Router>
      <div>
        <ConditionalNavbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/bedStatus" element={<BedStatus />} />
          <Route 
            path="/login" 
            element={
              !isLoggedIn ? (
                <Login
                  setIsLoggedIn={setIsLoggedIn}
                  setHospitalName={setHospitalName}
                  setUniqueId={setUniqueId}
                />
              ) : (
                <Navigate to="/dashboard" replace />
              )
            } 
          />
          <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
            <Route path="/dashboard" element={
              <Dashboard
                setHospitalName={setHospitalName}
                uniqueId={uniqueId}
              />
            } />
            <Route path="/inventory" element={<Inventory />} />
          </Route>
          
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/licensing" element={<Licensing />} />
          <Route path="/docs" element={<DocumentationPage />} />
          <Route path='/opd' element={<OPDRequest />} />
        </Routes>
      </div>
    </Router>
  );
};

function ConditionalNavbar() {
  const location = useLocation();
  const hideNavbarRoutes = ['/dashboard', '/inventory'];

  console.log('Current route:', location.pathname);

  if (hideNavbarRoutes.includes(location.pathname)) {
    return null;
  }

  return <Navbar />;
}

export default App;
