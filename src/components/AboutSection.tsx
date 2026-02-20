import { Briefcase, GraduationCap, FolderGit2, Award } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: Briefcase,
      label: "Experiência",
      value: "Solution4Fleet (até Fev/2026)",
      subtitle: "Grupo Santander",
    },
    {
      icon: GraduationCap,
      label: "Educação",
      value: "Ciências da Computação",
      subtitle: "2024 - 2027 - Em andamento",
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
    { name: "Java" },
    { name: "Spring Boot" },
    { name: "PostgreSQL" },
    { name: "MySQL" },
    { name: "Python" },
    { name: "REST APIs" },
    { name: "Spring Security" },
    { name: "JWT" },
    { name: "Git & GitHub" },
    { name: "Kotlin" },
  ];

  return (
    <section id="sobre" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Text */}
          <div>
            <h2 className="section-title">Sobre Mim</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Sou o <span className="text-foreground font-medium">Pedro</span>, tenho 19 anos e sou um desenvolvedor back-end com foco em <span className="text-foreground font-medium">Java</span>. 
              Tenho experiência prática em desenvolvimento de software. Sigo aprendendo e construindo softwares enquanto me aprofundo no desenvolvimento back-end. 
              Atualmente, possuo conhecimento sólido na criação de soluções e estou em busca de uma oportunidade para aprender e entregar bons resultados.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Trabalhei na <span className="text-foreground font-medium">Solution4Fleet</span>, empresa do grupo Santander, 
              até fevereiro de 2026. Lá desenvolvi APIs utilizando Spring Boot para o time comercial, consumindo dados de CRM e 
              integrando com Power BI para análises e relatórios automatizados.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Comecei como freelancer em dezembro de 2025 e atualmente atuo com a marca <span className="text-foreground font-medium">Planum Labs</span>,
              desenvolvendo sistemas para terceiros — já entreguei um sistema para uma loja de produtos físicos e estou
              em desenvolvimento de uma solução para uma oficina.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Possuo habilidade para desenvolver APIs e back-ends completos utilizando Spring Boot, 
              Spring Security, JWT, integração com bancos de dados relacionais (MySQL e PostgreSQL) 
              e deploy em plataformas como Render e Hostinger.
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
