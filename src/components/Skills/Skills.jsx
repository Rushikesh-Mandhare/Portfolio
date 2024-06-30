import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css'; // Assuming you have an App.css file for custom styles

const Skills = () => {
    const technicalControls = useAnimation();
    const softControls = useAnimation();
    const { ref: technicalRef, inView: technicalInView } = useInView({ threshold: 0.1 });
    const { ref: softRef, inView: softInView } = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (technicalInView) {
            technicalControls.start('visible');
        } else {
            technicalControls.start('hidden');
        }
    }, [technicalControls, technicalInView]);

    useEffect(() => {
        if (softInView) {
            softControls.start('visible');
        } else {
            softControls.start('hidden');
        }
    }, [softControls, softInView]);

    const technicalSkills = [
        { name: 'HTML', percentage: 90, color: '#e57132', logo: '/html.png' },
        { name: 'CSS', percentage: 80, color: '#00adef', logo: '/css.png' },
        { name: 'JavaScript', percentage: 85, color: '#ffe238', logo: 'javascript.png' },
        { name: 'React', percentage: 75, color: '#00c6e5', logo: 'react.png' },
        { name: 'Bootstrap', percentage: 70, color: '#8041d8', logo: 'bootstap.png' },
        { name: 'Tailwind CSS', percentage: 60, color: '#00c6e5', logo: 'tailwind.png' },
        { name: 'MongoDB', percentage: 80, color: '#48BB78', logo: 'mongodb.png' }
    ];

    const softSkills = [
        { name: 'Communication', percentage: 60, color: '#55b32c' },
        { name: 'Problem Solving', percentage: 80, color: '#9F7AEA' },
        { name: 'Leadership', percentage: 75, color: '#F6E05E' },
        { name: 'Creativity', percentage: 85, color: '#00c6e5' },
        { name: 'Positive Attitude', percentage: 90, color: '#e57132' },
        { name: 'Time Management', percentage: 90, color: '#5b1d76' }
    ];

    const calculateStrokeDasharray = (percentage) => {
        const circumference = 2 * Math.PI * 55;
        const dashLength = (percentage / 100) * circumference;
        return { dashLength, circumference };
    };

    const technicalVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    };

    const softVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div className="flex flex-wrap items-center justify-center min-h-screen Skills">
            {/* Technical Skills Section */}
            <motion.div
                ref={technicalRef}
                className="max-w-md w-full p-6 rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6"
                initial="hidden"
                animate={technicalControls}
                variants={technicalVariants}
                transition={{ duration: 0.5 }}
            >
                <h2 className="txt text-2xl font-bold heading-font mb-8">Technical Skills</h2>

                {technicalSkills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="mb-4"
                        initial="hidden"
                        animate={technicalControls}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center">
                                <img src={skill.logo} alt={`${skill.name} logo`} className="w-6 h-6 mr-2" />
                                <span className="font-semibold">{skill.name}</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-400">{skill.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-300 rounded-full h-2">
                            <motion.div
                                className="h-full rounded-full"
                                style={{ background: `${skill.color}` }}
                                initial={{ width: 0 }}
                                animate={{ width: technicalInView ? `${skill.percentage}%` : 0 }}
                                transition={{ duration: 0.5 }}
                            ></motion.div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Soft Skills Section */}
            <motion.div
                ref={softRef}
                className="soft w-2/6 p-6 rounded-lg shadow-lg"
                initial="hidden"
                animate={softControls}
                variants={softVariants}
                transition={{ duration: 0.5 }}
            >
                <h2 className="txt text-2xl font-bold mb-8 heading-font">Soft Skills</h2>

                <div className="circle flex flex-wrap gap-9">
                    {softSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center"
                            initial="hidden"
                            animate={softControls}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <svg viewBox="0 0 120 120" className="w-32 h-32 mb-2">
                                {/* Transparent Circle Outline */}
                                <circle
                                    cx="60"
                                    cy="60"
                                    r="55"
                                    fill="transparent"
                                    stroke="#fff"
                                    strokeWidth="8"
                                />
                                {/* Filled Circle Progress */}
                                <motion.circle
                                    cx="60"
                                    cy="60"
                                    r="55"
                                    fill="transparent"
                                    stroke={skill.color}
                                    strokeWidth="8"
                                    strokeDasharray={calculateStrokeDasharray(100).dashLength + " " + calculateStrokeDasharray(100).circumference}
                                    strokeDashoffset={calculateStrokeDasharray(100).dashLength}
                                    initial={{ strokeDashoffset: calculateStrokeDasharray(100).dashLength }}
                                    animate={{ strokeDashoffset: calculateStrokeDasharray(100 - skill.percentage).dashLength }}
                                    transition={{ duration: 1, delay: index * 0.1 }}
                                    transform="rotate(-90 60 60)"
                                />
                                {/* Text inside the circle */}
                                <text x="60" y="60" textAnchor="middle" dominantBaseline="middle" className="text-lg font-bold" fill={skill.color}>
                                    {skill.percentage}%
                                </text>
                            </svg>
                            <span className="font-semibold">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Skills;
