// Dados simulados para perguntas e respostas
const data = {
    "O que é a Murta Consultoria": "A Murta Consultoria é uma empresa sediada em Recife, Pernambuco, especializada em gestão e auditoria de sistemas de saúde. Com mais de 17 anos de atuação, tornou-se uma das principais empresas do Brasil no segmento de auditoria em saúde suplementar, oferecendo serviços personalizados para clientes de pequeno, médio e grande portes.",
    "Qual é a missão da Murta Consultoria?": "Nossa missão é promover a sustentabilidade nos sistemas de saúde, combatendo não conformidades e prezando pela qualidade da assistência por meio de soluções inovadoras e eficientes.",
    "Quais são os valores da empresa?": "Os valores que norteiam a Murta Consultoria incluem ética como padrão inegociável, foco em qualidade e inovação, paixão pelo que fazemos, colaboração e comunicação, crescimento sustentável, melhoria contínua, segurança e transparência das informações e cuidado com as pessoas.",
    "Em quais regiões a Murta Consultoria atua?": "Atuamos em todo o território nacional, com operações em 26 estados brasileiros, além do Distrito Federal. Nossa sede está localizada em Recife (PE), com uma estrutura comercial no coração da cidade, em um dos maiores centros empresariais da região.",
    "Quais serviços a Murta Consultoria oferece": "Oferecemos uma ampla gama de serviços que incluem auditoria de faturas hospitalares, auditoria de contas em pronto-socorro, auditoria concorrente, acompanhamento de cirurgias programadas, auditoria antifraude, auditoria de contas de home care, visita técnica de home care, gerenciamento de pacientes de longa permanência, perícia médica, análise de reembolso, análise de prontuário SUS, auditoria específica em nutrição, auditoria nos finais de semana, serviço social, análise de perfil dos referenciados (hospitais), auditoria odontológica, segunda opinião de procedimentos solicitados pelo cirurgião buco-maxilo-facial, regulação e perícia odontológica, gestão de OPME (Órteses, Próteses e Materiais Especiais), regulação médica e visita de acreditação.",
    "Quais tecnologias a Murta Consultoria utiliza para otimizar seus serviços?": "A Murta Consultoria utiliza diversas soluções tecnológicas para aprimorar seus serviços. O APP Murta otimiza o registro das atividades de visitas a pacientes hospitalizados, permitindo o acompanhamento clínico em tempo real. O Murta Cloud realiza controle de desperdício e processamento simplificado de informações. O Murta Dashboard possibilita consultas em tempo real de indicadores estratégicos, auxiliando na redução de custos de internação e na tomada de decisões. Já o Murta Health é um sistema voltado para operadoras de saúde que gerencia todo o processo envolvido, garantindo segurança através do reconhecimento facial.",
    "Como posso entrar em contato com a Murta Consultoria?": "Você pode entrar em contato conosco pelos seguintes canais: telefone administrativo (81) 3071-4992, telefone operacional (81) 3314-0709, comercial ou WhatsApp (61) 98189-8330, ou pelo e-mail contato@murtaconsultoria.com.br."
};

// Função para carregar as perguntas no dropdown
function loadAreas() {
    const areaSelect = document.getElementById('areas');
    areaSelect.innerHTML = '<option value="">Selecione uma pergunta:</option>';
    const areas = Object.keys(data);
    areas.forEach(area => {
        const option = document.createElement('option');
        option.value = area;
        option.text = area;
        areaSelect.appendChild(option);
    });
}

// Função para carregar a resposta correspondente à pergunta selecionada
function loadAnswer() {
    const selectedQuestion = document.getElementById('areas').value;
    const respostaDiv = document.getElementById('resposta');
    const respostaTexto = document.getElementById('resposta-texto');

    if (selectedQuestion) {
        // Exibe a resposta correspondente à pergunta
        respostaTexto.textContent = data[selectedQuestion];
        respostaDiv.style.display = 'block';
    } else {
        // Esconde a div de resposta se nenhuma pergunta for selecionada
        respostaDiv.style.display = 'none';
    }
}

// Carregar as perguntas ao iniciar a página
document.addEventListener('DOMContentLoaded', loadAreas);
