'use client';

import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'GOTOGREEN',
    description: 'A platform for Startups to get funding and support',
    technologies: ['TypeScript', 'React', 'Next.js'],
    icon: '🌱',
    screenshot: '/projects/GOTO.png', 
    
    featured: true,
  },
  {
    title: 'Sky-Ascenseurs',
    description: 'Elevator management system built with TypeScript. A modern solution for elevator monitoring and control systems.',
    technologies: ['TypeScript', 'React', 'Node.js'],
    icon: '🏢',
    screenshot: '/projects/SKY_ASC.png', 
    
    featured: true,
  },
  {
    title: 'IbnSina',
    description: 'Healthcare management application built with TypeScript. Designed for medical professionals and healthcare institutions.',
    technologies: ['TypeScript', 'React', 'Node.js'],
    icon: '🏥',
    screenshot: '/projects/IBN.png', 
  
    featured: false,
  },
  {
    title: 'Full Stack Web & Mobile Application',
    description: 'Developed a web and mobile-based HR attendance system featuring QR code check-in/check-out functionality, real-time attendance tracking, leave management, and seamless communication between employees and HR through a secure administrative web portal.',
    technologies: ['React.js', 'Bootstrap', 'Node.js', 'Express.js', 'REST/RESTful API', 'MongoDB', 'Flutter'],
    icon: '🚀',
    screenshot: '/projects/RHH.jpeg',
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            A selection of projects showcasing my skills and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-[1.02] flex flex-col"
            >
              {/* Project Screenshot */}
              <div className="relative w-full h-48 overflow-hidden bg-gray-900">
                {project.screenshot ? (
                  <Image
                    src={project.screenshot}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl">{project.icon}</div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

