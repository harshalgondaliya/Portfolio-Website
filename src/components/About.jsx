import { motion } from 'framer-motion';
import profileImage from '../assets/profile.png';

const About = () => {
  return (
    <section id="about" className="section bg-secondary min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="heading text-center mb-16"
        >
          About Me
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a Computer Engineering student with a deep passion for Artificial Intelligence and Machine Learning. My journey in tech is driven by the endless possibilities of AI - from building intelligent systems to creating predictive models that solve real-world problems. I believe in the transformative power of AI to make technology more intuitive and impactful.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With a strong foundation in both theoretical concepts and practical applications, I specialize in developing AI-powered solutions that bridge the gap between data and meaningful insights. Whether it's natural language processing, computer vision, or predictive analytics, I'm constantly exploring new ways to make machines smarter and more helpful.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8"
            >
              <div className="space-y-4">
                <h3 className="text-accent font-semibold text-lg">AI/ML Focus</h3>
                <ul className="space-y-3 text-gray-300">
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 group"
                  >
                    <span className="text-accent group-hover:text-accent/80 transition-colors">▹</span>
                    <span className="group-hover:text-accent transition-colors">Machine Learning</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 group"
                  >
                    <span className="text-accent group-hover:text-accent/80 transition-colors">▹</span>
                    <span className="group-hover:text-accent transition-colors">Deep Learning</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 group"
                  >
                    <span className="text-accent group-hover:text-accent/80 transition-colors">▹</span>
                    <span className="group-hover:text-accent transition-colors">NLP & Computer Vision</span>
                  </motion.li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-accent font-semibold text-lg">Technical Stack</h3>
                <ul className="space-y-3 text-gray-300">
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 group"
                  >
                    <span className="text-accent group-hover:text-accent/80 transition-colors">▹</span>
                    <span className="group-hover:text-accent transition-colors">Python & TensorFlow</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 group"
                  >
                    <span className="text-accent group-hover:text-accent/80 transition-colors">▹</span>
                    <span className="group-hover:text-accent transition-colors">Data Science Tools</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 group"
                  >
                    <span className="text-accent group-hover:text-accent/80 transition-colors">▹</span>
                    <span className="group-hover:text-accent transition-colors">Cloud & Deployment</span>
                  </motion.li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <h3 className="text-accent font-semibold text-lg mb-4">Current Focus</h3>
              <div className="flex flex-wrap gap-3">
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm hover:bg-accent/20 transition-colors"
                >
                  AI Integration
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm hover:bg-accent/20 transition-colors"
                >
                  Neural Networks
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm hover:bg-accent/20 transition-colors"
                >
                  Data Analysis
                </motion.span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-64 h-64 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-4 border-accent transform hover:scale-105 transition-transform duration-300">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 