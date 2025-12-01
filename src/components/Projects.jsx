import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'IIITConnect - Collaboration Platform',
            desc: 'Architected a full-stack collaboration platform serving 100+ students with real-time chat, task management, and JWT auth. Engineered message queues with RabbitMQ for 99.5% delivery reliability.',
            tech: ['MERN Stack', 'Socket.IO', 'RabbitMQ', 'Redis'],
            links: { code: 'https://github.com/Janmenjay30/IIITCONNECT', live: 'https://iiitconnect.vercel.app' }
        },
        {
            title: 'EduStream - Ed-Tech Platform',
            desc: 'Designed a secure learning platform with distinct student/instructor modules. Implemented RBAC, JWT auth, and secure payments achieving 99.9% transaction reliability.',
            tech: ['React', 'Node.js', 'Express', 'MongoDB'],
            links: { code: 'https://github.com/Janmenjay30/EduNotion', live: '#' }
        },
        {
            title: 'Blueheads Marketing MVP',
            desc: 'Freelance project. Developed a production-ready MVP for a digital marketing agency enabling dynamic service pricing and automated email workflows.',
            tech: ['MERN Stack', 'Email Automation', 'Payment Gateway'],
            links: { code: '#', live: '#' }
        }
    ];

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-accent font-heading tracking-widest uppercase text-sm font-semibold">What I've Built</span>
                    <h2 className="text-3xl md:text-4xl mt-2">Featured Projects</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card rounded-xl overflow-hidden border border-white/5 hover:border-accent/50 hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                <div className="w-full h-full flex items-center justify-center text-gray-600 font-heading font-bold text-xl opacity-50">
                                    {project.title.split(' ')[0]}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.desc}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-medium text-accent-purple bg-accent-purple/10 px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a href={project.links.code} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-accent transition-colors">
                                        <FaGithub /> Code
                                    </a>
                                    <a href={project.links.live} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-accent transition-colors">
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
