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
        <nav className='w-full h-10 md:h-10 bg-gray-900 text-white fixed top-0 z-10'>
            <div className='container mx-auto px-4'>
                <div className='flex justify-between items-center h-10'>
                    <div className='text-xl font-bold'>मानुषी</div>
                    
                    {/* Hamburger menu for mobile */}
                    <div className='md:hidden'>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <ul className='hidden md:flex justify-center gap-6 text-md font-semibold'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/bedStatus">Real Time Bed Status</Link></li>
                        <li className="relative">
                            <button onClick={toggleOPDDropdown} className="flex items-center">
                                OPD
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isOPDDropdownOpen && (
                                <ul className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-20">
                                    <li><Link to="/opd/general" className="block px-4 py-2 hover:bg-gray-700">General OPD</Link></li>
                                    <li><Link to="/opd/specialty" className="block px-4 py-2 hover:bg-gray-700">Specialty OPD</Link></li>
                                    <li><Link to="/opd/emergency" className="block px-4 py-2 hover:bg-gray-700">Emergency OPD</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><Link to="/docs" onClick={() => setIsMenuOpen(false)}>Documentation</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>

                    {/* Search form */}
                    <form className="hidden md:block w-1/5">
                        <label htmlFor="default-search" className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-3 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Search Hospitals..." required style={{background:"#D1F4FA"}}/>
                            <button type="submit" className="text-white absolute right-1 bottom-1 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-0.5" style={{background:"#005792"}}>Search</button>
                        </div>
                    </form>
                </div>

                  {/* Mobile menu */}
                  {isMenuOpen && (
                      <div className='md:hidden bg-gray-900 mt-2 p-4 rounded-b-lg z-1500 w-1/2 absolute right-0'>
                          <ul className='flex flex-col gap-4 pb-4 text-md font-bold'>
                              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>Real Time Bed Status</Link></li>
                              <li>
                                  <button onClick={toggleOPDDropdown} className="flex items-center">
                                      OPD
                                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                      </svg>
                                  </button>
                                  {isOPDDropdownOpen && (
                                      <ul className="pl-4 mt-2">
                                          <li><Link to="/opd/general" onClick={() => setIsMenuOpen(false)} className="block py-1">General OPD</Link></li>
                                          <li><Link to="/opd/specialty" onClick={() => setIsMenuOpen(false)} className="block py-1">Specialty OPD</Link></li>
                                          <li><Link to="/opd/emergency" onClick={() => setIsMenuOpen(false)} className="block py-1">Emergency OPD</Link></li>
                                      </ul>
                                  )}
                              </li>
                              <li><Link to="/docs" onClick={() => setIsMenuOpen(false)}>Documentation</Link></li>
                              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                              <li><Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
                          </ul>
                          <form className="pb-4">
                              <label htmlFor="mobile-search" className="sr-only">Search</label>
                              <div className="relative">
                                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                      <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                      </svg>
                                  </div>
                                  <input type="search" id="mobile-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search" required />
                                  <button type="submit" className="text-white absolute right-1 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1">Search</button>
                              </div>
                          </form>
                      </div>
                  )}

                </div>
        </nav>
    </div>
    );
}

export default Navbar;