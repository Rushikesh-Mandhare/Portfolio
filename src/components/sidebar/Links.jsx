import React from 'react';
import { motion } from 'framer-motion';
import "./Sidebar.css"

const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3 // Delay children animation when opening
      }
    },
    close: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        delayChildren: 0.1 // Adjust delay to make the closing animation slower
      }
    }
  };

const itemVariants = {
  open: { 
    y: 0,
    opacity: 1 
  },
  close: { 
    y: 50, 
    opacity: 0 
  }
};

const Links = ({ isOpen }) => {
  const items = [
    "Homepage",
    "Skills",
    "Projects",
    "Contact",
    "About"
  ];

  return (
    <motion.div className='Links absolute flex flex-col justify-center items-center gap-5 w-full h-full' variants={variants} animate={isOpen ? 'open' : 'close'}>
      {items.map(item => (
        <motion.a
          key={item}
          className='link text-3xl text-black font-medium'
          href={`#${item}`}
          variants={itemVariants}
          whileHover={{scale:1.1}}
          whileTap={{scale:0.95}}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
