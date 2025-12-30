'use client';

import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Engineering Program in Software Engineering ',
    institution: 'Polytechnique School',
    location: 'Sousse, Tunisia',
    period: '2024 – Present',
    description: 'Currently pursuing engineering degree with focus on software engineering and information systems',
  },
  {
    degree: 'Bachelor of Science Software Engineering and Information Systems',
    institution: 'Polytechnique School ',
    location: 'Tunis, Tunisia',
    period: '2021 – 2024',
    description: 'Bachelor of Science in Computer Science',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-400 text-lg">
            My academic journey
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">{edu.degree}</h3>
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-400">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

