import React ,{useState} from 'react';
import './Navbar.css'; 

const Navbar = ({ hospitalName,setHospitalName }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uniqueId, setUniqueId] = useState('');

  const handleLogout = () => {
  sessionStorage.clear();
  setIsLoggedIn(false);
  setHospitalName('');
  setUniqueId('');
};

  return (
    <header>
      <nav className="navbar">
        <ul className="nav-list">
          <div>
          <button onClick={handleLogout}><a href="/login">logout</a></button>
          </div>
          <div>
          <button><a href="/">Go back to homepage</a></button>
          </div>
          <div>
            <button><a href="/inventory">Manage Inventory</a></button>
          </div>
          <li className='nav1'>{hospitalName ? `${hospitalName} Dashboard` : 'Your Dashboard'}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
