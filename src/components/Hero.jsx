import React from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-accent-purple/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-accent-purple font-heading tracking-widest uppercase text-sm font-semibold mb-4 block"
                    >
                        Welcome to my world
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                    >
                        Hi, I'm <br />
                        <span className="text-gradient">Janmenjay Panigrahi</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl"
                    >
                        Final Year Computer Engineering Student at IIIT Bhubaneswar. I build scalable full-stack applications and solve complex algorithmic problems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a href="#projects" className="btn-primary">View Work</a>
                        <a href="#contact" className="btn-outline">Contact Me</a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-16 inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl"
                    >
                        <div className="p-3 bg-accent/10 rounded-lg text-accent-purple">
                            <FaCode size={24} />
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">1860</div>
                            <div className="text-gray-400 text-sm">LeetCode Knight</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
