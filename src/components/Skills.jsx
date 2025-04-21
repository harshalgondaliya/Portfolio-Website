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
    <section id="skills" className="section">
      <div className="container">
        <h2 className="heading text-center">My Skills</h2>
        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="text-accent">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full">
                <div
                  className="h-full bg-accent rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 