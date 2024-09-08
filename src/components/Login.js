import React, { useState,useEffect } from 'react';
import { login } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn, setHospitalName, setUniqueId }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [uniqueId, setUniqueIdState] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      setHospitalName(localStorage.getItem('hospitalName'));
      setUniqueId(localStorage.getItem('uniqueId'));
    }
  }, [setIsLoggedIn, setHospitalName, setUniqueId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username, password, uniqueId);
      localStorage.setItem('token', response.token);
      localStorage.setItem('hospitalId', response.hospitalId);
      localStorage.setItem('hospitalName', response.hospitalName);
      localStorage.setItem('uniqueId', uniqueId);
      setUniqueId(uniqueId);
      setHospitalName(response.hospitalName);
      setIsLoggedIn(true);
      navigate('/dashboard'); // Redirect to dashboard after login
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
