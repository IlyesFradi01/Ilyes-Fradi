'use client';

import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Go2Green',
    location: 'Tunisia',
    period: '10/2025 – Present',
    description: [
      'Developing robust and scalable web and mobile applications',
      'Handling both front-end and back-end development',
      'Working with React.js, Node.js, Express.js, MongoDB, and Flutter',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: '3DWAVE',
    location: 'Tunisia',
    period: '07/2025 – 12/2025',
    description: [
      'Developed and maintained full-stack applications using modern JavaScript frameworks',
      'Implemented REST/RESTful APIs and integrated third-party services',
      'Built responsive web applications using React.js and Bootstrap',
      'Worked with MongoDB for database management',
    ],
  },
  {
    title: 'Full Stack Developer - Intern',
    company: 'Imaxeam',
    location: 'Tunisia',
    period: '02/2024 – 06/2024',
    description: [
      'Developed robust and scalable web and mobile applications',
      'Front-End: React.js, Bootstrap',
      'Back-End: Node.js, Express.js, REST/RESTful API',
      'Databases: MongoDB',
      'Mobile: Flutter',
    ],
  },
  {
    title: 'Intern',
    company: 'Tunisia Telecom Sousse',
    location: 'Sousse, Tunisia',
    period: '07/2023 – 09/2023',
    description: [
      'Developed a web-based stock management application',
      'Front-End: HTML, CSS, Bootstrap',
      'Back-End: PHP',
      'Databases: MySQL',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-lg">
            My journey in software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-400 flex items-start gap-2">
                        <span className="text-purple-500 mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

