import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6 text-center">
                <div className="mb-12">
                    <span className="text-accent font-heading tracking-widest uppercase text-sm font-semibold">Get In Touch</span>
                    <h2 className="text-3xl md:text-4xl mt-2">Contact Me</h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <p className="text-gray-400 text-lg mb-10">
                        I'm currently looking for SDE opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <a href="mailto:janmejaypanigrahi22@gmail.com" className="btn-primary inline-block">
                        Say Hello
                    </a>

                    <div className="mt-16 flex justify-center gap-8">
                        {[
                            { icon: <FaGithub />, href: 'https://github.com/Janmenjay30', label: 'GitHub' },
                            { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/janmenjay-panigrahi-6806ab28a/', label: 'LinkedIn' },
                            { icon: <FaCode />, href: 'https://leetcode.com/u/Janmenjay30/', label: 'LeetCode' },
                            { icon: <FaTwitter />, href: '#', label: 'Twitter' }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                className="text-2xl text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
                                title={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
