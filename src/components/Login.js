import React, { useState } from 'react';
import { login } from '../services/api';  

const Login = ({ setIsLoggedIn, setHospitalName, setUniqueId }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [uniqueId, setUniqueIdState] = useState(''); 
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform the login logic
      await login(username, password);
      setUniqueId(uniqueId); 
      setIsLoggedIn(true);
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div
    style={{
      background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='768' height='696' viewBox='0 0 768 696' fill='none'%3E%3Cpath d='M70.4613 131C1.66127 92.2 -13.5387 -63 10.9613 -115H912.461L968.461 689C905.128 698.167 756.261 705 667.461 659C556.461 601.5 555.854 563.797 525.961 498.5C493 426.5 442.5 380.5 339 380.5C269.457 380.5 226.182 313.365 206.961 260C160.5 131 156.461 179.5 70.4613 131Z' fill='%23D1F4FC'/%3E%3C/svg%3E") no-repeat right top`,
      backgroundSize: 'contain',
      height: '100vh', 
      backgroundPosition: 'right top',
      backgroundAttachment: 'fixed', 
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
    }}
    >
      <div className='border-2 border-gray-700 shadow-2xl rounded-2xl p-8'>
      <div className="text-4xl font-bold" style={{ color: 'black', marginBottom: '20px', marginRight: '310px' }}>
        <h1>Login</h1>
      </div>
      
      <div style={{ maxWidth: '400px', width: '100%' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
          <input
            type="text"
            value={uniqueId}
            onChange={(e) => setUniqueIdState(e.target.value)}
            placeholder="Hospital Unique ID"
            required 
            style={{
              padding: '10px',
              margin: '10px 0',
              color: 'black',
              border: '1px solid black',
              borderRadius: '5px',
              fontSize: '16px',
            }}
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            style={{
              padding: '10px',
              margin: '10px 0',
              color: 'black',
              border: '1px solid black',
              borderRadius: '5px',
              fontSize: '16px',
            }}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            style={{
              padding: '10px',
              margin: '10px 0',
              color: 'black',
              border: '1px solid black',
              borderRadius: '5px',
              fontSize: '16px',
            }}
          ></input>
          <button className='text-start font-semibold text-blue-600 m-2 ml-0'><a href='https://youtu.be/tdgrxfz0F6Q?si=nYtJzmXBeizfRX_K'>Forgot Password?</a></button>
          <button className="font-semibold bg-[#D1F4FA] hover:bg-blue-200 active:bg-blue-300" 
            type="submit"
            style={{
              padding: '10px',
              margin: '10px 0',
              color: 'black',
              border: '1px solid black',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Login;
