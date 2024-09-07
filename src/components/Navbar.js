import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

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
    <Link to={to} onClick={onClick} className="block py-1">
      {text}
    </Link>
  </motion.li>
);
const NavItems = ({ to, text, onClick }) => (
  <motion.li whileHover="hover" variants={linkVariantz}>
    <Link to={to} onClick={onClick} className="block py-1">
      {text}
    </Link>
  </motion.li>
);

const SearchForm = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative w-8"
      initial={false}
      animate={isExpanded ? "expanded" : "collapsed"}
    >
      <motion.div
        className="flex items-center absolute right-0"
        variants={{
          expanded: { width: "200px" },
          collapsed: { width: "32px" }
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.input
          type="text"
          placeholder="Search hospitals..."
          className="w-full px-3 py-2 bg-transparent border-b border-gray-300 outline-none"
          variants={{
            expanded: { opacity: 1, width: "168px" },
            collapsed: { opacity: 0, width: "0px" }
          }}
        />
        <motion.button
          className="p-2 bg-transparent focus:outline-none"
          whileHover={{ scale: 1.1, color: '#FC5F2B' }}
          whileTap={{ scale: 0.9 }}
          animate={{ color: isExpanded ? '#FC5F2B' : 'currentColor' }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Search className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className='w-full h-20 shadow-2xl border-black/30 border border-t-0 bg-transparent backdrop-blur-xl text-black fixed top-0 z-50'>
        <div className='container mx-auto px-4 h-full'>
          <div className='flex justify-between items-center h-full'>
            <motion.div 
              className='text-3xl font-bold'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{color:'grey'}}
            >
              <Link to="/">manushi</Link>
            </motion.div>

            {/* Desktop menu */}
            <ul className='hidden lg:flex justify-right gap-8 text-sm font-medium'>
              <div className="mt-1 "><NavItem to="/bedStatus" text="Real Time Bed Status" /></div>
              <div className="mt-1"><NavItem to="/opd" text="OPD" /></div>
              <div className="mt-1"><NavItem to="/docs" text="Documentation" /></div>
              <div className="mt-1"><NavItem to="/login" text="Login" /></div>
              <div className='bg-[#f65f2b] pl-4 pr-4 pt-1 pb-1 text-white rounded-sm '>
                  <NavItems to="/contact" text="Join Us" />
              </div>
            </ul>

            

            {/* Hamburger menu for mobile and tablet */}
            <div className='lg:hidden'>
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Mobile and tablet menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className='lg:hidden bg-white/30 backdrop-blur-xl mt-2 p-4 rounded-b-lg z-50 w-full absolute left-0'
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
              >
                <ul className='flex flex-col gap-4 pb-4 text-sm font-medium'>
                  <NavItem to="/" text="Home" onClick={() => setIsMenuOpen(false)} />
                  <NavItem to="/bedStatus" text="Real Time Bed Status" onClick={() => setIsMenuOpen(false)} />
                  <NavItem to="/opd" text="OPD" onClick={() => setIsMenuOpen(false)} />
                  <NavItem to="/docs" text="Documentation" onClick={() => setIsMenuOpen(false)} />
                  <NavItem to="/contact" text="Contact" onClick={() => setIsMenuOpen(false)} />
                  <NavItem to="/login" text="Login" onClick={() => setIsMenuOpen(false)} />
                </ul>

                <SearchForm />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;