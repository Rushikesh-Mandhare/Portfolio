import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="Navbar h-24 ">
      <Sidebar/>
      <div className="container max-w-screen-lg m-auto flex items-center justify-between px-4 h-full text-lg">
        <motion.span className='title'
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
        >
          My Portfolio
        </motion.span>
        <div className="social flex space-x-4">
          <a href="https://www.linkedin.com/in/shivam-bhagwat-b27924278/" target="_blank" rel="noopener noreferrer">
            <img className='w-6' src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/shivaa101" target="_blank" rel="noopener noreferrer">
            <img className='w-6 filter invert' src="/github.png" alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;