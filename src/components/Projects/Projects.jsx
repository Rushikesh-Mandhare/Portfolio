import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import "./Projects.css"

const items = [
  {
    id: 1,
    title: "Netflix Clone",
    image: "/Netflix.png",
    desc: "I created a Netflix Clone using HTML, CSS, and JavaScript with responsive design capable of running on phones.",
    code:"https://github.com/Rushikesh-Mandhare/Netflix-Clone.git"
  },
  {
    id: 2,
    title: "isitFAKE",
    image: "/isitFAKE.png",
    desc: "I created a model using Deep Learning to detect AI-generated fake images. Implemented a user-friendly interface using React.",
    code:"https://github.com/Rushikesh-Mandhare/isItFAKE-detect-AI-Generated-Images-using-CNN.git"
  },
  {
    id: 3,
    title: "IMDB Clone",
    image: "/imdb.png",
    desc: "I created an IMDB Clone using React.",
    code:"https://github.com/Rushikesh-Mandhare/IMDB_Clone.git"
  }
];

const Single = ({ item, scrollY }) => {
  const yPosTextContainer = useTransform(scrollY, [0, 1], [0, -300]);
  const yPosImageContainer = useTransform(scrollY, [0, 1], [0, -50]);

  return (
    <motion.section
      className='h-screen snap-center flex justify-center items-center'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        background:"linear-gradient(180deg, #111132, #0c0c1d)"
      }}
    >
      <div className="container flex items-center justify-center w-full h-full">
        <div className="wrap max-w-screen-lg m-auto flex flex-col md:flex-row gap-12">
          <motion.div className="imageContainer flex-1" style={{ y: yPosImageContainer }}>
            <img className='w-full' src={item.image} alt={item.title} />
          </motion.div>
          <motion.div className="textContainer flex-1 h-full flex items-center justify-center" style={{ y: yPosTextContainer }}>
            <div className="text-content p-6 text-center">
              <h2 className='text-4xl md:text-6xl mb-4'>{item.title}</h2>
              <p className="my-4">{item.desc}</p>
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              <a href={item.code} target="_blank" rel="noopener noreferrer">Get Code</a>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    initial: 0,
    threshold: 0.5,
    debounce: 50
  });
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  return (
    <div className='Projects relative' ref={ref} >
      <div className="progress sticky top-0 left-0 pt-12 pb-8 text-center text-orange-400 font-semibold text-5xl">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="P-Bar"></motion.div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id} scrollY={scrollYProgress} />
      ))}
    </div>
  );
};

export default Projects;
