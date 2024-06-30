import React, { useRef, useState, useEffect } from 'react';
import './Paralax.css';

const Paralax = ({ type }) => {
  const ref = useRef();
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offsetTop = ref.current ? ref.current.offsetTop : 0;
    const scrollPos = scrollTop - offsetTop;
    setScrollY(scrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const yMountains = `${scrollY * 0.5}px`;
  const yStars = `${scrollY}px`;
  const yPlanets = `${scrollY * 1.5}px`;

  return (
    <div
      className="Paralax w-full h-screen relative flex justify-center items-center"
      ref={ref}
      style={{
        background: type === "Skills"
          ? "linear-gradient(180deg, #111132, #0c0c1d)"
          : "linear-gradient(180deg, #111132, #505064)"
      }}
    >
      <h1 className="txt2 text-7xl z-10">
        {type === "Skills" ? "My Skills Are" : "My Projects Are"}
      </h1>
      <div className="mountain" style={{ transform: `translateY(${yMountains})` }} />
      <div className="stars" style={{ transform: `translateY(${yStars})` }} />
      <div className="planets" style={{ transform: `translateY(${yPlanets})` }} />
      <div style={{ height: '200vh' }} /> {/* Temporary content to ensure scrolling */}
    </div>
  );
};

export default Paralax;
