'use client';

import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Ilyes Fradi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Ilyes Fradi
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-6">
            Fullstack Developer
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Engineering student with a solid foundation in software engineering, seeking to apply my skills in frontend, backend, and mobile development to contribute to innovative projects. Passionate about technology, I am focused on continuously improving my skills and actively participating in the creation of effective and user-friendly solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-purple-500 hover:text-white transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 border-2 border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-purple-500 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/IlyesFradi01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/fradi-ilyes-94a061277/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:ilyesfradi0@gmail.com"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}

