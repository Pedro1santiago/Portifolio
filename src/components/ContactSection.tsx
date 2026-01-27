import { useState } from "react";
import { Mail, Linkedin, Github, Send, Download, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Usando Web3Forms - gratuito e sem configuração
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "70911ce7-915c-42da-8a10-37cdeed61f18",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject || "Contato via Portfólio",
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Mensagem enviada!",
          description: "Obrigado pelo contato. Responderei em breve!",
        });

        // Limpar formulário
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Erro ao enviar");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      
      // Fallback: abrir cliente de email
      const mailtoLink = `mailto:pedro.santigosiqueira@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Contato do Portfólio"
      )}&body=${encodeURIComponent(
        `Nome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\n\nMensagem:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      toast({
        title: "Abrindo cliente de email",
        description: "O formulário será enviado através do seu cliente de email padrão.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pedro.santigosiqueira@gmail.com",
      href: "mailto:pedro.santigosiqueira@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Pedro Santiago",
      href: "https://www.linkedin.com/in/pedro-santiago-838300277",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@Pedro1santiago",
      href: "https://github.com/Pedro1santiago",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Enviar mensagem",
      href: "https://wa.me/5511999999999",
    },
  ];

  return (
    <section id="contato" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle mx-auto">
            Gostou do meu trabalho? Vamos conversar sobre seu próximo projeto!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">Enviar Mensagem</h3>
            <form 
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome completo</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Telefone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="(11) 91234-5678"
                    pattern="\(?\d{2}\)?\s?\d{4,5}-?\d{4}"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Assunto</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Assunto da mensagem"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Conecte-se Comigo</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:border-primary/50 transition-all group"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Download CV */}
            <a
              href="/Currículo.pdf"
              download="Pedro_Santiago_Curriculo.pdf"
              className="flex items-center gap-4 p-4 glass rounded-xl hover:border-primary/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Download className="w-7 h-7 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Currículo</p>
                <p className="font-medium group-hover:text-accent transition-colors">
                  Baixar Currículo (PDF)
                </p>
              </div>
            </a>

            {/* Availability */}
            <div className="mt-8 p-6 glass rounded-2xl border-primary/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold text-primary">Disponível para trabalho</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Atualmente aceitando novos projetos. Respondo em até 24 horas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
