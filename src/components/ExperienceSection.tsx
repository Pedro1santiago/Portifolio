import { Briefcase, Calendar, CheckCircle } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Freelancer - Desenvolvimento de Sistemas",
      company: "Planum Labs",
      type: "Freelancer",
      period: "Dezembro/2025 - Atual",
      description:
        "Marca freelancer focada em desenvolver sistemas para terceiros. Atuo como fornecedor de soluções sob demanda, entregando back-ends e interfaces para clientes.",
      responsibilities: [
        "Desenvolvimento de sistema para loja de produtos físicos (concluído)",
        "Desenvolvimento em andamento de sistema para oficina (em progresso)",
        "Levantamento de requisitos, arquitetura de solução e integração com bancos de dados",
      ],
      skills: ["APIs", "Integração de Sistemas", "Desenvolvimento sob Demanda"],
      icon: Briefcase,
      current: true,
    },
    {
      title: "Assistente Operacional / Assistente de TI",
      company: "Solution4fleet - Santander",
      type: "CLT",
      period: "Outubro/2024 - Fevereiro/2026",
      description: "Manipulação de dados em sistemas internos (Rental), garantindo a integridade das informações e o andamento dos processos.",
      responsibilities: [
        "Desenvolvimento de API interna em Java com Spring Boot para consumo e apresentação de dados no Power BI",
        "Desenvolvimento de funcionalidades e automações no sistema da empresa",
        "Apoio ao time de TI em testes, refatoração de sistemas e criação de projetos",
        "Suporte técnico a clientes e colaboradores utilizando o phpMyAdmin",
        "Participação ativa em melhorias de processos internos, unindo visão operacional e interesse técnico em tecnologia",
      ],
      skills: ["Java", "Spring Boot", "Power BI", "MySQL", "APIs REST"],
      icon: Briefcase,
      current: false,
    },
    {
      title: "Jovem Aprendiz",
      company: "Belford",
      type: "CLT",
      period: "Dezembro/2022 - Outubro/2023",
      description: "Responsável pela aprovação de Ordens de Compra (OC) e pelo controle e conferência de Notas Fiscais (NFs).",
      responsibilities: [
        "Gerenciamento de custos e gastos por setor, com atualização e acompanhamento de planilhas financeiras",
        "Execução de rotinas contábeis e administrativas, garantindo organização documental e precisão nos registros",
      ],
      skills: ["Excel", "Gestão Financeira", "Organização", "Trabalho em Equipe"],
      icon: Briefcase,
      current: false,
    },
  ];

  return (
    <section id="experiencia" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Experiência Profissional</h2>
          <p className="section-subtitle mx-auto">
            Minha trajetória profissional e as habilidades desenvolvidas ao longo do tempo.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary/10 border-4 border-background items-center justify-center z-10">
                  <exp.icon className="w-5 h-5 text-primary" />
                </div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <div className="glass rounded-2xl p-6 md:p-8 hover-lift">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="md:hidden w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <exp.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-secondary text-xs font-medium">
                            {exp.type}
                          </span>
                          {exp.current && (
                            <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium">
                              Atual
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <p className="flex items-center gap-2 font-medium mb-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Principais Responsabilidades:
                      </p>
                      <ul className="space-y-2 ml-6">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li
                            key={respIndex}
                            className="text-muted-foreground text-sm flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-xs rounded-full border border-primary/30 text-primary bg-primary/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for timeline alignment */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
