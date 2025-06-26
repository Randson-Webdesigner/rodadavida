<!DOCTYPE html>
<html lang='pt-BR'>
<head>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PG2SLJX');</script>
    <!-- End Google Tag Manager -->

    <meta charset='utf-8'>
    <meta content='width=device-width, initial-scale=1' name='viewport'>
    <meta content="A Roda da Vida é uma ferramenta poderosa para visualizar todas as áreas da sua vida e identificar onde você precisa melhorar. É rápido, simples e totalmente gratuito!" name='description'>
    <meta content='Roda da Vida' property='og:site_name'>

    <meta content='summary' name='twitter:card'>
    <meta content='Roda da Vida | Avaliação Gratuita Online' name='twitter:title'>
    <meta content="A Roda da Vida é uma ferramenta poderosa para visualizar todas as áreas da sua vida e identificar onde você precisa melhorar. É rápido, simples e totalmente gratuito!" name='twitter:description'>
    <meta content='noindex' name='robots'>

    <title>Minha Roda da Vida | Relatório</title>
    <link href="assets/favicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
    <meta content="authenticity_token" name="csrf-param" />
    <meta content="hHvnGLn397zlCpU8fWJyUI+ZTkqilOvxD+aIMkavvVg=" name="csrf-token" />
</head>
<body>

    <div id="report-section" class="container my-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <img src="assets/img/logo.webp" alt="Roda da Vida Logo" width=250 class="img-fluid mb-4">
                <h2 class="mb-4">Minha Roda da Vida</h2>
                <p id="report-date" class="lead"></p>
                <div class="wheel-preview-final my-4">
                    <canvas id="final_wheel_canvas"></canvas>
                </div>
            </div>
            <div class="col-md-4 text-start">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><button id="print-button" class="btn btn-link text-decoration-none p-0"><i class="fas fa-print me-2"></i> Imprimir</button></li>
                    <li class="list-group-item">
                    <button id="print-button" class="btn btn-link text-decoration-none p-0" onclick="window.location.href='index.php'">
                        <i class="fa-solid fa-xmark me-2"></i> Fechar
                    </button>
                    </li>

                   <!--  <li class="list-group-item"><button id="share-email-button" class="btn btn-link text-decoration-none p-0" data-bs-toggle="modal" data-bs-target="#emailModal"><i class="fas fa-envelope me-2"></i> Enviar por Email</button></li> -->
                </ul>
            </div>
        </div>
    </div>

    <!-- Modal para Email -->
  <!--   <div class="modal fade" id="emailModal" tabindex="-1" aria-labelledby="emailModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="emailModalLabel">
                        <i class="fas fa-envelope me-2"></i>Enviar Relatório por Email
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="emailForm">
                        <div class="mb-3">
                            <label for="emailAddress" class="form-label">Seu Email:</label>
                            <input type="email" class="form-control" id="emailAddress" name="email" required placeholder="seu@email.com">
                            <div class="form-text">O relatório será enviado para este endereço de email.</div>
                        </div>
                        <div class="mb-3">
                            <label for="emailName" class="form-label">Seu Nome (opcional):</label>
                            <input type="text" class="form-control" id="emailName" name="name" placeholder="Seu nome">
                        </div>
                        <div class="alert alert-info">
                            <i class="fas fa-info-circle me-2"></i>
                            O relatório será enviado como anexo PDF com sua análise completa da Roda da Vida.
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary" id="sendEmailBtn">
                        <i class="fas fa-paper-plane me-2"></i>Enviar Email
                    </button>
                </div>
            </div>
        </div>
    </div> -->

    <!-- Modal de Sucesso -->
   <!--  <div class="modal fade" id="successModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-success">
                        <i class="fas fa-check-circle me-2"></i>Email Enviado!
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Seu relatório da Roda da Vida foi enviado com sucesso!</p>
                    <p class="text-muted">Verifique sua caixa de entrada e pasta de spam.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal">OK</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal de Erro -->
   <!--  <div class="modal fade" id="errorModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-danger">
                        <i class="fas fa-exclamation-triangle me-2"></i>Erro ao Enviar
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p id="errorMessage">Ocorreu um erro ao enviar o email. Tente novamente.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">OK</button>
                </div>
            </div>
        </div>
    </div> --> 
    <div class='footer-push'></div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="assets/js/app.js"></script>
</body>
</html> 