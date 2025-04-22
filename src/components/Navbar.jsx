import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-secondary/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-accent" onClick={handleLinkClick}>Portfolio</Link>
          
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
            <Link to="/" className="text-white hover:text-accent transition-colors" onClick={handleLinkClick}>Home</Link>
            <Link to="/about" className="text-white hover:text-accent transition-colors" onClick={handleLinkClick}>About</Link>
            <Link to="/skills" className="text-white hover:text-accent transition-colors" onClick={handleLinkClick}>Skills</Link>
            <Link to="/projects" className="text-white hover:text-accent transition-colors" onClick={handleLinkClick}>Projects</Link>
            <Link to="/contact" className="text-white hover:text-accent transition-colors" onClick={handleLinkClick}>Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block text-white hover:text-accent transition-colors" onClick={handleLinkClick}>Home</Link>
              <Link to="/about" className="block text-white hover:text-accent transition-colors" onClick={handleLinkClick}>About</Link>
              <Link to="/skills" className="block text-white hover:text-accent transition-colors" onClick={handleLinkClick}>Skills</Link>
              <Link to="/projects" className="block text-white hover:text-accent transition-colors" onClick={handleLinkClick}>Projects</Link>
              <Link to="/contact" className="block text-white hover:text-accent transition-colors" onClick={handleLinkClick}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 