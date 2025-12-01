import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaWrench } from 'react-icons/fa';

const Skills = () => {
    const skills = [
        {
            category: 'Languages',
            icon: <FaCode />,
            items: ['C++', 'JavaScript', 'Python']
        },
        {
            category: 'Frontend',
            icon: <FaLaptopCode />,
            items: ['React', 'Redux', 'TailwindCSS', 'HTML5/CSS3']
        },
        {
            category: 'Backend',
            icon: <FaServer />,
            items: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT/OAuth']
        },
        {
            category: 'Database & CS',
            icon: <FaWrench />,
            items: ['MongoDB', 'MySQL', 'DSA', 'OOP', 'OS', 'DBMS']
        }
    ];

    return (
        <section id="skills" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-accent font-heading tracking-widest uppercase text-sm font-semibold">My Arsenal</span>
                    <h2 className="text-3xl md:text-4xl mt-2">Skills & Technologies</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card p-6 rounded-xl border border-white/5 hover:border-accent/50 transition-colors"
                        >
                            <div className="text-accent text-2xl mb-4 flex items-center gap-2 font-bold">
                                {skill.icon} {skill.category}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, i) => (
                                    <span key={i} className="bg-white/5 text-gray-300 text-sm px-3 py-1 rounded-full hover:bg-accent hover:text-white transition-colors cursor-default">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
