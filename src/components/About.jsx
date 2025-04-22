const About = () => {
  return (
    <section id="about" className="section bg-secondary min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="heading text-center mb-16">About Me</h2>
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with a strong focus on creating
              exceptional user experiences. With expertise in both frontend and
              backend technologies, I build scalable and maintainable web
              applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in web development started with a curiosity about how
              websites work, and it has evolved into a deep passion for creating
              innovative solutions to real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-accent/10 text-accent px-6 py-2 rounded-full text-sm hover:bg-accent/20 transition-colors">
                React
              </span>
              <span className="bg-accent/10 text-accent px-6 py-2 rounded-full text-sm hover:bg-accent/20 transition-colors">
                Node.js
              </span>
              <span className="bg-accent/10 text-accent px-6 py-2 rounded-full text-sm hover:bg-accent/20 transition-colors">
                MongoDB
              </span>
              <span className="bg-accent/10 text-accent px-6 py-2 rounded-full text-sm hover:bg-accent/20 transition-colors">
                TypeScript
              </span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-accent transform hover:scale-105 transition-transform duration-300">
              {/* Replace with your image */}
              <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 