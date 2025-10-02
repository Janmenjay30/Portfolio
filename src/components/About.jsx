import { AcademicCapIcon, SparklesIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-accent rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-white text-center">
                <AcademicCapIcon className="h-32 w-32 mx-auto mb-4 opacity-80" />
                <p className="text-2xl font-semibold">Computer Science</p>
                <p className="text-lg">Student & Developer</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent opacity-20 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary opacity-20 rounded-full"></div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-primary">
                  <AcademicCapIcon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Education</h3>
                <p className="text-gray-700">
                  <span className="font-semibold">B.Tech in Computer Engineering</span>
                  <br />
                  International Institute of Information Technology, Bhubaneswar
                  <br />
                  Expected Graduation: 2026 | CGPA: 7.92/10
                  <br />
                  <span className="text-sm text-gray-600">Focus: Full-Stack Development & Software Engineering</span>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-100 text-accent">
                  <SparklesIcon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Passion</h3>
                <p className="text-gray-700">
                  I'm passionate about building distributed systems and scalable web applications that solve real-world problems. 
                  With expertise in the MERN stack, I focus on creating fault-tolerant, low-latency solutions with clean architecture. 
                  I'm also an active competitive programmer with 500+ problems solved on LeetCode (Rating: 1811+, Top 7%), 
                  combining algorithmic thinking with practical development.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-primary">
                  <BriefcaseIcon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Career Goals</h3>
                <p className="text-gray-700">
                  Seeking opportunities as a <span className="font-semibold text-primary">Full-Stack Software Engineer</span> where 
                  I can contribute to building distributed, scalable systems. With experience in developing SaaS platforms, 
                  implementing secure authentication systems, and optimizing real-time data flows, I'm eager to join a team 
                  that values technical excellence, innovation, and continuous learning. Open to roles in backend, full-stack, 
                  or system design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
