# 🎯 Roda da Vida - Avaliação Gratuita Online

Uma ferramenta poderosa para visualizar todas as áreas da sua vida e identificar onde você precisa melhorar. É rápido, simples e totalmente gratuito!

## ✨ Funcionalidades

- **Avaliação Completa**: 8 áreas principais da vida
- **Análise Detalhada**: Descrições específicas para cada pontuação
- **Dicas Personalizadas**: Sugestões de melhoria baseadas nos resultados
- **Relatório PDF**: Geração e download do relatório completo
- **Envio por Email**: Compartilhamento do relatório via email
- **Interface Responsiva**: Funciona perfeitamente em desktop e mobile

## 🚀 Instalação

### Pré-requisitos

- PHP 7.4 ou superior
- Composer
- Servidor web (Apache/Nginx)
- Servidor SMTP para envio de emails

### Passos de Instalação

1. **Clone ou baixe o projeto**
   ```bash
   git clone [url-do-repositorio]
   cd rodavida
   ```

2. **Instale as dependências**
   ```bash
   composer install
   ```

3. **Configure o servidor SMTP**

   Edite o arquivo `send_email.php` e atualize as configurações:
   ```php
   $smtp_host = 'smtp.gmail.com'; // Seu servidor SMTP
   $smtp_port = 587;
   $smtp_username = 'seu-email@gmail.com'; // Seu email
   $smtp_password = 'sua-senha-de-app'; // Sua senha de app
   $from_email = 'seu-email@gmail.com'; // Email remetente
   $from_name = 'Roda da Vida'; // Nome do remetente
   ```

4. **Configuração do Gmail (Recomendado)**

   Para usar Gmail como servidor SMTP:
   
   a. Ative a verificação em duas etapas na sua conta Google
   b. Gere uma senha de app:
      - Vá para Configurações da Conta Google
      - Segurança > Verificação em duas etapas > Senhas de app
      - Gere uma senha para "Email"
   c. Use essa senha no campo `$smtp_password`

5. **Configure o servidor web**

   Certifique-se de que o PHP tem permissões para:
   - Escrever arquivos temporários
   - Acessar a internet (para envio de emails)

## 📧 Configuração de Email

### Gmail
```php
$smtp_host = 'smtp.gmail.com';
$smtp_port = 587;
$smtp_username = 'seu-email@gmail.com';
$smtp_password = 'sua-senha-de-app';
```

### Outlook/Hotmail
```php
$smtp_host = 'smtp-mail.outlook.com';
$smtp_port = 587;
$smtp_username = 'seu-email@outlook.com';
$smtp_password = 'sua-senha';
```

### Outros provedores
Consulte a documentação do seu provedor de email para as configurações SMTP corretas.

## 🎨 Personalização

### Cores e Estilos
Edite o arquivo `assets/css/style.css` para personalizar:
- Cores principais
- Tipografia
- Layout responsivo
- Animações

### Descrições das Áreas
Modifique o arquivo `assets/js/app.js` para personalizar:
- Descrições de cada valor (1-10)
- Dicas de melhoria
- Textos e mensagens

## 📁 Estrutura do Projeto

```
rodavida/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── app.js
│   └── img/
├── vendor/ (gerado pelo Composer)
├── composer.json
├── index.php
├── relatorio.php
├── send_email.php
└── README.md
```

## 🔧 Solução de Problemas

### Email não está sendo enviado
1. Verifique as configurações SMTP
2. Confirme se a senha de app está correta
3. Verifique se o servidor permite conexões SMTP
4. Consulte os logs de erro do PHP

### Erro de permissão
1. Verifique se o PHP tem permissões de escrita
2. Confirme se o Composer foi instalado corretamente

### Problemas de layout
1. Limpe o cache do navegador
2. Verifique se todos os arquivos CSS/JS foram carregados
3. Teste em diferentes navegadores

## 📞 Suporte

Para suporte técnico ou dúvidas:
- Abra uma issue no repositório
- Entre em contato através do email de suporte

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor:
1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

---

**Desenvolvido com ❤️ para ajudar pessoas a melhorarem suas vidas!** 