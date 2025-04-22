const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'MongoDB', level: 75 },
  { name: 'TypeScript', level: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="section min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="heading text-center mb-16">My Skills</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {skills.map((skill, index) => (
              <div key={index} className="mb-8">
                <div className="flex justify-between mb-3">
                  <span className="text-lg font-medium">{skill.name}</span>
                  <span className="text-accent font-semibold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 