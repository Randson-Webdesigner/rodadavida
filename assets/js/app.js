document.addEventListener("DOMContentLoaded", function () {
    let areas = [
        { id: "health_and_fitness", title: "Saúde", value: 0, color: "#2f9c88" },
        { id: "career", title: "Carreira", value: 0, color: "#2f6f9f" },
        { id: "love", title: "Amor", value: 0, color: "#b8586b" },
        { id: "spirituality", title: "Espiritualidade", value: 0, color: "#7d5aa8" },
        { id: "family", title: "Família", value: 0, color: "#c8943b" },
        { id: "money", title: "Finanças", value: 0, color: "#1f6b54" },
        { id: "fun", title: "Diversão", value: 0, color: "#d77c3f" },
        { id: "friends", title: "Amigos", value: 0, color: "#5f8c65" }
    ];

    const areaDescriptions = {
        health_and_fitness: {
            0: "Área não avaliada nesta rodada.",
            1: "Sua saúde pede atenção imediata e cuidado profissional.",
            2: "Há sinais importantes de desgaste físico ou emocional.",
            3: "Rotina, descanso e alimentação precisam ganhar prioridade.",
            4: "Existe algum cuidado, mas ainda falta consistência.",
            5: "Sua saúde está funcional, com espaço claro para evolução.",
            6: "Você já tem uma base positiva e pode refinar hábitos.",
            7: "Há bons hábitos estabelecidos e margem para excelência.",
            8: "Sua saúde está forte e bem sustentada no cotidiano.",
            9: "Você demonstra alto equilíbrio físico e mental.",
            10: "Sua saúde aparece como uma área de grande plenitude."
        },
        career: {
            0: "Área não avaliada nesta rodada.",
            1: "A carreira está em um ponto crítico e precisa de direção.",
            2: "O trabalho atual parece gerar mais peso do que crescimento.",
            3: "Há insatisfação relevante com rotina, papel ou perspectivas.",
            4: "A carreira funciona, mas ainda sem avanço consistente.",
            5: "Existe estabilidade, embora falte realização mais profunda.",
            6: "Você percebe oportunidades e algum senso de progresso.",
            7: "A carreira está saudável, com crescimento e reconhecimento.",
            8: "Você vive uma fase profissional forte e estimulante.",
            9: "Sua trajetória mostra liderança, clareza e impacto.",
            10: "A carreira aparece alinhada com propósito e realização."
        },
        love: {
            0: "Área não avaliada nesta rodada.",
            1: "A vida amorosa está exigindo cuidado e limites claros.",
            2: "Há dores ou conflitos que precisam ser encarados.",
            3: "O campo afetivo parece instável ou pouco nutritivo.",
            4: "Existe vínculo, mas ainda com pouca leveza ou presença.",
            5: "A vida amorosa está estável, mas pode ganhar profundidade.",
            6: "Há afeto e abertura para mais conexão.",
            7: "O relacionamento ou a vida afetiva estão bem encaminhados.",
            8: "Existe parceria, admiração e troca consistente.",
            9: "A vida amorosa está muito viva e significativa.",
            10: "Você percebe plenitude, reciprocidade e amor maduro."
        },
        spirituality: {
            0: "Área não avaliada nesta rodada.",
            1: "Falta conexão com sentido, silêncio ou transcendência.",
            2: "Há pouca escuta interior no ritmo atual.",
            3: "Você começa a buscar significado, mas ainda sem rotina.",
            4: "Existem reflexões ocasionais, com pouca prática.",
            5: "A espiritualidade está presente de forma moderada.",
            6: "Há práticas ou valores que sustentam seu centro.",
            7: "Você cultiva sentido, presença e conexão interior.",
            8: "A espiritualidade orienta escolhas de modo consistente.",
            9: "Há profundidade, sabedoria e serenidade nessa área.",
            10: "Você vive forte alinhamento espiritual e existencial."
        },
        family: {
            0: "Área não avaliada nesta rodada.",
            1: "As relações familiares pedem proteção e reparos urgentes.",
            2: "Conflitos ou afastamentos estão pesando bastante.",
            3: "Há instabilidade e pouco espaço de escuta.",
            4: "A convivência existe, mas ainda carece de qualidade.",
            5: "A família está estável, com vínculos a fortalecer.",
            6: "Há harmonia suficiente para construir mais proximidade.",
            7: "Os laços familiares estão saudáveis e presentes.",
            8: "Existe apoio, carinho e convivência significativa.",
            9: "A família aparece como fonte profunda de força.",
            10: "Você percebe harmonia e pertencimento familiar plenos."
        },
        money: {
            0: "Área não avaliada nesta rodada.",
            1: "As finanças exigem atenção urgente e plano de contenção.",
            2: "A pressão financeira está afetando sua tranquilidade.",
            3: "Há dificuldades recorrentes de organização ou renda.",
            4: "A renda cobre parte do necessário, mas sem folga.",
            5: "As finanças estão funcionais, com ajustes importantes.",
            6: "Existe controle inicial e possibilidade de reserva.",
            7: "A gestão financeira está consistente e mais segura.",
            8: "Você tem boa estrutura, planejamento e visão de futuro.",
            9: "As finanças sustentam liberdade e boas escolhas.",
            10: "Você vive excelente autonomia e clareza financeira."
        },
        fun: {
            0: "Área não avaliada nesta rodada.",
            1: "O prazer e o lazer quase não têm espaço na rotina.",
            2: "Há pouco descanso real e pouca leveza.",
            3: "Momentos prazerosos existem, mas são raros.",
            4: "O lazer aparece de forma tímida ou irregular.",
            5: "Existe algum equilíbrio entre dever e prazer.",
            6: "Você já reserva espaço para se renovar.",
            7: "A diversão está presente e ajuda seu bem-estar.",
            8: "Você vive experiências prazerosas com frequência.",
            9: "A vida tem leveza, variedade e entusiasmo.",
            10: "Você integra prazer, descanso e vitalidade com maestria."
        },
        friends: {
            0: "Área não avaliada nesta rodada.",
            1: "A rede de apoio social está muito frágil.",
            2: "Há isolamento ou vínculos pouco confiáveis.",
            3: "As amizades parecem distantes ou instáveis.",
            4: "Existe contato, mas falta profundidade.",
            5: "O círculo social está estável, com espaço para presença.",
            6: "Há boas amizades e oportunidades de mais convivência.",
            7: "Você tem vínculos saudáveis e trocas importantes.",
            8: "As amizades são presentes, nutritivas e confiáveis.",
            9: "Sua rede social é forte e cheia de significado.",
            10: "Você vive amizades profundas, leves e recíprocas."
        }
    };

    const improvementTips = {
        health_and_fitness: [
            "Agende um check-up e transforme cuidado em rotina.",
            "Defina uma meta simples de sono, água e movimento.",
            "Escolha uma atividade física sustentável para sua semana."
        ],
        career: [
            "Liste três competências que podem abrir novas oportunidades.",
            "Converse com alguém da área que você admira.",
            "Defina uma meta profissional mensurável para os próximos 30 dias."
        ],
        love: [
            "Crie uma conversa honesta sobre necessidades e limites.",
            "Reserve tempo de qualidade sem distrações.",
            "Observe padrões afetivos que você deseja repetir ou encerrar."
        ],
        spirituality: [
            "Separe dez minutos diários para silêncio, oração ou meditação.",
            "Registre gratidões e aprendizados no fim do dia.",
            "Procure práticas que conectem sentido, corpo e presença."
        ],
        family: [
            "Convide alguém da família para uma conversa sem pressa.",
            "Reconheça algo positivo antes de abordar um conflito.",
            "Crie um pequeno ritual de presença semanal."
        ],
        money: [
            "Mapeie entradas, gastos fixos e gastos invisíveis.",
            "Defina uma reserva mínima e automatize parte dela.",
            "Escolha uma dívida ou desperdício para reduzir primeiro."
        ],
        fun: [
            "Bloqueie um horário real de lazer na agenda.",
            "Retome um hobby pequeno antes de buscar grandes planos.",
            "Inclua descanso como compromisso, não como sobra."
        ],
        friends: [
            "Envie uma mensagem para alguém importante hoje.",
            "Marque um encontro simples, sem esperar a ocasião perfeita.",
            "Participe de um grupo ou atividade com interesses em comum."
        ]
    };

    let currentAreaIndex = 0;
    const isReportPage = window.location.pathname.includes("relatorio.php");

    const chartOptions = {
        scales: {
            r: {
                suggestedMin: 0,
                suggestedMax: 10,
                ticks: {
                    stepSize: 1,
                    color: "rgba(23, 32, 28, 0.55)",
                    backdropColor: "rgba(255, 253, 248, 0.75)"
                },
                grid: { color: "rgba(23, 32, 28, 0.12)" },
                angleLines: { color: "rgba(23, 32, 28, 0.13)" },
                pointLabels: {
                    color: "#17201c",
                    font: { size: 13, weight: "700" }
                }
            }
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.label}: ${context.raw}/10`;
                    }
                }
            }
        },
        animation: {
            duration: 700,
            easing: "easeOutQuart"
        },
        responsive: true,
        maintainAspectRatio: false
    };

    function chartData(label) {
        return {
            labels: areas.map((area) => area.title),
            datasets: [{
                label,
                data: areas.map((area) => area.value),
                backgroundColor: "rgba(31, 107, 84, 0.18)",
                borderColor: "#1f6b54",
                borderWidth: 3,
                pointRadius: 5,
                pointHoverRadius: 7,
                pointBackgroundColor: areas.map((area) => area.color),
                pointBorderColor: "#fff",
                pointBorderWidth: 2
            }]
        };
    }

    function resetRatingVisuals() {
        document.querySelectorAll(".rate-bg").forEach((bg) => {
            bg.classList.remove("is-selected");
            bg.style.removeProperty("transform");
            bg.style.removeProperty("box-shadow");
        });
    }

    function renderCurrentArea() {
        const title = document.querySelector(".rate h2");
        const question = document.querySelector(".rate .lead");
        const formIdInputs = document.querySelectorAll("form.edit_wheel input#id");
        const progressPill = document.getElementById("progress-pill");

        if (currentAreaIndex >= areas.length) {
            localStorage.setItem("rodaDaVidaData", JSON.stringify(areas));
            window.location.href = "relatorio.php";
            return;
        }

        const currentArea = areas[currentAreaIndex];
        title.textContent = currentArea.title;
        question.textContent = "Dê uma nota de 1 a 10 para esta área da sua vida. A próxima área aparece automaticamente.";
        progressPill.textContent = `${currentAreaIndex + 1} de ${areas.length}`;

        formIdInputs.forEach((input) => {
            input.value = currentArea.id;
        });

        document.querySelectorAll(".rating input[type='radio']").forEach((radio) => {
            radio.name = `wheel[${currentArea.id}]`;
            radio.checked = parseInt(radio.value, 10) === currentArea.value;
        });

        resetRatingVisuals();
        const checkedRadio = document.querySelector(`input[name="wheel[${currentArea.id}]"]:checked`);
        if (checkedRadio && checkedRadio.nextElementSibling) {
            checkedRadio.nextElementSibling.classList.add("is-selected");
        }
    }

    function scoreClass(value) {
        if (value <= 3) return "score-low";
        if (value <= 5) return "score-mid";
        if (value <= 7) return "score-good";
        return "score-great";
    }

    function createAreaDescriptions() {
        const descriptionsContainer = document.createElement("div");
        descriptionsContainer.className = "area-descriptions";

        descriptionsContainer.innerHTML = `
            <h3 class="section-title">Análise detalhada</h3>
            <div class="descriptions-list">
                ${areas.map((area) => {
                    const value = Number(area.value) || 0;
                    const description = areaDescriptions[area.id][value] || "Avaliação não fornecida.";

                    return `
                        <article class="area-item" style="border-left: 4px solid ${area.color};">
                            <div class="area-item-header">
                                <h5 style="color: ${area.color};">${area.title}</h5>
                                <span class="score-badge ${scoreClass(value)}">${value}/10</span>
                            </div>
                            <p>${description}</p>
                        </article>
                    `;
                }).join("")}
            </div>
        `;

        const wheelContainer = document.querySelector(".wheel-preview-final");
        wheelContainer.parentNode.insertBefore(descriptionsContainer, wheelContainer.nextSibling);
    }

    function createImprovementTips() {
        const areasToImprove = areas
            .filter((area) => Number(area.value) > 0 && Number(area.value) <= 5)
            .sort((a, b) => a.value - b.value)
            .slice(0, 4);

        if (!areasToImprove.length) return;

        const tipsContainer = document.createElement("div");
        tipsContainer.className = "improvement-tips";
        tipsContainer.innerHTML = `
            <h3 class="section-title">Próximos passos</h3>
            <div class="tips-grid">
                ${areasToImprove.map((area) => `
                    <article class="tip-card" style="border-left: 4px solid ${area.color};">
                        <h5 style="color: ${area.color};">${area.title}</h5>
                        <ul class="tip-list">
                            ${improvementTips[area.id].map((tip) => `<li>${tip}</li>`).join("")}
                        </ul>
                    </article>
                `).join("")}
            </div>
        `;

        const descriptionsContainer = document.querySelector(".area-descriptions");
        descriptionsContainer.parentNode.insertBefore(tipsContainer, descriptionsContainer.nextSibling);
    }

    function renderReport() {
        const finalWheelCanvas = document.getElementById("final_wheel_canvas");
        const reportDateElement = document.getElementById("report-date");
        const printButton = document.getElementById("print-button");
        const savePdfButton = document.getElementById("save-pdf-button");

        new Chart(finalWheelCanvas.getContext("2d"), {
            type: "radar",
            data: chartData("Minha Roda da Vida"),
            options: chartOptions
        });

        const today = new Date();
        reportDateElement.textContent = `Gerado em ${today.toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "long",
            day: "numeric"
        })}`;

        createAreaDescriptions();
        createImprovementTips();

        if (printButton) {
            printButton.addEventListener("click", function () {
                window.print();
            });
        }

        if (savePdfButton) {
            savePdfButton.addEventListener("click", function () {
                const reportSection = document.getElementById("report-section");
                html2canvas(reportSection, { scale: 2, backgroundColor: "#ffffff" })
                    .then(function (canvas) {
                        const imgData = canvas.toDataURL("image/png");
                        const { jsPDF } = window.jspdf;
                        const pdf = new jsPDF({
                            orientation: "portrait",
                            unit: "px",
                            format: "a4"
                        });

                        const pageWidth = pdf.internal.pageSize.getWidth();
                        const pageHeight = pdf.internal.pageSize.getHeight();
                        const imgHeight = (canvas.height * pageWidth) / canvas.width;
                        let heightLeft = imgHeight;
                        let position = 0;

                        pdf.addImage(imgData, "PNG", 0, position, pageWidth, imgHeight);
                        heightLeft -= pageHeight;

                        while (heightLeft > 0) {
                            position -= pageHeight;
                            pdf.addPage();
                            pdf.addImage(imgData, "PNG", 0, position, pageWidth, imgHeight);
                            heightLeft -= pageHeight;
                        }

                        pdf.save("minha-roda-da-vida.pdf");
                    })
                    .catch(function () {
                        alert("Não foi possível gerar o PDF agora. Tente novamente.");
                    });
            });
        }
    }

    if (!isReportPage) {
        const previewCanvas = document.getElementById("preview_canvas");
        const ratingList = document.querySelector(".rate .rating");
        const skipButtonForm = document.getElementById("edit_wheel_skip");

        const chart = new Chart(previewCanvas.getContext("2d"), {
            type: "radar",
            data: chartData("Roda da Vida"),
            options: chartOptions
        });

        function updateChartData() {
            chart.data.datasets[0].data = areas.map((area) => area.value);
            chart.update();
        }

        ratingList.addEventListener("change", function (event) {
            const targetRadio = event.target;
            if (targetRadio.type !== "radio") return;

            const value = parseInt(targetRadio.value, 10);
            areas[currentAreaIndex].value = value;
            resetRatingVisuals();

            if (targetRadio.nextElementSibling) {
                targetRadio.nextElementSibling.classList.add("is-selected");
            }

            updateChartData();

            window.setTimeout(function () {
                currentAreaIndex++;
                renderCurrentArea();
            }, 520);
        });

        skipButtonForm.addEventListener("submit", function (event) {
            event.preventDefault();
            areas[currentAreaIndex].value = 0;
            updateChartData();

            window.setTimeout(function () {
                currentAreaIndex++;
                renderCurrentArea();
            }, 260);
        });

        renderCurrentArea();
    } else {
        const storedData = localStorage.getItem("rodaDaVidaData");
        if (!storedData) {
            window.location.href = "index.php";
            return;
        }

        areas = JSON.parse(storedData);
        renderReport();
        localStorage.removeItem("rodaDaVidaData");
    }
});
