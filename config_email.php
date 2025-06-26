<?php
/**
 * Configuração de Email - Roda da Vida
 * 
 * ATENÇÃO: Configure suas credenciais de email aqui antes de usar!
 */

// Configurações do Gmail (Recomendado)
$email_config = [
    'smtp_host' => 'smtp.gmail.com',
    'smtp_port' => 587,
    'smtp_username' => 'seu-email@gmail.com', // ALTERE PARA SEU EMAIL
    'smtp_password' => 'sua-senha-de-app', // ALTERE PARA SUA SENHA DE APP
    'from_email' => 'seu-email@gmail.com', // ALTERE PARA SEU EMAIL
    'from_name' => 'Roda da Vida'
];

// Configurações alternativas para outros provedores
$alternative_configs = [
    'outlook' => [
        'smtp_host' => 'smtp-mail.outlook.com',
        'smtp_port' => 587,
        'smtp_username' => 'seu-email@outlook.com',
        'smtp_password' => 'sua-senha',
        'from_email' => 'seu-email@outlook.com',
        'from_name' => 'Roda da Vida'
    ],
    'yahoo' => [
        'smtp_host' => 'smtp.mail.yahoo.com',
        'smtp_port' => 587,
        'smtp_username' => 'seu-email@yahoo.com',
        'smtp_password' => 'sua-senha-de-app',
        'from_email' => 'seu-email@yahoo.com',
        'from_name' => 'Roda da Vida'
    ]
];

// Função para obter configuração ativa
function getEmailConfig() {
    global $email_config;
    return $email_config;
}

// Função para testar configuração
function testEmailConfig() {
    global $email_config;
    
    if (!file_exists('vendor/autoload.php')) {
        return ['success' => false, 'message' => 'PHPMailer não está instalado'];
    }
    
    require 'vendor/autoload.php';
    
    try {
        $mail = new \PHPMailer\PHPMailer\PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = $email_config['smtp_host'];
        $mail->SMTPAuth = true;
        $mail->Username = $email_config['smtp_username'];
        $mail->Password = $email_config['smtp_password'];
        $mail->SMTPSecure = \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = $email_config['smtp_port'];
        $mail->CharSet = 'UTF-8';
        $mail->SMTPDebug = 0;
        $mail->Timeout = 10;
        
        $mail->setFrom($email_config['from_email'], $email_config['from_name']);
        $mail->addAddress('teste@exemplo.com', 'Teste');
        $mail->isHTML(true);
        $mail->Subject = 'Teste de Configuração';
        $mail->Body = '<h1>Teste</h1><p>Configuração funcionando!</p>';
        
        $mail->send();
        return ['success' => true, 'message' => 'Configuração válida!'];
        
    } catch (Exception $e) {
        return ['success' => false, 'message' => 'Erro: ' . $e->getMessage()];
    }
}

// Verificar se é uma requisição de teste
if (isset($_GET['test'])) {
    header('Content-Type: application/json');
    echo json_encode(testEmailConfig());
    exit;
}
?> 