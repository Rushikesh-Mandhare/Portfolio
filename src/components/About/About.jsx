import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const variants = {
  hidden: { 
    opacity: 0,
    y: 10 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div className="About w-full h-full flex items-center justify-center flex-col" style={{
      background: "linear-gradient(180deg, #111132, #0c0c1d)"
    }}>
      <motion.h1 
        className="heading text-5xl font-bold mb-7 "
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        About Me
      </motion.h1>
      <motion.div 
        className="text w-8/12 text-lg"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <motion.p className="mb-4" variants={variants}>
          My name is Rushikesh Ganesh Mandhare. I am currently pursuing my B-Tech at MIT Academy of Engineering, specializing in Computer Science.
        </motion.p>
        <motion.p className="mb-4" variants={variants}>
          Web development is my passion, and I have completed numerous projects using React. I enjoy creating dynamic and responsive web applications that provide excellent user experiences.
        </motion.p>
        <motion.p className="r mb-4" variants={variants}>
          Besides web development, I have a keen interest in learning new technologies and improving my skills in various domains. I am always excited to take on new challenges and collaborate with like-minded individuals to create impactful projects.
        </motion.p>
        <motion.p className="mb-4" variants={variants}>
          Feel free to explore my portfolio to see some of the projects I have worked on. If you would like to get in touch, don't hesitate to contact me. Let's build something great together!
        </motion.p>
      </motion.div>
    </div>
  );
}

export default About;
