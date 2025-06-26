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

<title>Roda da Vida | Avaliação Gratuita Online</title>
<link href="assets/favicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" />
<link rel="icon" type="image/png" href="assets/img/favicon.png" />
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">
<meta content="authenticity_token" name="csrf-param" />
<meta content="hHvnGLn397zlCpU8fWJyUI+ZTkqilOvxD+aIMkavvVg=" name="csrf-token" />
</head>
<body>

<div id='wrap'>
<div class='container main-content'>
    <div class='row'>
        <div class='col-md-12 rate'>
            <h2 class="mb-4">Saúde</h2>
            <p class="lead">Como você avalia esta área da sua vida?</p>
            <form accept-charset="UTF-8" action="/wheel" class="edit_wheel" id="edit_wheel_862860" method="post">
                <div style="display:none">
                    <input name="utf8" type="hidden" value="✓" />
                    <input name="_method" type="hidden" value="patch" />
                    <input name="authenticity_token" type="hidden" value="hHvnGLn397zlCpU8fWJyUI+ZTkqilOvxD+aIMkavvVg=" />
                </div>
                <input id="token" name="token" type="hidden" value="p5XyBSre2gXrqg_NgcOqTg" />
                <input id="id" name="id" type="hidden" value="career" />
                
                <ul class='rating'>
                    <li class='hidden'>
                        <input checked='checked' name='wheel[health_and_fitness]' type='radio' value='0'>
                        <span class='hidden'></span>
                    </li>
                    <li>
                        <input name='wheel[health_and_fitness]' type='radio' value='1'>
                        <div class='rate-bg'><span>1</span></div>
                    </li>
                    <li>
                        <input name='wheel[health_and_fitness]' type='radio' value='2'>
                        <div class='rate-bg'><span>2</span></div>
                    </li>
                    <li>
                        <input name='wheel[health_and_fitness]' type='radio' value='3'>
                        <div class='rate-bg'><span>3</span></div>
                    </li>
                    <li>
                        <input name='wheel[health_and_fitness]' type='radio' value='4'>
                        <div class='rate-bg'><span>4</span></div>
                    </li>
                    <li>
                        <input name='wheel[health_and_fitness]' type='radio' value='5'>
                        <div class='rate-bg'><span>5</span></div>
                    </li>
                    <li>
                        <input name='wheel[health_and_fitness]' type='radio' value='6'>
                        <div class='rate-bg'><span>6</span></div>
                    </li>
                    <li>
                        <input name='wheel[health_and_fitness]' type='radio' value='7'>
                        <div class='rate-bg'><span>7</span></div>
                    </li>
                    <li>
                        <input name='wheel[health_and_fitness]' type='radio' value='8'>
                        <div class='rate-bg'><span>8</span></div>
                    </li>
                    <li>
                        <input name='wheel[health_and_fitness]' type='radio' value='9'>
                        <div class='rate-bg'><span>9</span></div>
                    </li>
                    <li>
                        <input name='wheel[health_and_fitness]' type='radio' value='10'>
                        <div class='rate-bg'><span>10</span></div>
                    </li>  
                </ul>
            </form>

            <form accept-charset="UTF-8" action="/wheel" class="edit_wheel mt-12" id="edit_wheel_skip" method="post">
                <div style="display:none">
                    <input name="utf8" type="hidden" value="✓" />
                    <input name="_method" type="hidden" value="patch" />
                    <input name="authenticity_token" type="hidden" value="hHvnGLn397zlCpU8fWJyUI+ZTkqilOvxD+aIMkavvVg=" />
                </div>
                <input id="token" name="token" type="hidden" value="p5XyBSre2gXrqg_NgcOqTg" />
                <input id="id" name="id" type="hidden" value="career" />
                <button class="btn-skip" type="submit">
                    Pular esta área - não é importante para mim
                </button>
            </form>
        </div>
        
    </div>
</div>
</div>

<div class='container my-5'>
    <div class='row justify-content-center'>
        <div class='col-md-8 text-center'>            
            <div class='wheel-preview'>
                <canvas id='preview_canvas'></canvas>
            </div>
        </div>
    </div>
</div>

<div class='footer-push'></div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="assets/js/app.js"></script>
</body>
</html>
