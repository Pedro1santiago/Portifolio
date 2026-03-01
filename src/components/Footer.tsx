import { Github, Linkedin, Mail, Heart, MessageCircle } from "lucide-react";

/**
 * Rodapé com redes sociais e ano atual.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} Pedro Santiago
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Pedro1santiago"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-santiago-838300277"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="w-7 h-7" />
            </a>
            <a
              href="mailto:pedrosantiago@email.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
