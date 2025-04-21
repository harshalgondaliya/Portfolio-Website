const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container">
        <h2 className="heading text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              I'm a passionate Full Stack Developer with a strong focus on creating
              exceptional user experiences. With expertise in both frontend and
              backend technologies, I build scalable and maintainable web
              applications.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              My journey in web development started with a curiosity about how
              websites work, and it has evolved into a deep passion for creating
              innovative solutions to real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full">
                React
              </span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full">
                Node.js
              </span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full">
                MongoDB
              </span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full">
                TypeScript
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-accent">
              {/* Replace with your image */}
              <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 