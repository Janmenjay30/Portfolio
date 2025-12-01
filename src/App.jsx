import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="min-h-screen bg-primary">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <footer className="py-8 text-center text-gray-500 border-t border-white/5">
                <p>&copy; 2025 DevPortfolio. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
