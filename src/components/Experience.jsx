import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            company: 'Blueheads Marketing',
            role: 'Freelance Full-Stack Developer',
            period: 'Nov 2025',
            desc: [
                'Developed a production-ready MVP for a digital marketing agency using the MERN stack, enabling dynamic service pricing, cart management, and automated email workflows.',
                'Optimized the user booking flow to drive conversion, successfully generating 5 qualified leads within the first two weeks of the prototype launch.'
            ]
        }
    ];

    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-accent font-heading tracking-widest uppercase text-sm font-semibold">My Journey</span>
                    <h2 className="text-3xl md:text-4xl mt-2">Work Experience</h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-card p-8 rounded-2xl border border-white/5 hover:border-accent/50 transition-colors relative pl-8 md:pl-12 border-l-4 border-l-accent"
                        >
                            <div className="absolute left-0 top-8 w-4 h-4 bg-accent rounded-full -translate-x-[10px] shadow-[0_0_10px_rgba(99,102,241,0.5)]" />

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                <div>
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <FaBriefcase className="text-accent text-sm" /> {exp.role}
                                    </h3>
                                    <p className="text-accent-purple font-medium">{exp.company}</p>
                                </div>
                                <span className="text-gray-500 text-sm font-mono bg-white/5 px-3 py-1 rounded-full">{exp.period}</span>
                            </div>

                            <ul className="space-y-2">
                                {exp.desc.map((item, i) => (
                                    <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                                        <span className="text-accent mt-1.5">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
