const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Back-end",
      skills: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
      ],
    },
    {
      title: "Banco de Dados",
      skills: [
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      ],
    },
    {
      title: "Front-end",
      skills: [
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Conhecimentos</h2>
          <p className="section-subtitle mx-auto">
            Tecnologias e ferramentas que utilizo para construir soluções de qualidade.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-4 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-center mb-8">
            Outras Competências
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "REST APIs",
              "JWT",
              "Spring Security",
              "Spring Data JPA",
              "Flyway",
              "Swagger",
              "Render",
              "Power BI",
              "Metodologias Ágeis",
              "Clean Code",
              "MVC",
            ].map((skill, index) => (
              <span
                key={index}
                className="skill-badge"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
