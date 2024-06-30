import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const MouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', MouseMove);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('mousemove', MouseMove);
        };
    }, []);

    return (
        <motion.div className='w-12 h-12 border rounded-full border-white fixed z-50' animate={{ x:position.x+10, y: position.y+10}}>

        </motion.div>
    )
}

export default Cursor
