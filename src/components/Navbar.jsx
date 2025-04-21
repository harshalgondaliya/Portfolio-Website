import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-secondary/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-2xl font-bold text-accent">Portfolio</a>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-accent transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-accent transition-colors">About</a>
            <a href="#skills" className="text-white hover:text-accent transition-colors">Skills</a>
            <a href="#projects" className="text-white hover:text-accent transition-colors">Projects</a>
            <a href="#contact" className="text-white hover:text-accent transition-colors">Contact</a>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block text-white hover:text-accent transition-colors">Home</a>
              <a href="#about" className="block text-white hover:text-accent transition-colors">About</a>
              <a href="#skills" className="block text-white hover:text-accent transition-colors">Skills</a>
              <a href="#projects" className="block text-white hover:text-accent transition-colors">Projects</a>
              <a href="#contact" className="block text-white hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 