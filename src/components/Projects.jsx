import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const projects = [
    {
      title: 'IIITConnect - Campus Utility Platform',
      description: 'Developed a distributed MERN-based SaaS platform reducing fragmented campus tools by 70%. Built responsive React dashboards with data visualizations and implemented WebSocket-based messaging with pub/sub model for real-time communication.',
      techStack: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'WebSocket', 'REST APIs'],
      github: 'https://github.com/Janmenjay30/IIITCONNECT',
      demo: '#',
      color: 'blue'
    },
    {
      title: 'StudyNotion - Ed-Tech Platform',
      description: 'Designed and built a secure learning platform with distinct student/instructor modules. Implemented JWT authentication, RBAC, and input validation for reliable data security. Integrated media storage & payments with 99.9% reliable transactions.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary', 'Payment Gateway'],
      github: 'https://github.com/Janmenjay30/EduNotion',
      demo: '#',
      color: 'emerald'
    },
    {
      title: 'CE-Bootcamp - Student Showcase Hub',
      description: 'Built a frontend web application to showcase student profiles, skills, and projects, improving collaboration. Focused on clean UI, semantic HTML, responsive layouts, and accessibility standards (WCAG).',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'EJS', 'Responsive Design', 'WCAG'],
      github: 'https://github.com/Priyanshukumaranand/ce_bootcamp_ejs',
      demo: 'https://ce-bootcamp-ejs.onrender.com/',
      color: 'purple'
    },
    {
      title: 'LeetCode Problem Solving',
      description: '500+ problems solved with a rating of 1811+ and ranked in the Top 7% of users. Strong foundation in Data Structures & Algorithms, including advanced topics like dynamic programming, graphs, and system design.',
      techStack: ['C++', 'Python', 'Algorithms', 'Data Structures', 'Problem Solving'],
      github: 'https://github.com/Janmenjay30',
      demo: 'https://leetcode.com/u/janmejaypanigrahi22/',
      color: 'orange'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      emerald: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
      rose: 'from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects demonstrating my technical skills and problem-solving abilities
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Project Header with Gradient */}
              <div className={`bg-gradient-to-r ${getColorClasses(project.color)} p-6 text-white`}>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-4 min-h-[80px]">{project.description}</p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-600 mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-100">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors font-medium"
                  >
                    <CodeBracketIcon className="h-5 w-5" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-700 hover:text-accent transition-colors font-medium"
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Want to see more?</p>
          <a
            href="https://github.com/Janmenjay30"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            <CodeBracketIcon className="h-5 w-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
