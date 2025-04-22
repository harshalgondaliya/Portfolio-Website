import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/80 backdrop-blur-sm text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8 mb-8">
          <div className="text-center sm:text-left space-y-2 sm:space-y-4">
            <Link to="/" className="text-xl sm:text-2xl font-bold text-accent block">Harshal Gondaliya</Link>
            <p className="text-sm sm:text-base text-gray-300 max-w-md">
              Transforming ideas into intelligent solutions through AI & ML
            </p>
          </div>
          
          <div className="text-center sm:text-right space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-accent">Connect</h3>
            <div className="flex justify-center sm:justify-end space-x-4 sm:space-x-6">
              <a 
                href="https://github.com/harshalgondaliya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/harshalgondaliya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://x.com/harshal257368" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-gray-700 text-center">
          <p className="text-sm sm:text-base text-gray-300">
            © {currentYear} Harshal Gondaliya. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Designed with passion • Built with modern technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 