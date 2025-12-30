'use client';

import { Code, Database, Smartphone, Globe, Layers } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code,
    skills: ['Next.js', 'React.js', 'Bootstrap', 'HTML', 'CSS', 'Tailwind CSS'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Backend',
    icon: Database,
    skills: ['Node.js', 'Express.js', 'Nest.js', 'REST/RESTful API', 'PHP'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Database',
    icon: Layers,
    skills: ['MongoDB', 'MySQL'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    skills: ['Flutter' ,'Android'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Languages',
    icon: Globe,
    skills: ['French', 'English', 'Arabic'],
    color: 'from-yellow-500 to-orange-500',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg">
            A comprehensive toolkit for building modern applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

