import React, { useState } from 'react';
import { login } from '../services/api';  // Assuming you have a login API function

const Login = ({ setIsLoggedIn, setHospitalName, setUniqueId }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [uniqueId, setUniqueIdState] = useState(''); // Local state for uniqueId
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform the login logic
      await login(username, password);
      setUniqueId(uniqueId); // Set uniqueId in the parent component
      setIsLoggedIn(true);
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <div style={{display: 'flex',justifyContent: 'center', color: 'black',  marginTop: "50px" }}>
        <h1>Login</h1>
      </div>
      <br />
      
      <div style={{display: 'flex',justifyContent: 'center', color: 'black'}}>

    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        value={uniqueId}
        onChange={(e) => setUniqueIdState(e.target.value)}
        placeholder="Hospital Unique ID"
        required 
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
      <br />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
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
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
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
      <br />
      <button type="submit"
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
        background: '#D1F4FA',
      }}
      >Login</button>
    </form>
    </div>
    </div>
  );
};

export default Login;

