import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import DocumentationPage from './components/DocumentationPage';
import AboutUs from './components/aboutUs';
import BedStatus from './components/BedStatus';
import Contact from './components/Contact';
import Licensing from './components/Documentation/Licensing';
import PrivacyPolicy from './components/Documentation/PrivacyPolicy';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hospitalName, setHospitalName] = useState('');
  const [uniqueId, setUniqueId] = useState('');

  return (
    <Router>
      
      <div>
        <ConditionalNavbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/bedStatus" element={<BedStatus/>} />
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
          <Route 
            path="/dashboard" 
            element={
              isLoggedIn ? (
                <Dashboard
                  setHospitalName={setHospitalName}
                  uniqueId={uniqueId}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy/>} />
          <Route path="/licensing" element={<Licensing/>} />
          <Route path="/docs" element={<DocumentationPage />} />
          
        </Routes>
      </div>
    </Router>
  );
};

function ConditionalNavbar() {
  const location = useLocation();
  if (location.pathname === '/dashboard') {
    return null;
  }
  return <Navbar />;
}

export default App;
