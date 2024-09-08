import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const linkVariants = {
  hover: { scale: 1.05, color: '#FC5F2B', transition: { duration: 0.2 } },
};

const linkVariantz = {
  hover: { scale: 1.05, color: '#000000', transition: { duration: 0.2 } },
};

const NavItem = ({ to, text, onClick }) => (
  <motion.li whileHover="hover" variants={linkVariants}>
    <Link to={to} onClick={onClick} className="block py-2 px-4 text-center">
      {text}
    </Link>
  </motion.li>
);

const NavItems = ({ to, text, onClick }) => (
  <motion.li whileHover="hover" variants={linkVariantz}>
    <Link to={to} onClick={onClick} className="block py-2 px-4 text-center">
      {text}
    </Link>
  </motion.li>
);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY >= window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`w-full h-20 fixed top-0 z-50 ${scrolled ? 'bg-white text-black' : 'bg-transparent text-white'} transition-colors duration-300`}>
        <div className="container px-5 h-full flex justify-between items-center max-w-[calc(100%-90px)] lg:max-w-full">
          {/* Logo */}
          <motion.div className="text-4xl font-bold" whileHover={{ scale: 1.05 }}>
            <Link to="/" style={{ color: scrolled ? 'black' : 'grey' }}>manushi</Link>
          </motion.div>

          {/* Desktop menu */}
          <ul className="hidden lg:flex gap-8 text-sm font-medium ${scrolled ? 'bg-white text-black' : 'bg-transparent text-white'} transition-colors duration-300">
            <NavItem to="/bedStatus" text="Real Time Bed Status" />
            <NavItem to="/opd" text="OPD" />
            <NavItem to="/docs" text="Documentation" />
            <NavItem to="/login" text="Login" />
            <div className="bg-[#f65f2b] px-4 py-1 text-white rounded-sm">
              <NavItems to="/contact" text="Join Us" />
            </div>
          </ul>

          {/* Hamburger menu for mobile */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-20 left-1/4 transform -translate-x-1/2 w-[calc(100%-40px)] max-w-md bg-white bg-opacity-40 backdrop-blur-lg shadow-lg rounded-lg z-50"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
            >
              <ul className="flex flex-col gap-4 p-4 text-sm font-medium">
                <NavItem to="/" text="Home" onClick={() => setIsMenuOpen(false)} />
                <NavItem to="/bedStatus" text="Real Time Bed Status" onClick={() => setIsMenuOpen(false)} />
                <NavItem to="/opd" text="OPD" onClick={() => setIsMenuOpen(false)} />
                <NavItem to="/docs" text="Documentation" onClick={() => setIsMenuOpen(false)} />
                <NavItem to="/login" text="Login" onClick={() => setIsMenuOpen(false)} />
                <div className="bg-[#f65f2b] px-4 py-1 text-white rounded-sm">
                  <NavItems to="/contact" text="Join Us" />
                </div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}

export default Navbar;
