import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-accent font-heading tracking-widest uppercase text-sm font-semibold">Who I Am</span>
                    <h2 className="text-3xl md:text-4xl mt-2">About Me</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            I am a <strong className="text-white">Final Year Computer Science Student</strong> with a passion for building scalable web applications and solving complex algorithmic problems.
                            My journey involves a deep dive into <strong className="text-white">Data Structures and Algorithms</strong>, where I've achieved <strong className="text-white">Knight rank with a rating of 1860 on LeetCode</strong>.
                        </p>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            As a <strong className="text-white">Full Stack Developer</strong>, I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product.
                        </p>

                        <div className="bg-card p-6 rounded-xl border-l-4 border-accent mb-6">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                <FaGraduationCap className="text-accent" /> Education
                            </h3>
                            <p className="text-white font-medium">B.Tech in Computer Engineering</p>
                            <p className="text-gray-400 text-sm">International Institute of Information Technology, Bhubaneswar</p>
                            <p className="text-accent-purple text-sm font-medium mt-1">CGPA: 7.92 | Nov'22 - Present</p>
                        </div>

                        <div className="bg-card p-6 rounded-xl border-l-4 border-accent-purple">
                            <h3 className="text-xl font-bold mb-2">Achievements</h3>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li>• Ranked in the <strong className="text-white">Top 6%</strong> of users on LeetCode.</li>
                                <li>• Secured <strong className="text-white">2nd place</strong> in Code-O-Lympics at IIIT Bhubaneswar.</li>
                                <li>• Sports Secretary (2024-25), organized Grand Championship & KRIDA.</li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 gap-6"
                    >
                        {[
                            { number: '700+', label: 'LeetCode Problems' },
                            { number: '1860', label: 'LeetCode Rating (Knight)' },
                            { number: '91.8%', label: '12th Grade (Science)' }
                        ].map((stat, index) => (
                            <div key={index} className="bg-card p-8 rounded-2xl border border-white/5 text-center hover:border-accent/50 transition-colors group">
                                <h3 className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">{stat.number}</h3>
                                <p className="text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
