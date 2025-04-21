import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-accent">Harshal Gondaliya</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            Artificial Intelligence & Machine Learning Developer
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            I develop innovative AI/ML solutions and create beautiful, responsive, and user-friendly applications using modern technologies and best practices.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/projects"
              className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="border border-accent text-accent px-8 py-3 rounded-lg hover:bg-accent/10 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 