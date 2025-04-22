import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-[50vh] sm:min-h-screen flex items-start sm:items-center justify-center pt-24 sm:pt-0 pb-8 sm:pb-0">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4"
          >
            Hi, I'm <span className="text-accent">Harshal Gondaliya</span>
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-3 sm:mb-4 md:mb-6"
          >
            Artificial Intelligence & Machine Learning Developer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-2"
          >
            I develop innovative AI/ML solutions and create beautiful, responsive, and user-friendly applications using modern technologies and best practices.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Link
                to="/projects"
                className="bg-accent text-white px-4 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-accent/90 transition-all duration-300 text-xs sm:text-base w-36 sm:w-auto text-center shadow-lg hover:shadow-accent/20"
              >
                View My Work
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Link
                to="/contact"
                className="border border-accent text-accent px-4 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-accent/10 transition-all duration-300 text-xs sm:text-base w-36 sm:w-auto text-center shadow-lg hover:shadow-accent/20"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 