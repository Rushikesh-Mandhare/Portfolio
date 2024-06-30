import React, { useEffect, useRef, useState } from 'react';
import * as emailjs from 'emailjs-com';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./Contact.css";

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

const Contact = () => {
    const formRef = useRef();
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f4hpb4x', 'template_ngktocg', formRef.current, 'jPEyH0_d2uwAU65hE')
            .then((result) => {
                console.log(result.text);
                setSubmissionStatus('success');
                formRef.current.reset(); // Optionally reset the form after successful submission
            }, (error) => {
                console.log(error.text);
                setSubmissionStatus('error');
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center overflow-hidden" style={{
            background: "linear-gradient(180deg, #111132, #0c0c1d)"
        }}>
            <div className="contact max-w-4xl w-full p-8 rounded-lg shadow-lg">
                {/* Left Section */}
                <motion.div className="col-span-1" ref={ref} initial="hidden" animate={controls} variants={variants}>
                    <div className="txt">
                        <motion.h1 className="text-5xl font-bold mb-7">Contact Me</motion.h1>
                        <motion.div variants={variants}>
                            <motion.h2 className="text-2xl font-bold">Mail</motion.h2>
                            <motion.p variants={variants}>rushikesh.mandhare@mitaoe.ac.in</motion.p>
                        </motion.div>
                        <motion.div className="mt-4" variants={variants}>
                            <motion.h2 className="text-2xl font-bold">Phone No</motion.h2>
                            <motion.p variants={variants}>9822396918</motion.p>
                        </motion.div>
                        <motion.div className="mt-4" variants={variants}>
                            <motion.h2 className="text-2xl font-bold">Address</motion.h2>
                            <motion.p variants={variants}>Kanti Chanchal Niwas, <br /> Alandi Road, kale colony, <br /> Alandi, MAHARASHTRA 412105 <br /> India.</motion.p>
                        </motion.div>
                    </div>
                </motion.div>
                {/* Right Section */}
                <motion.div className="col-span-1" ref={ref} initial="hidden" animate={controls} variants={variants}>
                    <div className="form mt-7">
                        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                            <div>
                                <label htmlFor="user_name" className="block font-medium"></label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    placeholder='Name'
                                    required
                                    className="w-full px-4 py-2 bg-transparent border rounded focus:outline-none focus:border-white"
                                />
                            </div>
                            <div>
                                <label htmlFor="user_email" className="block font-medium"></label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    placeholder='Email'
                                    required
                                    className="w-full px-4 py-2 bg-transparent border rounded focus:outline-none focus:border-white"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block font-medium"></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder='Message'
                                    required
                                    className="w-full px-4 py-2 border bg-transparent rounded focus:outline-none focus:border-white"
                                ></textarea>
                            </div>
                            <motion.input 
                                type="submit" 
                                value="Send" 
                                className="w-full bg-orange-500 hover:bg-orange-600 text-black font-medium py-2 px-4 rounded focus:outline-none cursor-pointer"
                                variants={variants}
                            />
                            {submissionStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-green-600"
                                >
                                    Message sent successfully!
                                </motion.div>
                            )}
                            {submissionStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-red-600"
                                >
                                    There was an error sending your message. Please try again later.
                                </motion.div>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
