import { useState, useRef } from "react";
import { ExternalLink, Github, Star, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const featuredProjects = [
    {
      title: "AliceGlowStore",
      description:
        "Sistema real (em produção) para gestão de uma loja de maquiagem. Inclui autenticação/autorizações com JWT (roles), produtos e estoque, vendas com validação de disponibilidade e total automático, controle de caixa e relatórios. Backend em Java 17 + Spring Boot 3, PostgreSQL com Flyway, OpenAPI/Swagger, Docker e deploy no Render. Boas práticas com DTOs, Jakarta Validation, ProblemDetail e correlation-id por request.",
      image: "/images/aliceglowstore-capa.png",
      technologies: [
        "Java 17",
        "Spring Boot 3",
        "Spring Security/JWT",
        "PostgreSQL/Flyway",
        "Docker",
        "OpenAPI/Swagger",
        "Render",
        "JUnit/Mockito",
      ],
      github: "https://github.com/Pedro1santiago/AliceGlow-backend",
      featured: true,
    },
    {
      title: "CodeChella",
      description:
        "Plataforma completa de gerenciamento de eventos e ingressos com arquitetura multi-nível. Sistema hierárquico com 3 níveis de usuários (Super Admin, Admin, Usuário) com isolamento de dados entre administradores. Backend reativo com Spring WebFlux, R2DBC e Server-Sent Events para updates em tempo real. Frontend em React + TypeScript com fluxo completo de aprovação de permissões.",
      image: "/images/PaginaInicial (1).png",
      technologies: ["Java 17", "Spring Boot 3", "Spring Security", "WebFlux", "PostgreSQL", "React", "TypeScript"],
      github: "https://github.com/Pedro1santiago/CodeChella_Software",
      demo: "https://codechella-five-sigma.vercel.app/",
      featured: false,
    },
    {
      title: "Sofia IA",
      description:
        "Plataforma de assistente virtual com IA integrada. Backend em Java + Spring Boot + Spring Security com autenticação JWT e integração com OpenAI.",
      image: "/images/sofiaIaCapa (1).png",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT", "OpenAI"],
      github: "https://github.com/Pedro1santiago/Sofia",
      demo: "https://sof-ia-self.vercel.app",
      featured: false,
    },
    {
      title: "MedFlow API",
      description:
        "Sistema de gerenciamento de clínicas médicas com cadastro de médicos, pacientes, agendamentos e autenticação completa.",
      image: "/images/APP4 (1).png",
      technologies: ["Java", "Spring Boot", "MySQL", "Swagger", "JWT"],
      github: "https://github.com/Pedro1santiago/MedFlow_API",
    },
    {
      title: "BeatTimer",
      description:
        "Aplicativo musical com cronômetro, pomodoro e alarmes, integrando Spotify via API oficial. Interface moderna e responsiva.",
      image: "/images/APP3.png",
      technologies: ["Java", "Spotify API"],
      github: "https://github.com/Pedro1santiago/BeatTimer-Project",
    },
  ];

  const totalProjects = featuredProjects.length;

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
  };

  return (
    <section id="projetos" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Meus Projetos</h2>
          <p className="section-subtitle mx-auto">
            Role para explorar meus trabalhos
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8">
          <span className="text-xs sm:text-sm font-medium text-primary">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <div className="w-32 sm:w-48 md:w-64 h-1 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${((currentIndex + 1) / totalProjects) * 100}%` }}
            />
          </div>
          <span className="text-xs sm:text-sm text-muted-foreground">
            {String(totalProjects).padStart(2, "0")}
          </span>
        </div>

        {/* Carousel Container */}
        <div className="relative" ref={carouselRef}>
          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300 -translate-x-2 sm:-translate-x-4 lg:-translate-x-8"
            aria-label="Projeto anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300 translate-x-2 sm:translate-x-4 lg:translate-x-8"
            aria-label="Próximo projeto"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden mx-4 sm:mx-8 lg:mx-16">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2 sm:px-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
                    {/* Project Image */}
                    <div className="relative group order-1">
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 bg-primary rounded-full text-primary-foreground text-sm font-medium shadow-lg">
                          <Star className="w-3 h-3 fill-current" />
                          Destaque
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="space-y-3 md:space-y-4 order-2">
                      <div>
                        <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-primary/20 leading-none">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="mt-1 text-2xl sm:text-3xl font-bold leading-tight">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2.5 py-1 text-xs sm:text-sm rounded-full border border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline bg-foreground/5 flex items-center justify-center gap-2 text-sm sm:text-base"
                        >
                          <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                          Código
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex items-center justify-center gap-2 text-sm sm:text-base"
                          >
                            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                            Ver Aplicação
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {featuredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-primary w-8" 
                  : "bg-secondary hover:bg-primary/50"
              }`}
              aria-label={`Ir para projeto ${index + 1}`}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Pedro1santiago?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline"
          >
            <Github className="w-5 h-5" />
            Ver mais projetos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
