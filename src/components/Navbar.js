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
        <nav className='w-full h-12 md:h-16 shadow-2xl border-black/30 border border-t-0 bg-white/30 backdrop-blur-xl text-black fixed top-0 z-50'>
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
                    <ul className='hidden md:flex justify-center gap-6 text-md font-semibold'>
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
                                    <li className='hover:text-[#FC5F2B]'><Link to="/opd/general" className="block px-4 py-2 hover:bg-transparent">General OPD</Link></li>
                                    <li className='hover:text-[#FC5F2B]'><Link to="/opd/specialty" className="block px-4 py-2 hover:bg-transparent">Specialty OPD</Link></li>
                                    <li className='hover:text-[#FC5F2B]'><Link to="/opd/emergency" className="block px-4 py-2 hover:bg-transparent">Emergency OPD</Link></li>
                                </ul>
                            )}
                        </li>
                        <li className='hover:text-[#FC5F2B]'><Link to="/docs" onClick={() => setIsMenuOpen(false)}>Documentation</Link></li>
                        <li className='hover:text-[#FC5F2B]'><Link to="/contact">Contact</Link></li>
                        <li className='hover:text-[#FC5F2B]'><Link to="/login">Login</Link></li>
                    </ul>

                    {/* Search form */}
                    <label class="mb-2 mr-0 mt-0 relative bg-white/30 min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-0 px-2 rounded-2xl gap-24 shadow-2xl focus-within:border-gray-500"
                        for="search-bar">
                        <input id="search-bar" placeholder="Search for hospitals..."
                            class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-transparent backdrop-blur-xl"/>
                        <button
                            class="w-full md:w-auto px-6 py-3 bg-[#FC5F2B] border-[#FC5F2B] hover:border-black hover:bg-black text-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-2xl transition-all disabled:opacity-70">
                            
                            <div class="relative">

                                <div
                                    class="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                                    <svg class="opacity-0 animate-spin w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                </div>

                                <div class="flex items-center transition-all opacity-1 valid:"><span
                                        class="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                                        Search
                                    </span>
                                </div>

                            </div>
                            
                        </button>
                    </label>
                </div>

                  {/* Mobile menu */}
                  {isMenuOpen && (
                      <div className='md:hidden bg-white/30 backdrop-blur-xl mt-2 p-4 rounded-b-lg z-1500 w-1/2 absolute right-0'>
                          <ul className='flex flex-col gap-4 pb-4 text-md font-bold'>
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