import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Download, ArrowRight, ChevronDown, MessageCircle } from "lucide-react";

/**
 * Seção inicial (hero) com animação em canvas e principais CTAs/redes.
 */
const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;

    /** Ajusta o canvas para cobrir toda a viewport. */
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    /** Atualiza a posição do cursor para interação com o grid. */
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const gridSize = 40;
    const maxDistance = 150;

    /** Renderiza o grid e agenda o próximo frame. */
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const isDark = document.documentElement.classList.contains("dark");
      const baseColor = isDark ? "100, 100, 100" : "180, 180, 180";
      const accentColor = isDark ? "74, 222, 128" : "22, 163, 74";

      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const dx = mouseX - x;
          const dy = mouseY - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          const intensity = Math.max(0, 1 - distance / maxDistance);
          const dotSize = 1 + intensity * 3;
          
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          
          if (intensity > 0) {
            ctx.fillStyle = `rgba(${accentColor}, ${0.3 + intensity * 0.7})`;
          } else {
            ctx.fillStyle = `rgba(${baseColor}, 0.3)`;
          }
          
          ctx.fill();

          // Draw connecting lines near cursor
          if (intensity > 0.3) {
            const neighbors = [
              { nx: x + gridSize, ny: y },
              { nx: x, ny: y + gridSize },
            ];
            
            neighbors.forEach(({ nx, ny }) => {
              if (nx < canvas.width && ny < canvas.height) {
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(nx, ny);
                ctx.strokeStyle = `rgba(${accentColor}, ${intensity * 0.3})`;
                ctx.lineWidth = intensity * 1.5;
                ctx.stroke();
              }
            });
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Interactive Grid Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Disponível para novos projetos
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Olá, eu sou{" "}
            <span className="text-gradient">Pedro Santiago</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Desenvolvedor <span className="font-semibold text-foreground">Back-end</span> apaixonado por criar
            soluções robustas e escaláveis com Java e tecnologias modernas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in">
            <a href="#projetos" className="btn-primary flex items-center gap-2">
              Ver Meus Projetos
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/Currículo.pdf"
              download="Pedro_Santiago_Curriculo.pdf"
              className="btn-secondary flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Baixar Currículo
            </a>
            <a href="#contato" className="btn-outline flex items-center gap-2">
              Entre em Contato
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-16 animate-fade-in">
            <a
              href="https://github.com/Pedro1santiago"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300 group"
            >
              <Github className="w-7 h-7 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-santiago-838300277"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300 group"
            >
              <Linkedin className="w-7 h-7 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300 group"
            >
              <MessageCircle className="w-7 h-7 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:pedro.santigosiqueira@gmail.com"
              className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300 group"
            >
              <Mail className="w-7 h-7 group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
            <span className="text-sm">Scroll para descobrir mais</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
