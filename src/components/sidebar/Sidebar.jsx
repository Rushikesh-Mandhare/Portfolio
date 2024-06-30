import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ToggleBtn from './ToggleBtn';
import Links from './Links';
import "./Sidebar.css"

const variants = {
    open: {
        clipPath: "circle(1000px at 50px 50px)",
        visibility: "visible",
        transition: {
            type: "spring",
            stiffness: 20,
        }
    },
    close: {
        clipPath: "circle(30px at 50px 50px)",
        visibility: "visible",
        transition: {
            delay: 0.2, // Delay before starting closing animation
            type: "spring",
            stiffness: 400,
            damping: 40,
            clipPath: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                duration: 1.5 // Duration for clipPath animation
            }
        },
    },
    hidden: {
        clipPath: "circle(0px at 50px 50px)",
        visibility: "hidden",
    }
};


const Sidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <motion.div className='sidebar fixed z-10' initial="hidden" animate={open ? "open" : "close"} variants={variants}>
            {/* Background overlay */}
            <motion.div className="bg bg-white w-80 fixed top-0 left-0 right-0 bottom-0"
                style={{
                    clipPath: open ? "circle(1000px at 50px 50px)" : "circle(30px at 50px 50px)",
                    visibility: open ? "visible" : "hidden",
                    zIndex: -1,
                }}
                variants={variants}
                animate={open ? "open" : "close"}
            >
                {/* Content of the sidebar */}
                <Links isOpen={open} />
            </motion.div>
            {/* Toggle button */}
            <ToggleBtn open={open} setOpen={setOpen} />
        </motion.div>
    );
};
export default Sidebar;
