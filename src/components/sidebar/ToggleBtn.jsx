import React from 'react';
import { motion } from 'framer-motion';

const ToggleBtn = ({ open, setOpen }) => {
  return (
    <div>
      <button
        className='w-12 h-12 rounded-full fixed left-6 top-6 bg-transparent border-none flex items-center justify-center'
        onClick={() => setOpen(prev => !prev)}
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              close: { 
                d: "M 2 2.5 L 20 2.5",
                transition: { duration: 0.3 }
              },
              open: { 
                d: "M 3 16.5 L 17 2.5",
                transition: { duration: 0.3 }
              }
            }}
            animate={open ? 'open' : 'close'}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              close: { opacity: 1, transition: { delay: 0.3 } },
              open: { opacity: 0, transition: { delay: 0 } }
            }}
            animate={open ? 'open' : 'close'}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              close: { 
                d: "M 2 16.346 L 20 16.346",
                transition: { duration: 0.3 }
              },
              open: { 
                d: "M 3 2.5 L 17 16.346",
                transition: { duration: 0.3 }
              }
            }}
            animate={open ? 'open' : 'close'}
          />
        </svg>
      </button>
    </div>
  );
}

export default ToggleBtn;
