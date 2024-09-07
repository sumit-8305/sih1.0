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
    // Send login request with username, password, and uniqueId
    const response = await login(username, password, uniqueId);

    // Store login-related data in localStorage
    localStorage.setItem('token', response.token);  // Store JWT token
    localStorage.setItem('hospitalId', response.hospitalId);  // Store hospitalId
    localStorage.setItem('hospitalName', response.hospitalName);  // Store hospitalName

    // Set the state accordingly
    setUniqueId(uniqueId);  // Use the value entered by the user
    setHospitalName(response.hospitalName);
    setIsLoggedIn(true);
  } catch (error) {
    console.error("Login error:", error.response?.data?.message || error.message);
    setError('Invalid credentials. Please try again.');
  }
};



  return (
    <div
      style={{
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div
        className="backdrop-blur-md bg-white/60  rounded-xl p-8 max-w-md w-full"
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
        }}
      >
        <div className="text-5xl font-normal mb-20 flex flex-col items-center justify-center text-black">
          Login
          <h5 className='text-sm text-zinc-600 mt-2'>Log in to your workspace</h5>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-red-600 text-center">{error}</p>}
          <input
            type="text"
            value={uniqueId}
            onChange={(e) => setUniqueIdState(e.target.value)}
            placeholder="Hospital Unique ID"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg transition-all bg-transparent text-black placeholder-gray-600"
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg transition-all bg-transparent text-black placeholder-gray-600"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg transition-all bg-transparent text-black placeholder-gray-600"
          />
          <div className="flex justify-end">
            <button className="mb-8 hover:underline text-black active:scale-95">Forgot Password?</button>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white rounded-lg transition-all bg-gradient-to-r from-orange-400 via-orange-600 to-red-500"
          
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
