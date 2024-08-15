import React from 'react';
import "./Hero.css";
import { motion } from 'framer-motion';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
};

const sliderVariants = {
    initial: {
        x: "0%", // Start from the left edge
    },
    animate: {
        x: "-200%", // Move to the left by 200% of its width
        transition: {
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
        }
    }
};

const imageVariants = {
    initial: {
        opacity: 0,
        scale: 0.8,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            delay: 0.5, // Delay before starting the animation
        }
    }
};

const Hero = () => {
    // Replace with your resume file URL
    const resumeUrl = "https://drive.google.com/file/d/1J4A4fm_97Cwly_fRooHKzGbpVacWz-a5/view?usp=sharing";

    return (
        <div className="hero flex relative overflow-x-hidden">
            <div className="image h-full absolute top-0 right-0 w-45 flex items-center">
                {/* <img className="w-full z-20 h-full object-cover" src="/hero.png" alt="Hero" /> */}
                <div className="relative w-96 h-96 rounded-full overflow-hidden ml-10 flex items-center justify-center">
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="400" // Increased SVG width
                        height="400" // Increased SVG height
                        viewBox="0 0 400 400" // Adjust viewBox accordingly
                        className="absolute"
                        animate={{
                            rotate: [0, 360],  // Full rotation
                        }}
                        transition={{
                            duration: 20,       // Duration of the animation
                            repeat: Infinity,   // Infinite loop
                            repeatType: "reverse", // Reverse after each cycle
                        }}
                    >
                        <motion.circle
                            cx="200" // Center X position
                            cy="200" // Center Y position
                            r="180"  // Increased radius
                            stroke="#00ff99"
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                            animate={{
                                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                repeatType: "mirror",  // Goes back and forth
                            }}
                        />
                    </motion.svg>
                    <motion.img
                        className="img object-cover rounded-full absolute"
                        src="/hero2.png"
                        alt="Hero"
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        style={{
                            width: '77%',  // Adjust width to fit within SVG
                            height: '90%', // Adjust height to fit within SVG
                            objectFit: 'cover', // Ensure the image covers the container
                            position: 'absolute', // Ensure the image is positioned within the container
                            top: '6%', // Optional: adjust positioning if needed
                            left: '10%', // Optional: adjust positioning if needed
                        }}
                    />
                </div>
            </div>
            <div className="wrapper max-w-screen-lg h-full m-auto px-4 flex-1 flex flex-col justify-center relative">
                <motion.div className="text h-full flex flex-col justify-center gap-4 w-1/2" variants={textVariants} initial="initial" animate="animate">
                
                    <motion.h2 className="text-white text-3xl">Hi, My Name is</motion.h2>
                    <motion.h2 className="text-purple-700 text-3xl">Rushikesh Mandhare</motion.h2>
                    <motion.h2 className="text-white text-3xl">And I am a</motion.h2>
                    <motion.h1 className="text-white ttt text-7xl">Web Developer</motion.h1>
                    <motion.div className="btn flex gap-4">
                        <motion.a
                            href={resumeUrl}
                            download="Rushikesh_Mandhare_Resume.pdf"
                            className="py-2 px-4 border border-white rounded-lg bg-transparent text-white cursor-pointer font-light z-10"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Download Resume
                        </motion.a>
                        <motion.a
                            className="py-2 px-4 border border-white rounded-lg bg-transparent text-white cursor-pointer font-light z-10"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={`#Contact`}
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer absolute bottom-0 whitespace-nowrap text-white opacity-10 text-[300px] w-1/2 font-bold z-0 select-none" variants={sliderVariants} initial="initial" animate="animate">
                Web Developer Programmer Coder
            </motion.div>
        </div>
    )
}

export default Hero;
