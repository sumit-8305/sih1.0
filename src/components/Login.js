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
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div
        className="backdrop-blur-md bg-white/60 shadow-xl rounded-xl p-8 max-w-md w-full"
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
        }}
      >
        <div className="text-4xl font-bold mb-6 flex items-center justify-center text-black">
          
          Login
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-red-600 text-center">{error}</p>}
          <input
            type="text"
            value={uniqueId}
            onChange={(e) => setUniqueIdState(e.target.value)}
            placeholder="Hospital Unique ID"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition-all bg-transparent text-black placeholder-gray-600"
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition-all bg-transparent text-black placeholder-gray-600"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition-all bg-transparent text-black placeholder-gray-600"
          />
          <div className="flex justify-end">
            <button className="text-blue-600 hover:underline">Forgot Password?</button>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-blue-600"
            style={{ backgroundColor: '#005792' }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
