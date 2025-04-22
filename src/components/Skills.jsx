// Import the images directly
import cloudIcon from '../assets/cloud.png';
import githubIcon from '../assets/github.svg';
import mlIcon from '../assets/ml.png';
import { useEffect, useRef } from 'react';
import '../styles/Skills.css';

const skills = {
  ai: [
    { name: 'AI/ML', icon: mlIcon },
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Data Processing', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  ],
  frontend: [
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  ],
  backend: [
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  ],
  tools: [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: githubIcon },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  ],
  deployment: [
    { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
    { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
    { name: 'Cloud Computing', icon: cloudIcon },
  ]
};

const Skills = () => {
  const sectionRef = useRef(null);
  const categoryRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Once animated, unobserve the element
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    categoryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      categoryRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="section min-h-screen flex items-center bg-gradient-to-b from-primary to-secondary"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 sm:py-17">
        <div className="text-center mb-8">
          <br /><br />
          <h2 className="heading text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Skilled & Passionate Full-Stack Developer with expertise in the MERN Stack. Building dynamic, scalable, and high-performance web applications with modern technologies.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-12">
              {/* AI/ML Section */}
              <div 
                ref={el => categoryRefs.current[0] = el}
                className="skill-category opacity-0 translate-x-[-50px] transition-all duration-800"
              >
                <h3 className="text-2xl font-semibold mb-6 text-center capitalize text-white">
                  AI/ML
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {skills.ai.map((skill, index) => (
                    <div
                      key={index}
                      className="skill-card bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center transform transition-all duration-500 hover:scale-105"
                    >
                      <div className="flex justify-center mb-4">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-125"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/64?text=No+Image';
                          }}
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-white transition-all duration-500 hover:text-purple-300">
                        {skill.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frontend Section */}
              <div 
                ref={el => categoryRefs.current[1] = el}
                className="skill-category opacity-0 translate-x-[-50px] transition-all duration-800"
              >
                <h3 className="text-2xl font-semibold mb-6 text-center capitalize text-white">
                  Frontend
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {skills.frontend.map((skill, index) => (
                    <div
                      key={index}
                      className="skill-card bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center transform transition-all duration-500 hover:scale-105"
                    >
                      <div className="flex justify-center mb-4">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-125"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/64?text=No+Image';
                          }}
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-white transition-all duration-500 hover:text-purple-300">
                        {skill.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend Section */}
              <div 
                ref={el => categoryRefs.current[2] = el}
                className="skill-category opacity-0 translate-x-[-50px] transition-all duration-800"
              >
                <h3 className="text-2xl font-semibold mb-6 text-center capitalize text-white">
                  Backend
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {skills.backend.map((skill, index) => (
                    <div
                      key={index}
                      className="skill-card bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center transform transition-all duration-500 hover:scale-105"
                    >
                      <div className="flex justify-center mb-4">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-125"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/64?text=No+Image';
                          }}
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-white transition-all duration-500 hover:text-purple-300">
                        {skill.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {/* Tools Section */}
              <div 
                ref={el => categoryRefs.current[3] = el}
                className="skill-category opacity-0 translate-x-[50px] transition-all duration-800"
              >
                <h3 className="text-2xl font-semibold mb-6 text-center capitalize text-white">
                  Tools
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {skills.tools.map((skill, index) => (
                    <div
                      key={index}
                      className="skill-card bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center transform transition-all duration-500 hover:scale-105"
                    >
                      <div className="flex justify-center mb-4">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-125"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/64?text=No+Image';
                          }}
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-white transition-all duration-500 hover:text-purple-300">
                        {skill.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deployment Section */}
              <div 
                ref={el => categoryRefs.current[4] = el}
                className="skill-category opacity-0 translate-x-[50px] transition-all duration-800"
              >
                <h3 className="text-2xl font-semibold mb-6 text-center capitalize text-white">
                  Deployment
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {skills.deployment.map((skill, index) => (
                    <div
                      key={index}
                      className="skill-card bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center transform transition-all duration-500 hover:scale-105"
                    >
                      <div className="flex justify-center mb-4">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-125"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/64?text=No+Image';
                          }}
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-white transition-all duration-500 hover:text-purple-300">
                        {skill.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 