import { ArrowDownTrayIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Greeting */}
          <div className="animate-fade-in-up">
            <p className="text-accent font-semibold text-lg mb-2">Hi, I'm</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary mb-4">
              Janmenjay
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-6">
              Aspiring Software Engineer
            </h2>
          </div>

          {/* Bio */}
          <div className="max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            <p className="text-lg text-gray-700 leading-relaxed">
              Computer Engineering student at IIIT Bhubaneswar with a passion for building scalable web applications. 
              Specializing in <span className="font-semibold text-primary">Full-Stack Development</span> with the 
              MERN stack. I love creating efficient, user-friendly solutions and have solved 500+ problems on LeetCode. 
              Always eager to learn and contribute to impactful projects.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
            <button
              onClick={() => handleScroll('projects')}
              className="group flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <RocketLaunchIcon className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              View Projects
            </button>
            <a
              href="/JanmenjayResume.pdf"
              download="Janmenjay_Panigrahi_Resume.pdf"
              className="group flex items-center gap-2 bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <ArrowDownTrayIcon className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 animate-bounce">
            <button
              onClick={() => handleScroll('about')}
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Scroll to about section"
            >
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
