import React from 'react';
import './Navbar.css'; 

const Navbar = ({ hospitalName }) => {
  return (
    <header>
      <nav className="navbar">
        <ul className="nav-list">
          <div>
          <button><a href="/login">logout</a></button>
          </div>
          <div>
          <button><a href="/">Go back to homepage</a></button>
          </div>
          <li className='nav1'>{hospitalName ? `${hospitalName} Dashboard` : 'Your Dashboard'}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
