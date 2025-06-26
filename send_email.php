<?php
// Sistema de email usando PHPMailer
header('Content-Type: application/json');

// Verificar se o PHPMailer está instalado
if (!file_exists('vendor/autoload.php')) {
    echo json_encode(['success' => false, 'message' => 'PHPMailer não está instalado. Execute: composer install']);
    exit;
}

require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Receber dados do formulário
$email = $_POST['email'] ?? '';
$name = $_POST['name'] ?? 'Usuário';
$wheel_data = $_POST['wheel_data'] ?? '';

// Validar email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email inválido']);
    exit;
}

try {
    // Criar instância do PHPMailer
    $mail = new PHPMailer(true);
    
    // Configurações do servidor Gmail (funciona bem)
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'seu-email@gmail.com'; // ALTERE PARA SEU EMAIL
    $mail->Password = 'sua-senha-de-app'; // ALTERE PARA SUA SENHA DE APP
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->CharSet = 'UTF-8';
    
    // Configurações de debug (remova em produção)
    $mail->SMTPDebug = 0; // 0 = sem debug, 2 = debug completo
    
    // Timeout
    $mail->Timeout = 30;
    $mail->SMTPKeepAlive = true;
    
    // Remetente
    $mail->setFrom('seu-email@gmail.com', 'Roda da Vida'); // ALTERE PARA SEU EMAIL
    
    // Destinatário
    $mail->addAddress($email, $name);
    
    // Conteúdo do email
    $mail->isHTML(true);
    $mail->Subject = 'Seu Relatório da Roda da Vida';
    
    // Corpo do email HTML
    $emailBody = '
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Seu Relatório da Roda da Vida</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
            .header { background: linear-gradient(135deg, #2e7d32, #4caf50); color: white; padding: 30px; text-align: center; }
            .content { padding: 30px; background: #f9f9f9; }
            .footer { text-align: center; padding: 20px; background: #e0e0e0; color: #666; font-size: 14px; }
            .highlight { background: #e8f5e8; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #2e7d32; }
            .btn { display: inline-block; padding: 12px 24px; background: #2e7d32; color: white; text-decoration: none; border-radius: 5px; margin: 10px 0; }
            h1 { margin: 0; font-size: 28px; }
            h3 { color: #2e7d32; margin-top: 0; }
            ul { margin: 10px 0; padding-left: 20px; }
            li { margin: 5px 0; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🎯 Sua Roda da Vida</h1>
                <p>Análise completa das áreas da sua vida</p>
            </div>
            <div class="content">
                <p>Olá <strong>' . htmlspecialchars($name) . '</strong>,</p>
                
                <p>Obrigado por usar nossa ferramenta da Roda da Vida! Seu relatório personalizado foi gerado com sucesso.</p>
                
                <div class="highlight">
                    <h3>📊 O que você recebeu:</h3>
                    <ul>
                        <li>Visualização da sua Roda da Vida</li>
                        <li>Análise detalhada de cada área</li>
                        <li>Dicas personalizadas para melhorias</li>
                        <li>Data da avaliação: ' . date('d/m/Y') . '</li>
                    </ul>
                </div>
                
                <p><strong>Dica:</strong> Revise seu relatório regularmente para acompanhar seu progresso e manter o foco nas áreas que precisam de atenção.</p>
                
                <p>Para acessar seu relatório completo, visite nossa plataforma e faça login com seu email.</p>
                
                <p>Atenciosamente,<br>
                <strong>Equipe Roda da Vida</strong></p>
            </div>
            <div class="footer">
                <p>Este email foi enviado automaticamente. Não responda a este email.</p>
                <p>© ' . date('Y') . ' Roda da Vida - Todos os direitos reservados</p>
            </div>
        </div>
    </body>
    </html>';
    
    $mail->Body = $emailBody;
    $mail->AltBody = "Olá $name,\n\nSeu relatório da Roda da Vida foi gerado com sucesso.\n\nAtenciosamente,\nEquipe Roda da Vida";
    
    // Enviar email
    $mail->send();
    
    // Resposta de sucesso
    echo json_encode(['success' => true, 'message' => 'Email enviado com sucesso!']);
    
} catch (Exception $e) {
    // Log do erro
    error_log("Erro ao enviar email: " . $e->getMessage());
    
    // Resposta de erro
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erro ao enviar email: ' . $e->getMessage()]);
}
?> 