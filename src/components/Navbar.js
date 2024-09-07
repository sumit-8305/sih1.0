import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOPDDropdownOpen, setIsOPDDropdownOpen] = useState(false);

  const toggleOPDDropdown = () => {
    setIsOPDDropdownOpen(!isOPDDropdownOpen);
  };

  return (
    <div>
      <nav className='w-full h-12 md:h-16 shadow-2xl border-black/30 border border-t-0 bg-transparent backdrop-blur-xl text-black fixed top-0 z-50'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center h-12 md:h-16'>
            <div className='text-xl font-bold'><Link to="/">मानुषी</Link></div>

            {/* Hamburger menu for mobile */}
            <div className='md:hidden'>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Desktop menu */}
            <ul className='hidden md:flex justify-center gap-4 xl:gap-6 text-sm font-medium xl:ml-96'>
              <li className='hover:text-[#FC5F2B]'><Link to="/bedStatus">Real Time Bed Status</Link></li>
              <li className="relative">
                <button onClick={toggleOPDDropdown} className="flex items-center hover:text-[#FC5F2B]">
                  OPD
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOPDDropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white/30 backdrop-blur-xl rounded-md shadow-lg py-1 z-20">
                    <li className='hover:text-[#FC5F2B]'><Link to="/opd/general" className="block px-4 py-2 hover:bg-transparent" onClick={toggleOPDDropdown}>General OPD</Link></li>
                    <li className='hover:text-[#FC5F2B]'><Link to="/opd/specialty" className="block px-4 py-2 hover:bg-transparent" onClick={toggleOPDDropdown}>Specialty OPD</Link></li>
                    <li className='hover:text-[#FC5F2B]'><Link to="/opd/emergency" className="block px-4 py-2 hover:bg-transparent" onClick={toggleOPDDropdown}>Emergency OPD</Link></li>
                  </ul>
                )}
              </li>
              <li className='hover:text-[#FC5F2B]'><Link to="/docs" onClick={() => setIsMenuOpen(false)}>Documentation</Link></li>
              <li className='hover:text-[#FC5F2B]'><Link to="/contact">Contact</Link></li>
              <li className='hover:text-[#FC5F2B]'><Link to="/login">Login</Link></li>
            </ul>

            {/* Search form */}
            <label className="hidden md:flex relative bg-transparent min-w-sm max-w-2xl flex-col md:flex-row items-center justify-center border py-0 px-2 rounded-2xl gap-4 shadow-2xl focus-within:border-gray-500" htmlFor="search-bar">
              <input id="search-bar" placeholder="Search for hospitals..."
                className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-transparent backdrop-blur-xl" />
              <button
                className="w-full md:w-auto px-6 py-3 bg-[#FC5F2B] border-[#FC5F2B] hover:border-black hover:bg-black text-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-2xl transition-all disabled:opacity-70">
                <div className="relative">
                  <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                    <svg className="opacity-0 animate-spin w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                  <div className="flex items-center transition-all opacity-1 valid:">
                    <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">Search</span>
                  </div>
                </div>
              </button>
            </label>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className='md:hidden bg-white/30 backdrop-blur-xl mt-2 p-4 rounded-b-lg z-50 w-full absolute right-0'>
              <ul className='flex flex-col gap-4 pb-4 text-sm font-medium'>
                <li className='hover:text-[#FC5F2B]'><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                <li className='hover:text-[#FC5F2B]'><Link to="/bedStatus" onClick={() => setIsMenuOpen(false)}>Real Time Bed Status</Link></li>
                <li>
                  <button onClick={toggleOPDDropdown} className="flex items-center hover:text-[#FC5F2B]">
                    OPD
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOPDDropdownOpen && (
                    <ul className="pl-4 mt-2">
                      <li className='hover:text-[#FC5F2B]'><Link to="/opd/general" onClick={() => setIsMenuOpen(false)} className="block py-1">General OPD</Link></li>
                      <li className='hover:text-[#FC5F2B]'><Link to="/opd/specialty" onClick={() => setIsMenuOpen(false)} className="block py-1">Specialty OPD</Link></li>
                      <li className='hover:text-[#FC5F2B]'><Link to="/opd/emergency" onClick={() => setIsMenuOpen(false)} className="block py-1">Emergency OPD</Link></li>
                    </ul>
                  )}
                </li>
                <li className='hover:text-[#FC5F2B]'><Link to="/docs" onClick={() => setIsMenuOpen(false)}>Documentation</Link></li>
                <li className='hover:text-[#FC5F2B]'><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                <li className='hover:text-[#FC5F2B]'><Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
              </ul>

              <label className="mb-2 mr-0 mt-0 relative bg-transparent min-w-sm max-w-2xl flex flex-col sm:flex-row md:flex-row items-center justify-center border py-0 px-2 rounded-2xl gap-4 shadow-2xl focus-within:border-gray-500" htmlFor="search-bar-mobile">
                <input id="search-bar-mobile" placeholder="Search for hospitals..."
                  className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-transparent backdrop-blur-xl" />
                <button
                  className="w-full md:w-auto px-6 py-3 bg-[#FC5F2B] border-[#FC5F2B] hover:border-black hover:bg-black text-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-2xl transition-all disabled:opacity-70">
                  <div className="relative">
                    <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                      <svg className="opacity-0 animate-spin w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                    <div className="flex items-center transition-all opacity-1 valid:">
                      <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">Search</span>
                    </div>
                  </div>
                </button>
              </label>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
