const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with user authentication, product management, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://via.placeholder.com/600x400',
    link: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    technologies: ['React', 'Firebase', 'Material-UI'],
    image: 'https://via.placeholder.com/600x400',
    link: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather application that provides real-time weather data and forecasts for any location.',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    image: 'https://via.placeholder.com/600x400',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section bg-secondary">
      <div className="container">
        <h2 className="heading text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 