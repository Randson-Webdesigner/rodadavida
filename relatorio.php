<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PG2SLJX');</script>
    <!-- End Google Tag Manager -->

    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta content="Relatório visual da Roda da Vida com análise das áreas avaliadas." name="description">
    <meta content="Roda da Vida" property="og:site_name">
    <meta content="summary" name="twitter:card">
    <meta content="Minha Roda da Vida | Relatório" name="twitter:title">
    <meta content="Veja sua Roda da Vida e identifique prioridades de desenvolvimento." name="twitter:description">
    <meta content="noindex" name="robots">

    <title>Minha Roda da Vida | Relatório</title>
    <link href="assets/favicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon">
    <link rel="icon" type="image/png" href="assets/img/favicon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
    <meta content="authenticity_token" name="csrf-param">
    <meta content="hHvnGLn397zlCpU8fWJyUI+ZTkqilOvxD+aIMkavvVg=" name="csrf-token">
</head>
<body>

    <section id="report-section">
        <div class="report-layout">
            <div>
                <img src="assets/img/logo.webp" alt="Roda da Vida Logo" class="report-logo">
                <span class="eyebrow">Relatório pessoal</span>
                <h2 class="report-title">Minha Roda da Vida</h2>
                <p id="report-date" class="lead"></p>
                <div class="wheel-preview-final my-4">
                    <canvas id="final_wheel_canvas"></canvas>
                </div>
            </div>

            <aside class="report-actions" aria-label="Ações do relatório">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <button id="print-button" class="action-button" type="button">
                            <i class="fas fa-print"></i> Imprimir
                        </button>
                    </li>
                    <li class="list-group-item">
                        <button id="save-pdf-button" class="action-button" type="button">
                            <i class="fas fa-file-arrow-down"></i> Salvar PDF
                        </button>
                    </li>
                    <li class="list-group-item">
                        <button class="action-button" type="button" onclick="window.location.href='index.php'">
                            <i class="fa-solid fa-xmark"></i> Refazer
                        </button>
                    </li>
                </ul>
            </aside>
        </div>
    </section>

    <div class="footer-push"></div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="assets/js/app.js"></script>
</body>
</html>
