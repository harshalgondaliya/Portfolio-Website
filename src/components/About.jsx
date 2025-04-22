import { motion } from 'framer-motion';
import profileImage from '../assets/profile.png';

const About = () => {
  return (
    <section id="about" className="section min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 py-12 sm:py-15">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="heading text-center mb-4 sm:mb-8"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-16 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:w-1/3 flex justify-center lg:justify-end w-full"
          >
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-4 border-accent transform hover:scale-105 transition-transform duration-300">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 lg:w-2/3"
          >
            <motion.p 
              className="text-base sm:text-lg text-gray-300 leading-relaxed"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              I'm a Computer Engineering student with a deep passion for Artificial Intelligence and Machine Learning. My journey in tech is driven by the endless possibilities of AI - from building intelligent systems to creating predictive models that solve real-world problems. I believe in the transformative power of AI to make technology more intuitive and impactful.
            </motion.p>
            <motion.p 
              className="text-base sm:text-lg text-gray-300 leading-relaxed"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              With a strong foundation in both theoretical concepts and practical applications, I specialize in developing AI-powered solutions that bridge the gap between data and meaningful insights. Whether it's natural language processing, computer vision, or predictive analytics, I'm constantly exploring new ways to make machines smarter and more helpful.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
            >
              <motion.div 
                className="space-y-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-accent font-semibold text-lg">AI/ML Focus</h3>
                <ul className="space-y-2 text-gray-300">
                  <motion.li 
                    className="flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-accent group-hover:text-accent/80 transition-colors">▹</span>
                    <span className="group-hover:text-accent transition-colors">Machine Learning</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-accent group-hover:text-accent/80 transition-colors">▹</span>
                    <span className="group-hover:text-accent transition-colors">Deep Learning</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-accent group-hover:text-accent/80 transition-colors">▹</span>
                    <span className="group-hover:text-accent transition-colors">NLP & Computer Vision</span>
                  </motion.li>
                </ul>
              </motion.div>

              <motion.div 
                className="space-y-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-accent font-semibold text-lg">Technical Stack</h3>
                <ul className="space-y-2 text-gray-300">
                  <motion.li 
                    className="flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-accent group-hover:text-accent/80 transition-colors">▹</span>
                    <span className="group-hover:text-accent transition-colors">Python & TensorFlow</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-accent group-hover:text-accent/80 transition-colors">▹</span>
                    <span className="group-hover:text-accent transition-colors">Data Science Tools</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-accent group-hover:text-accent/80 transition-colors">▹</span>
                    <span className="group-hover:text-accent transition-colors">Cloud & Deployment</span>
                  </motion.li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 