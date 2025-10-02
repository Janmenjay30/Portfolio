import { 
  CodeBracketIcon, 
  CommandLineIcon, 
  ServerIcon,
  CubeIcon 
} from '@heroicons/react/24/outline';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: CodeBracketIcon,
      color: 'blue',
      skills: ['JavaScript (ES6+)', 'C++', 'Python', 'HTML5', 'CSS3']
    },
    {
      title: 'Frontend',
      icon: CommandLineIcon,
      color: 'emerald',
      skills: ['React', 'Redux', 'TailwindCSS', 'Responsive Design', 'WCAG Accessibility']
    },
    {
      title: 'Backend & Databases',
      icon: ServerIcon,
      color: 'purple',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'RESTful APIs', 'WebSocket']
    },
    {
      title: 'Developer Tools',
      icon: CubeIcon,
      color: 'orange',
      skills: ['Git/GitHub', 'VS Code', 'Postman', 'React DevTools', 'Jupyter Notebook']
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      emerald: 'bg-emerald-100 text-emerald-600 border-emerald-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200'
    };
    return colors[color] || colors.blue;
  };

  const getIconBgColor = (color) => {
    const colors = {
      blue: 'bg-blue-500',
      emerald: 'bg-emerald-500',
      purple: 'bg-purple-500',
      orange: 'bg-orange-500'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Category Icon */}
              <div className={`${getIconBgColor(category.color)} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                <category.icon className="h-8 w-8 text-white" />
              </div>

              {/* Category Title */}
              <h3 className="text-xl font-bold text-secondary mb-4">{category.title}</h3>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(category.color)} transition-transform hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Always learning and exploring new technologies to stay current in the ever-evolving tech landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
