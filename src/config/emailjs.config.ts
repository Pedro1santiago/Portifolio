// Configuração do EmailJS
// Para obter suas credenciais:
// 1. Acesse https://www.emailjs.com/
// 2. Crie uma conta gratuita
// 3. Vá em Email Services e adicione um serviço (Gmail, Outlook, etc.)
// 4. Vá em Email Templates e crie um template com as seguintes variáveis:
//    - {{from_name}} - Nome do remetente
//    - {{from_email}} - Email do remetente
//    - {{phone}} - Telefone
//    - {{subject}} - Assunto
//    - {{message}} - Mensagem
//    - {{to_email}} - Seu email (pedro.santigosiqueira@gmail.com)
// 5. Copie o Service ID, Template ID e Public Key

export const EMAILJS_CONFIG = {
  SERVICE_ID: "YOUR_SERVICE_ID",  // Ex: "service_abc123"
  TEMPLATE_ID: "YOUR_TEMPLATE_ID", // Ex: "template_xyz456"
  PUBLIC_KEY: "YOUR_PUBLIC_KEY",   // Ex: "1A2B3C4D5E6F7G"
};

// Template de exemplo para o EmailJS:
// Assunto do email: Nova mensagem de {{from_name}} - {{subject}}
// 
// Corpo do email:
// Nome: {{from_name}}
// Email: {{from_email}}
// Telefone: {{phone}}
// Assunto: {{subject}}
// 
// Mensagem:
// {{message}}
