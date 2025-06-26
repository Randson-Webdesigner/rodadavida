document.addEventListener('DOMContentLoaded', function() {
    let areas = [
        {
            id: "health_and_fitness",
            title: "Saúde",
            value: 0,
            color: "#4bdbff"
        },
        {
            id: "career",
            title: "Carreira",
            value: 0,
            color: "#4877e0"
        },
        {
            id: "love",
            title: "Amor",
            value: 0,
            color: "#b71f58"
        },
        {
            id: "spirituality",
            title: "Espiritualidade",
            value: 0,
            color: "#9a2ecc"
        },
        {
            id: "family",
            title: "Família",
            value: 0,
            color: "#ff9bf2"
        },
        {
            id: "money",
            title: "Finanças",
            value: 0,
            color: "#6ad007"
        },
        {
            id: "fun",
            title: "Diversão",
            value: 0,
            color: "#f5bf40"
        },
        {
            id: "friends",
            title: "Amigos",
            value: 0,
            color: "#ef7625"
        }       
    ];

    // Descrições para cada valor de cada área da vida
    const areaDescriptions = {
        health_and_fitness: {
            1: "Saúde em estado crítico - Precisa de atenção médica imediata",
            2: "Saúde muito ruim - Necessita de mudanças drásticas no estilo de vida",
            3: "Saúde ruim - Precisa melhorar hábitos alimentares e exercícios",
            4: "Saúde abaixo da média - Alguns problemas de saúde presentes",
            5: "Saúde regular - Nem boa nem ruim, há espaço para melhorias",
            6: "Saúde boa - Está no caminho certo, mas pode melhorar",
            7: "Saúde muito boa - Hábitos saudáveis bem estabelecidos",
            8: "Saúde excelente - Pratica exercícios regularmente e se alimenta bem",
            9: "Saúde excepcional - Estilo de vida muito saudável e equilibrado",
            10: "Saúde perfeita - Condição física e mental ideal"
        },
        career: {
            1: "Carreira em crise - Desempregado ou em situação muito difícil",
            2: "Carreira muito ruim - Trabalho insatisfatório e sem perspectivas",
            3: "Carreira ruim - Trabalho que não gosta, mas precisa manter",
            4: "Carreira abaixo da média - Trabalho básico, sem crescimento",
            5: "Carreira regular - Trabalho estável, mas sem grandes realizações",
            6: "Carreira boa - Trabalho satisfatório com algumas oportunidades",
            7: "Carreira muito boa - Trabalho gratificante com crescimento",
            8: "Carreira excelente - Posição de destaque e reconhecimento",
            9: "Carreira excepcional - Liderança e sucesso profissional",
            10: "Carreira perfeita - Realização profissional completa"
        },
        love: {
            1: "Vida amorosa em crise - Relacionamento tóxico ou solidão extrema",
            2: "Vida amorosa muito ruim - Relacionamento problemático",
            3: "Vida amorosa ruim - Relacionamento instável ou insatisfatório",
            4: "Vida amorosa abaixo da média - Relacionamento básico",
            5: "Vida amorosa regular - Relacionamento estável, mas sem paixão",
            6: "Vida amorosa boa - Relacionamento satisfatório e harmonioso",
            7: "Vida amorosa muito boa - Relacionamento feliz e equilibrado",
            8: "Vida amorosa excelente - Amor profundo e companheirismo",
            9: "Vida amorosa excepcional - Relacionamento muito especial",
            10: "Vida amorosa perfeita - Amor verdadeiro e plenitude"
        },
        spirituality: {
            1: "Espiritualidade ausente - Sem conexão com o sagrado",
            2: "Espiritualidade muito baixa - Pouca reflexão sobre o sentido da vida",
            3: "Espiritualidade baixa - Alguma busca por significado",
            4: "Espiritualidade abaixo da média - Reflexões ocasionais",
            5: "Espiritualidade regular - Busca moderada por crescimento espiritual",
            6: "Espiritualidade boa - Práticas espirituais regulares",
            7: "Espiritualidade muito boa - Conexão profunda com o sagrado",
            8: "Espiritualidade excelente - Desenvolvimento espiritual avançado",
            9: "Espiritualidade excepcional - Iluminação e sabedoria espiritual",
            10: "Espiritualidade perfeita - Plenitude espiritual completa"
        },
        family: {
            1: "Família em crise - Relacionamentos familiares muito problemáticos",
            2: "Família muito ruim - Conflitos familiares constantes",
            3: "Família ruim - Relacionamentos familiares instáveis",
            4: "Família abaixo da média - Relacionamentos familiares básicos",
            5: "Família regular - Relacionamentos familiares estáveis",
            6: "Família boa - Relacionamentos familiares harmoniosos",
            7: "Família muito boa - Família unida e amorosa",
            8: "Família excelente - Relacionamentos familiares muito fortes",
            9: "Família excepcional - Família muito especial e unida",
            10: "Família perfeita - Harmonia familiar completa"
        },
        money: {
            1: "Finanças em crise - Dívidas e problemas financeiros graves",
            2: "Finanças muito ruins - Situação financeira muito difícil",
            3: "Finanças ruins - Dificuldades financeiras constantes",
            4: "Finanças abaixo da média - Renda básica, sem sobras",
            5: "Finanças regulares - Renda suficiente para necessidades básicas",
            6: "Finanças boas - Renda confortável com algumas economias",
            7: "Finanças muito boas - Renda alta e boa gestão financeira",
            8: "Finanças excelentes - Renda muito alta e investimentos",
            9: "Finanças excepcionais - Independência financeira quase completa",
            10: "Finanças perfeitas - Independência financeira total"
        },
        fun: {
            1: "Diversão ausente - Sem momentos de lazer ou prazer",
            2: "Diversão muito baixa - Poucos momentos de lazer",
            3: "Diversão baixa - Lazer ocasional e básico",
            4: "Diversão abaixo da média - Algumas atividades de lazer",
            5: "Diversão regular - Lazer equilibrado com responsabilidades",
            6: "Diversão boa - Atividades de lazer satisfatórias",
            7: "Diversão muito boa - Vida social ativa e hobbies interessantes",
            8: "Diversão excelente - Muitas atividades prazerosas e viagens",
            9: "Diversão excepcional - Vida muito divertida e emocionante",
            10: "Diversão perfeita - Equilíbrio perfeito entre trabalho e lazer"
        },
        friends: {
            1: "Amizades ausentes - Isolamento social completo",
            2: "Amizades muito ruins - Poucos amigos e relacionamentos superficiais",
            3: "Amizades ruins - Amizades instáveis ou tóxicas",
            4: "Amizades abaixo da média - Alguns amigos, mas relacionamentos básicos",
            5: "Amizades regulares - Círculo de amigos estável",
            6: "Amizades boas - Amizades verdadeiras e confiáveis",
            7: "Amizades muito boas - Círculo social ativo e gratificante",
            8: "Amizades excelentes - Amizades profundas e duradouras",
            9: "Amizades excepcionais - Amizades muito especiais e significativas",
            10: "Amizades perfeitas - Relacionamentos de amizade ideais"
        }
    };

    let currentAreaIndex = 0;
    const isReportPage = window.location.pathname.includes('relatorio.php');

    let ctx, h2Title, pQuestion, ratingList, formIdInput, formHealthAndFitnessInput, skipButtonForm, evaluationSection;
    let reportSection, finalWheelCanvas, reportDateElement, printButton, savePdfButton, shareEmailButton;

    if (!isReportPage) {
        ctx = document.getElementById('preview_canvas').getContext('2d');
        h2Title = document.querySelector('.rate h2');
        pQuestion = document.querySelector('.rate p');
        ratingList = document.querySelector('.rate .rating');
        formIdInput = document.querySelector('form.edit_wheel input#id');
        formHealthAndFitnessInput = document.querySelector('form.edit_wheel input[name="wheel[health_and_fitness]"]');
        skipButtonForm = document.getElementById('edit_wheel_skip');
        evaluationSection = document.querySelector('.main-content');

        // Event listeners for rating selection
        ratingList.addEventListener('change', function(event) {
            const targetRadio = event.target;
            if (targetRadio.type === 'radio' && targetRadio.name.startsWith('wheel[')) {
                const areaId = targetRadio.name.substring(6, targetRadio.name.length - 1);
                const newValue = parseInt(targetRadio.value);

                const areaIndex = areas.findIndex(area => area.id === areaId);
                if (areaIndex !== -1) {
                    areas[areaIndex].value = newValue;
                    updateChartData(); // Atualiza o gráfico

                    // Atualiza o estilo dos botões de avaliação
                    document.querySelectorAll('.rate-bg').forEach(bg => {
                        bg.style.transform = 'scale(1)';
                        bg.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                    });
                    if (targetRadio.nextElementSibling) {
                        targetRadio.nextElementSibling.style.transform = 'scale(1.1)';
                        targetRadio.nextElementSibling.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                    }
                }
            }
        });

        renderCurrentArea(); // Chamada inicial para renderizar a primeira área e o gráfico
    }

    reportSection = document.getElementById('report-section');
    finalWheelCanvas = document.getElementById('final_wheel_canvas');
    reportDateElement = document.getElementById('report-date');
    printButton = document.getElementById('print-button');
    savePdfButton = document.getElementById('save-pdf-button');
    shareEmailButton = document.getElementById('share-email-button');

    let chart;
    if (!isReportPage) {
        chart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: areas.map(item => item.title),
                datasets: [{
                    label: 'Roda da Vida',
                    data: areas.map(item => item.value),
                    backgroundColor: areas.map(item => item.color + '80'),
                    borderColor: areas.map(item => item.color),
                    borderWidth: 2,
                    pointBackgroundColor: areas.map(item => item.color),
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: areas.map(item => item.color)
                }]
            },
            options: {
                scales: {
                    r: {
                        angleLines: {
                            display: true,
                            color: 'rgba(0,0,0,0.1)'
                        },
                        suggestedMin: 0,
                        suggestedMax: 10,
                        ticks: {
                            stepSize: 1,
                            backdropColor: 'rgba(255,255,255,0.75)'
                        },
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.raw}/10`;
                            }
                        }
                    }
                },
                animation: {
                    duration: 1000,
                    easing: 'easeInOutQuart'
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
        chart.update();
        console.log('Chart initialized:', chart);
    }


    function renderCurrentArea() {
        if (currentAreaIndex < areas.length) {
            const currentArea = areas[currentAreaIndex];
            h2Title.textContent = currentArea.title;
            pQuestion.textContent = `Como você avalia esta área da sua vida?`;
            formIdInput.value = currentArea.id; // Update hidden ID for the form

            document.querySelectorAll('.rating input[type="radio"]').forEach(radio => {
                radio.name = `wheel[${currentArea.id}]`;
                radio.checked = (parseInt(radio.value) === currentArea.value);
            });
            
            document.querySelectorAll('.rate-bg').forEach(bg => {
                bg.style.transform = 'scale(1)';
                bg.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            });
            const checkedRadio = document.querySelector(`input[name="wheel[${currentArea.id}]"]:checked`);
            if (checkedRadio && checkedRadio.nextElementSibling) {
                checkedRadio.nextElementSibling.style.transform = 'scale(1.1)';
                checkedRadio.nextElementSibling.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            }

        } else {
            // All areas evaluated - save data and redirect to report view
            localStorage.setItem('rodaDaVidaData', JSON.stringify(areas));
            window.location.href = 'relatorio.php';
        }
    }

    function updateChartData() {
        chart.data.datasets[0].data = areas.map(item => item.value);
        chart.update();
    }

    function renderReport() {
        const finalCtx = finalWheelCanvas.getContext('2d');
        new Chart(finalCtx, {
            type: 'radar',
            data: {
                labels: areas.map(item => item.title),
                datasets: [{
                    label: 'Minha Roda da Vida',
                    data: areas.map(item => item.value),
                    backgroundColor: areas.map(item => item.color + '80'),
                    borderColor: areas.map(item => item.color),
                    borderWidth: 2,
                    pointBackgroundColor: areas.map(item => item.color),
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: areas.map(item => item.color)
                }]
            },
            options: {
                scales: {
                    r: {
                        angleLines: {
                            display: true,
                            color: 'rgba(0,0,0,0.1)'
                        },
                        suggestedMin: 0,
                        suggestedMax: 10,
                        ticks: {
                            stepSize: 1,
                            backdropColor: 'rgba(255,255,255,0.75)'
                        },
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        },
                        pointLabels: {
                            font: {
                                size: 14
                            },
                            color: 'rgba(0,0,0,0.8)',
                            callback: function(label, index) {
                                return `${label} ${areas[index].value}`;
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.raw}/10`;
                            }
                        }
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });

        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        reportDateElement.textContent = today.toLocaleDateString('pt-BR', options);

        // Adicionar seção de descrições das áreas
        createAreaDescriptions();

        printButton.addEventListener('click', function() {
            window.print();
        });

        savePdfButton.addEventListener('click', function() {
            html2canvas(finalWheelCanvas).then(function(canvas) {
                const imgData = canvas.toDataURL('image/png');
                const { jsPDF } = window.jspdf;
                const pdf = new jsPDF({
                    orientation: 'portrait',
                    unit: 'px',
                    format: 'a4'
                });

                const imgWidth = 595;
                const pageHeight = 842;
                const imgHeight = canvas.height * imgWidth / canvas.width;
                let heightLeft = imgHeight;
                let position = 0;

                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;

                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                }

                pdf.save('minha-roda-da-vida.pdf');
            }).catch(error => {
                console.error('Erro ao gerar PDF:', error);
                alert('Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.'); // Mantendo o alerta de erro genérico
            });
        });

        shareEmailButton.addEventListener('click', function() {
            // O modal já é aberto automaticamente pelo data-bs-toggle
            // A funcionalidade será implementada no botão "Enviar Email" do modal
        });

        // Adicionar funcionalidade ao botão de enviar email
        const sendEmailBtn = document.getElementById('sendEmailBtn');
        if (sendEmailBtn) {
            sendEmailBtn.addEventListener('click', function() {
                sendEmail();
            });
        }
    }

    function createAreaDescriptions() {
        // Criar container para as descrições
        const descriptionsContainer = document.createElement('div');
        descriptionsContainer.className = 'area-descriptions mt-5';
        
        // Identificar áreas que precisam de melhoria (pontuação <= 5)
        const areasToImprove = areas.filter(area => area.value <= 5);
        
        descriptionsContainer.innerHTML = `
            <br><br><br><br><br><h3 class="mb-4 text-center">Análise Detalhada das Áreas da Vida</h3>
            <div class="row">
                <div class="col-12">
                    <div class="descriptions-list">
                        ${areas.map(area => {
                            const value = area.value;
                            const description = areaDescriptions[area.id][value] || 'Avaliação não fornecida';
                            const colorClass = value <= 3 ? 'text-danger' : value <= 5 ? 'text-warning' : value <= 7 ? 'text-info' : 'text-success';
                            
                            return `
                                <div class="area-item mb-3 p-3 border rounded">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <h5 class="mb-0" style="color: ${area.color}">
                                            <i class="fas fa-circle me-2"></i>${area.title}
                                        </h5>
                                        <span class="badge ${colorClass} fs-6">${value}/10</span>
                                    </div>
                                    <p class="mb-0 text-muted">${description}</p>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
            ${areasToImprove.length > 0 ? createImprovementTips(areasToImprove) : ''}
        `;

        // Inserir após a roda da vida
        const wheelContainer = document.querySelector('.wheel-preview-final');
        wheelContainer.parentNode.insertBefore(descriptionsContainer, wheelContainer.nextSibling);
    }

    function createImprovementTips(areasToImprove) {
        const improvementTips = {
            health_and_fitness: [
                "Estabeleça uma rotina de exercícios de 30 minutos por dia",
                "Mantenha uma alimentação equilibrada e hidratação adequada",
                "Priorize 7-8 horas de sono por noite",
                "Faça check-ups médicos regulares",
                "Reduza o consumo de alimentos processados"
            ],
            career: [
                "Identifique suas habilidades e interesses profissionais",
                "Busque oportunidades de desenvolvimento e capacitação",
                "Networking: conecte-se com profissionais da área",
                "Defina metas claras de carreira a curto e longo prazo",
                "Considere mudanças se o trabalho atual não for satisfatório"
            ],
            love: [
                "Invista tempo na comunicação com seu parceiro",
                "Pratique a empatia e compreensão mútua",
                "Planeje momentos especiais juntos",
                "Se solteiro, participe de atividades sociais",
                "Trabalhe na autoestima e autoconhecimento"
            ],
            spirituality: [
                "Reserve tempo para meditação ou oração diária",
                "Leia livros sobre desenvolvimento pessoal",
                "Conecte-se com a natureza regularmente",
                "Pratique gratidão e mindfulness",
                "Explore diferentes práticas espirituais"
            ],
            family: [
                "Dedique tempo de qualidade com a família",
                "Mantenha comunicação aberta e honesta",
                "Resolva conflitos de forma construtiva",
                "Crie tradições e momentos especiais",
                "Demonstre afeto e apreciação regularmente"
            ],
            money: [
                "Crie um orçamento mensal e controle gastos",
                "Estabeleça uma reserva de emergência",
                "Aprenda sobre investimentos e educação financeira",
                "Reduza dívidas e evite gastos desnecessários",
                "Busque formas de aumentar sua renda"
            ],
            fun: [
                "Reserve tempo semanal para hobbies e lazer",
                "Experimente novas atividades e experiências",
                "Mantenha contato com amigos e família",
                "Viaje e explore novos lugares",
                "Equilibre trabalho e diversão"
            ],
            friends: [
                "Inicie conversas e mantenha contato regular",
                "Participe de grupos com interesses similares",
                "Seja um bom ouvinte e amigo",
                "Organize encontros e atividades sociais",
                "Mantenha amizades antigas e faça novas"
            ]
        };

        return `
            <div class="improvement-tips mt-5">
                <h4 class="text-center mb-4" style="color: var(--primary-color);">
                    <i class="fas fa-lightbulb me-2"></i>Dicas para Melhorar suas Áreas de Destaque
                </h4>
                <div class="row">
                    ${areasToImprove.map(area => {
                        const tips = improvementTips[area.id];
                        return `
                            <div class="col-md-6 mb-4">
                                <div class="tip-card p-3 border rounded" style="border-left: 4px solid ${area.color} !important;">
                                    <h5 style="color: ${area.color};">
                                        <i class="fas fa-arrow-up me-2"></i>${area.title}
                                    </h5>
                                    <ul class="tip-list mt-3 mb-0">
                                        ${tips.slice(0, 3).map(tip => `
                                            <li class="mb-2">
                                                <i class="fas fa-check-circle me-2" style="color: ${area.color};"></i>
                                                ${tip}
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    function sendEmail() {
        const email = document.getElementById('emailAddress').value;
        const name = document.getElementById('emailName').value || 'Usuário';
        
        if (!email) {
            alert('Por favor, insira um endereço de email válido.');
            return;
        }

        // Mostrar loading no botão
        const sendBtn = document.getElementById('sendEmailBtn');
        const originalText = sendBtn.innerHTML;
        sendBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Enviando...';
        sendBtn.disabled = true;

        // Preparar dados para envio
        const formData = new FormData();
        formData.append('email', email);
        formData.append('name', name);
        formData.append('wheel_data', JSON.stringify(areas));

        // Enviar requisição
        fetch('send_email.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Restaurar botão
            sendBtn.innerHTML = originalText;
            sendBtn.disabled = false;

            if (data.success) {
                // Fechar modal de email
                const emailModal = bootstrap.Modal.getInstance(document.getElementById('emailModal'));
                emailModal.hide();
                
                // Mostrar modal de sucesso
                const successModal = new bootstrap.Modal(document.getElementById('successModal'));
                successModal.show();
                
                // Limpar formulário
                document.getElementById('emailForm').reset();
            } else {
                // Mostrar modal de erro
                document.getElementById('errorMessage').textContent = data.message;
                const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
                errorModal.show();
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            
            // Restaurar botão
            sendBtn.innerHTML = originalText;
            sendBtn.disabled = false;
            
            // Mostrar modal de erro
            document.getElementById('errorMessage').textContent = 'Erro de conexão. Tente novamente.';
            const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
            errorModal.show();
        });
    }

    if (!isReportPage) {
        document.querySelectorAll('.rating input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', function() {
                const value = parseInt(this.value);
                areas[currentAreaIndex].value = value;
                updateChartData();
                
                document.querySelectorAll('.rate-bg').forEach(bg => {
                    bg.style.transform = 'scale(1)';
                    bg.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                });
                
                this.nextElementSibling.style.transform = 'scale(1.1)';
                this.nextElementSibling.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                
                setTimeout(() => {
                    currentAreaIndex++;
                    renderCurrentArea();
                }, 1200);
            });
        });

        skipButtonForm.addEventListener('submit', function(event) {
            event.preventDefault();
            areas[currentAreaIndex].value = 0;
            updateChartData();
            
            setTimeout(() => {
                currentAreaIndex++;
                renderCurrentArea();
            }, 1200);
        });

        renderCurrentArea();
    } else {
        const storedData = localStorage.getItem('rodaDaVidaData');
        if (storedData) {
            areas = JSON.parse(storedData);
            renderReport();
            localStorage.removeItem('rodaDaVidaData'); // Clean up storage
        } else {
            console.warn('Nenhum dado da Roda da Vida encontrado. Redirecionando para a página inicial.');
            window.location.href = 'index.php'; // Redirect if no data
        }
    }
}); 