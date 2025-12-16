import { Briefcase, GraduationCap, FolderGit2, Award } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: Briefcase,
      label: "Experiência",
      value: "Solution4Fleet",
      subtitle: "Grupo Santander",
    },
    {
      icon: GraduationCap,
      label: "Educação",
      value: "Ciências da Computação",
      subtitle: "Em andamento",
    },
    {
      icon: FolderGit2,
      label: "Projetos",
      value: "7+ projetos",
      subtitle: "APIs & Backend",
    },
    {
      icon: Award,
      label: "Especialidade",
      value: "Java & Spring Boot",
      subtitle: "Back-end",
    },
  ];

  const skills = [
    { name: "Java", level: "Avançado" },
    { name: "Spring Boot", level: "Avançado" },
    { name: "PostgreSQL", level: "Intermediário" },
    { name: "MySQL", level: "Intermediário" },
    { name: "Python", level: "Intermediário" },
    { name: "REST APIs", level: "Avançado" },
    { name: "Spring Security", level: "Intermediário" },
    { name: "JWT", level: "Intermediário" },
    { name: "Git & GitHub", level: "Avançado" },
    { name: "Kotlin", level: "Básico" },
  ];

  return (
    <section id="sobre" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Text */}
          <div>
            <h2 className="section-title">Sobre Mim</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Sou um desenvolvedor back-end com foco em <span className="text-foreground font-medium">Java e Python</span>. 
              Tenho experiência prática em desenvolvimento de TI, onde aprendi construindo sistemas completos 
              e conquistei conhecimento sólido na criação de soluções robustas.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Atualmente trabalho na <span className="text-foreground font-medium">Solution4Fleet</span>, empresa do grupo Santander, 
              onde desenvolvi APIs utilizando Spring Boot para o time comercial, consumindo dados de CRM e 
              integrando diretamente com Power BI para análises e relatórios automatizados.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Possuo habilidade para desenvolver APIs e back-ends completos utilizando Spring Boot, 
              Spring Security, JWT, integração com bancos de dados relacionais (MySQL, PostgreSQL) 
              e deploy em plataformas como Render.
            </p>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 hover-lift"
              >
                <stat.icon className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="font-semibold text-lg">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8">Habilidades Técnicas</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="glass rounded-xl p-4 hover:border-primary/50 transition-all duration-300 group"
              >
                <p className="font-medium group-hover:text-primary transition-colors">
                  {skill.name}
                </p>
                <p className="text-sm text-muted-foreground">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
