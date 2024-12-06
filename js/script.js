const data = {
    "Área de Contratos": {
        "Gerente de Contratos": {
            "Gestão de Relacionamento com a Operação": [
                "A01: Conforme a necessidade dos serviços solicitados",
                "A02: Verificar se o contrato está pertinente pelo contratante",
                "A03: Surgiu alguma problemática?",
                "CASO SIM: Ir para A04 e seguir leitura",
                "CASO NÃO: Ir para A12 e finalizar processo",
                "A04: Verificar demanda",
                "A05: Realizar análise de acordo com os serviços contextualizados)",
                "A06: Realizar tratativas para as problemáticas",
                "A07: Ficou claro a problemática?",
                "CASO SIM: Ir para A12 e finalizar processo",
                "CASO NÃO: Ir para A08 e seguir leitura",
                "A08: Realizar contato com o contratante para entender a demanda",
                "A09: Iniciar planos de ação imediatos",
                "A10: Ao final do mês", 
                "A11: Solicitar criação do relatório de indicações, à área de TI",
                "A12: Processo Finalizado"
            ],
            "Recebimento de Notificação": [
                "A01: Ao receber a notificação da operadora - Via E-mail ou por Carta",
                "A02: Realizar a leitura do motivo principal da notificação",
                "A03: Comunicar a área jurídica para que o mesmo crie a justificativa",
                "A04: Coletar justificativas",
                "A05: Realizar encaminhamento para o contratante",
                "A06: Solicitar esclarecimento para a operadora",
                "A07: Aguardar resposta do jurídivo",
                "A08: Realizar o retorno sempre dentro do prazo estabelecido do contrato ou da solicitação",
                "A09: Aguardar retorno acerca da confirmação de recebimento por parte da operadora",
                "A10: O processo foi acatado?",
                "CASO SIM: Ir para A11 e seguir leitura",
                "CASO NÃO: Ir para A14 e seguir leitura",
                "A11: Realizar a transmissão da informação para conhecimento de outra gestão",
                "A12: Enviar a informação para a gestão e para a operação",
                "A13: Processo Finalizado",
                "A14: Aguardar informe sobre penalidade com o valor",
                "A15: Encaminhar informações para a gestão e para a operação",
                "A16: Traçar planos de ação para minimizar as notificações e penalidades",
                "A17: Processo Finalizado"
            ]
        }
    },


    "Setor Comercial": {
        "Setor Comercial": {
            "Acompanhamento de Oportunidade": [
                "A01: Após entrega da proposta",
                "A02: A oportunidade é de iniciativa privada ou pública?",
                "Caso PRIVADA: Ir para A03 e pular para A12",
                "Caso PÚBLICA: Ir para A04 e seguir leitura",
                "A03: Iniciar negociação, podendo tratar de assuntos como redução de escopo, redução de valor e eliminação de risco",
                "A04: O processo é eletrônico?",
                "Caso SIM: Ir para A05 e seguir leitura",
                "Caso NÃO: Ir para A06 e seguir leitura",
                "A05: Acompanhar oportunidade através do portal ou plataforma",
                "A06: Acompanhar oportunidade via diário oficial e monitoramento junto à comissão de licitação por meio de ligações e e-mail",
                "A07: Verificar resultado da proposta",
                "A08: Verificar viabilidade de interpor algum recurso ou contrarrazão com jurídico, comercial, diretor da UN e CEO, conforme necessidade (té o quarto lugar teria o recurso)",
                "A09: Acompanhar decisão do recurso, se necessáriom em caso de interposição de recurso via plataforma necessária",
                "A10: Acompanhar resultado de homologação e adjudicação, caso não haja interposição de recurso",
                "A11: Verificar resultado final via plataforma, se necessário",
                "A12: A oportunidade foi ganha?",
                "Caso SIM: Ir para A15 e finalizar processo",
                "Caso NÃO: Ir para A13 e seguir leitura",
                "A13: Arquivar oportunidade no Pipeline e justificar",
                "A14: Continuar monitoramento do projeto para uma futura oportunidade de negócios",
                "A15: Acompanhamento finalizado"
            ],
            "Análise de Editais": [
                "A01: Após haver demonstração de interesse no edital",
                "A02: Criar uma pasta com histórico do projeto, na pasta dentro da rede com o edital, documentos, certidões e o que for relacionado ao edital",
                "A03: Inserir oportunidade no Pipeline",
                "A04: Aguardar análise crítica",
                "A05: Aguardar retorno de aprovação do Diretor Regional (tempo médio: 3 dias)",
                "A06: O edital foi aprovado?",
                "Caso SIM: Ir para A07 e pular pra A09",
                "Caso NÃO: Ir para A08",
                "A07: Realizar checklist antes da elaboração da proposta, usando formulário padrão conforme edital e Checklist (arquivo excel FO.CO.002_00 - Checklist documentos licitação)",
                "A08: Justificar 'No Go' no pipeline e arquivar",
                "A09: Análise de edital finalizada"
            ],
        }
    },


    "Setor de Planejamento": {
        "Setor de Planejamento": {
            "Assessoria nos Planejamentos dos Contratos": [
                "A01: Quando há necessidade",
                "A02: Alinhar com os gestores de contrato para verificar se há alguma necessidade, por reunião, e-mail ou pessoalmente",
                "A03: O gestor possui alguma necessidade?",
                "Caso SIM: Ir para A05 e seguir leitura",
                "Caso NÃO: Ir para A04 e finalizar processo",
                "A04: Assessoria cancelada",
                "A05: Entender a necessidade",
                "A06: Entrar em contato com o setor necessário explicando a situação, pelo Teams ou e-mail",
                "A07: Monitorar situação, entrando em contato com o setor ou gestor, por Teams ou e-mail",
                "A08: Abordar situação na reunião de Project Review",
                "A09: Assessoria finalizada"
            ],
            "Atualização de Status dos Contratos": [
                "A01: Mensalmente",
                "A02: Solicitar atualização TAP com informações dos contratos para os gestores",
                "A03: Receber atualização TAP com informações dos contratos dos gestores",
                "A04: Atualizar arquivos 'Contratos Estratégica' e 'Controle Administrativo'",
                "A05: Salvar nova planilha na pasta 'Planejamento' no Teams",
                "A06: Comunicar à controladoria, pelo Teams, que a planilha atualizada está na pasta",
                "A07: Processo de atualização de status dos contratos encerrado"
            ],
            "Coleta de Dados Profissionais e Despesas": [
                "A01: No quinto dia útil do mês",
                "A02: Solicitar ao coordenador de TI o relatório do sistema referente ao mês anterior, via Teams",
                "A03: Receber informações do sistema",
                "A04: Atualizar todos os planejamento dos contratos com informações recebidas",
                "A05: Fazer análise entre informações previstas nos planejamentos e informações realizados",
                "A06: Abrir pasta de gestão de contratos",
                "A07: Descrever análise no planejamento",
                "A08: Comunicar aos gestores que as informações estão atualizadas via e-mail",
                "A09: Realizar reunião de alinhamento dos devios das informações",
                "A10: Há informações alocadas de forma correta?",
                "Caso SIM: Ir para A11 e seguir leitura",
                "Caso NÃO: Ir para A14 e seguir leitura",
                "A11: Ajustar as informações na planilha de planejamento",
                "A12: Informar aos setores envolvidos que as informações foram ajustadas",
                "A13: Enviar para as diretorias com cópia para o gestor, via e-mail",
                "A14: Salvar planilha quando estiver organizada, na pasta 'APRORA' no Teams",
                "A15: Há necessidade de replanejar o contrato nos meses seguintes?",
                "Caso SIM: Ir para A16 e finalizar processo em A17",
                "Caso NÃO: Ir para A17 e finalizar processo",
                "A16: Replanejar na planilha de planejamento",
                "A17: Coleta de dados encerrada"
            ],
        }
    }
};

const descricaoDetalhada = {
    "A06: Entender necessidades de enxoval para a equipe": "Faça o login e, em seguida, clique no ícone localizado no canto inferior central da tela para realizar o cadastro do seu veículo.",
    "A05: Cadastrar veículo no aplicativo do Zona Azul": "Vá até o menu de veículos e insira as informações necessárias para o cadastro do novo veículo.",
    "A02: Receber programas (PGR)": "<img src='img/img-segurança/Doc. Preenchimento de EPI e Aplicação dos Programas de SST.png' style='width: 100%; height: auto;'>"
};

// Inicialização ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('modal-overlay').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
    loadAreas();
});

// Carregar áreas
function loadAreas() {
    const areaSelect = document.getElementById('areas');
    areaSelect.innerHTML = '<option value="">Selecione uma área:</option>';
    Object.keys(data).forEach(area => {
        const option = document.createElement('option');
        option.value = area;
        option.textContent = area;
        areaSelect.appendChild(option);
    });
}

// Carregar cargos
function loadCargos() {
    const area = document.getElementById('areas').value;
    const cargoSelect = document.getElementById('cargos');
    cargoSelect.innerHTML = '<option value="">Selecione um cargo:</option>';
    resetProcessDropdown();

    if (area) {
        Object.keys(data[area]).forEach(cargo => {
            const option = document.createElement('option');
            option.value = cargo;
            option.textContent = cargo;
            cargoSelect.appendChild(option);
        });
        cargoSelect.disabled = false;
    } else {
        cargoSelect.disabled = true;
    }
}

// Carregar processos
function loadProcessos() {
    const area = document.getElementById('areas').value;
    const cargo = document.getElementById('cargos').value;
    const processoSelect = document.getElementById('processos');
    resetProcessDropdown();

    if (cargo) {
        Object.keys(data[area][cargo]).forEach(processo => {
            const option = document.createElement('option');
            option.value = processo;
            option.textContent = processo;
            processoSelect.appendChild(option);
        });
        processoSelect.disabled = false;
    } else {
        processoSelect.disabled = true;
    }
}

// Carregar detalhes do processo
function loadDetalhes() {
    const area = document.getElementById('areas').value;
    const cargo = document.getElementById('cargos').value;
    const processo = document.getElementById('processos').value;
    const detalhesList = document.getElementById('detalhes-list');

    if (processo) {
        const etapas = data[area][cargo][processo];
        detalhesList.innerHTML = '';
        etapas.forEach(etapa => {
            const li = document.createElement('li');
            li.textContent = etapa;
            li.onclick = () => openModal(etapa);
            detalhesList.appendChild(li);
        });
        document.getElementById('detalhes').style.display = 'block';
    }


        // Mapeamento do nome do processo para a imagem do fluxograma correspondente
        //SEGURANÇA 
        let fluxogramaUrl;
        if (processo === "Gestão de Relacionamento com a Operação") {
            fluxogramaUrl = 'Reg. GestÃ£o de Relacionamento com a operaÃ§Ã£o (2) 20.11.2024 - Gustavo Albuquerque.png';
        } else if (processo === "Recebimento de Notificação") {
            fluxogramaUrl = 'Reg. Recebimento de NotificaÃ§Ã£o (4) 18.09.2024 - Gustavo Albuquerque.png';
        } else if (processo === "Fiscalizações de SST") {
            fluxogramaUrl = 'img/img-segurança/DOC. FiscalizaÃ§Ãµes de SST (3) 05.01.24 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Levantamento e Avaliação de Perigos e Riscos") {
            fluxogramaUrl = 'img/img-segurança/DOC. LEVANTAMENTO E AVALIAÃÃO DE PERIGOS E RISCOS (1) 25.06.2024 - Arthur Alves  Diagrama.png';
        } else if (processo === "Manutenção do Escritório da Empresa") {
            fluxogramaUrl = 'img/img-segurança/DOC. MANUTENÃÃO DO ESCRITORIO DA EMPRESA (2) 27.06.2024 - Arthur Alves Diagrama.png';
        } else if (processo === "Regularização da Brigada de Incêndios e Simulados") {
            fluxogramaUrl = 'img/img-segurança/DOC. RegularizaÃ§Ã£o da brigada de incÃªndios e simulados (2)  27.06.24 - EDUARDO GODOY Diagrama.png';
        } else if (processo === "Treinamentos de Integração de Segurança") {
            fluxogramaUrl = 'img/img-segurança/Doc. Treinamentos de SeguranÃ§a (3) 05.01.2024 - Pedro Couto Diagrama.png';
        } 
        
        //COMERCIAL
        else if (processo === "Acompanhamento de Oportunidade") {
            fluxogramaUrl = 'img/img-comercial/DOC. ACOMPANHAMENTO DE OPORTUNIDADE (3) 27.02.2024 - MOZART MENDES Diagrama.png';
        } else if (processo === "Análise de Editais") {
            fluxogramaUrl = 'img/img-comercial/DOC. ANÃLISE DE EDITAIS TO BE (2) 15.03.2024 - MOZART MENDES Diagrama.png';
        } else if (processo === "Atualização de Documentação") {
            fluxogramaUrl = 'img/img-comercial/DOC. ATUALIZAÃÃO DE DOCUMENTAÃÃO TO BE (1) 26.01.2024 - MOZART MENDES Diagrama.png';
        } else if (processo === "Captação de Oportunidade de Licitação") {
            fluxogramaUrl = 'img/img-comercial/DOC. CAPTAÃÃO DE OPORTUNIDADE (LICITAÃÃO) TO BE (2) 22.02.2024 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Elaboração da Proposta") {
            fluxogramaUrl = 'img/img-comercial/DOC. ELABORAÃÃO DA PROPOSTA TO BE (4) 22.02.2024 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Substituição de Profissionais de Contrato Vigente") {
            fluxogramaUrl = 'img/img-comercial/DOC. SUBSTITUIÃÃO DE PROFISSIONAIS DE CONTRATO VIGENTE TO BE (1) 22.02.2024 - ARTHUR MEDEIROS Diagrama.png';
        } 
        
        //PLANEJAMENTO
        else if (processo === "Assessoria nos Planejamentos dos Contratos") {
            fluxogramaUrl = 'img/img-planejamento/DOC. ASSESSORIA NOS PLANEJAMENTOS DOS CONTRATOS (1) 18.12.23 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Atualização de Status dos Contratos") {
            fluxogramaUrl = 'img/img-planejamento/DOC.  ATUALIZAÃÃO DE STATUS DOS CONTRATOS (1) 20.12.23 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Coleta de Dados Profissionais e Despesas") {
            fluxogramaUrl = 'img/img-planejamento/Doc. Coleta de Dados Profissionais e Despesas (1) 18.12.23 - Arthur Medeiros Diagrama.png';
        } else if (processo === "Encerramento dos Contratos") {
            fluxogramaUrl = 'img/img-planejamento/DOC. ENCERRAMENTO DOS CONTRATOS (2) 26.12.23 - ARTHUR MEDEIROS Diagrama (1).png';
        } else if (processo === "Previsão de Despesas e Receitas dos Contratos Ativos") {
            fluxogramaUrl = 'img/img-planejamento/Doc. PrevisÃ£o do acompanhamento de despesas e receitas dos contratos (1) 17.07.2024 - Breno Diagrama.png';
        } 

        //ADM E FINANCEIRO
        else if (processo === "Atendimento de Demanda de Informações Financeiras") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. ATENDIMENTO DE DEMANDA DE INFORMAÃÃES FINANCEIRAS TO BE (1) 02.04.24 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Processamento de Pagamento de Demandas Específicas") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. PROCESSAMENTO DE PAGAMENTO DE DEMANDAS ESPECÃFICAS TO BE (2) 02.04.24 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Proposição de Pagamentos") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. PROPOSIÃÃO DE PAGAMENTOS TO BE (2) 02.04.2024 - MOZART MENDES Diagrama.png';
        } else if (processo === "Realizar Análise de Conciliação") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. REALIZAR ANÃLISE DE CONCILIAÃÃO (2) 20.12.2023 - MOZART MENDES Diagrama.png';
        } else if (processo === "Reunião com Equipe Financeira (Diretoria e Operacional)") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. REUNIÃO COM EQUIPE FINANCEIRA (DIRETORIA E OPERACIONAL) (1) 22.12.23 - ARTHUR MEDEIROS .png';
        } else if (processo === "Reunião com Equipe Financeira (Lideranças)") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. REUNIÃO COM EQUIPE FINANCEIRA (LIDERANÃAS) (2) 22.12.23 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Reunir Comprovantes de Pagamentos da Semana") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. REUNIR COMPROVANTES DE PAGAMENTOS DA SEMANA (1) 22.12.23 - ARTHUR MEDEIROS .png';
        } else if (processo === "Verificação de Pagamentos a Receber pelas Contas Bancárias") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. VERIFICAÃÃO DE PAGAMENTOS A RECEBER PELAS CONTAS BANCÃRIAS TO BE (1) 02.04.2024 - MOZART MENDES Diagrama.png';
        } else if (processo === "Auditoria Anual") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. AUDITORIA ANUAL TO BE (2) 02.04.24 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Auditoria Mensal") {
           fluxogramaUrl = 'img/img-adm_fin/Doc. Auditoria Mensal TO BE (1) 04.02.2024 - Pedro Couto Diagrama.png';
        } else if (processo === "Envio de Comprovantes de Pagamentos") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. ENVIO DE COMPROVANTES DE PAGAMENTOS TO BE (1) 02.04.24- MOZART MENDES Diagrama.png';
        } else if (processo === "Lançamento de Aportes para Pagamento") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. LANÃAMENTO DE APORTES PARA PAGAMENTO TO BE (2) 02.04.24 - MOZART MENDES  Diagrama.png';
        } else if (processo === "Lançamento de RPA") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. LANÃAMENTO DE RPA TO BE (2) 02.04.24 - MOZART MENDES Diagrama.png';
        } else if (processo === "Lançamento dos CREA's e ART's") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. LANÃAMENTO DOS CREAÂ´S E ARTÂ´S TO BE (2) 02.04.2024 - MOZART MENDES  Diagrama.png';
        } else if (processo === "Prestação de Contas de Viagens") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. PRESTAÃÃO DE CONTAS DE VIAGENS TO BE (3) 02.04.2024 - MOZART MENDES Diagrama.png';
        } else if (processo === "Prestação de Conta Referente ao Adiantamento de Fundo Fixo") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. PRESTAÃÃO DE CONTA REFERENTE AO ADIANTAMENTO DE FUNDO FIXO TO BE (2) 02.04.2024 - MOZART MENDES Diagrama.png';
        } else if (processo === "Solicitação de Reembolsos") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. SOLICITAÃÃO DE REEMBOLSOS TO BE (3) 02.04.24 - MOZART MENDES Diagrama.png';
        } else if (processo === "Acompanhamento de Relatórios Contábeis, Financeiros, de Performance e Controladoria") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. ACOMPANHAMENTO DE RELATÃRIOS CONTÃBEIS E FINANCEIROS TO BE (2) 02.04.24 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Reunião de Planejamento de Fluxo de Caixa (Geral e Diretoria)") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. REUNIÃO DE PLANEJAMENTO DE FLUXO DE CAIXA TO BE (2) 02.04.24 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Reunião do Financeiro com Operacional em Situações de Crise de Liquidez") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. REUNIÃO DE PLANEJAMENTO DE FLUXO DE CAIXA TO BE (2) 02.04.24 - ARTHUR MEDEIROS Diagrama.png';
        } 

        //ADM E COMPRAS
        else if (processo === "Inclusão de Contrato no Sistema") {
            fluxogramaUrl = 'img/img-adm_compras/DOC. INCLUSÃO DE CONTRATO NO SISTEMA (2) 05.01.2024 - ROBERTA ZIRPOLI Diagrama.png';
        } else if (processo === "Lançamento de Notas e Faturas dos Fornecedores") {
            fluxogramaUrl = 'img/img-adm_compras/DOC. LANÃAMENTO DE NOTAS E FATURAS DOS FORNECEDORES (2) 05.01.2024 - MOZART MENDES  Diagrama.png';
        } else if (processo === "Realizar Faturamento das Medições") {
            fluxogramaUrl = 'img/img-adm_compras/DOC. REALIZAR FATURAMENTO DAS MEDIÃÃES (1) 06.02.2024 - MOZART MENDES Diagrama.png';
        } else if (processo === "Revisão das Notas de Fornecedores") {
            fluxogramaUrl = 'img/img-adm_compras/DOC. RevisÃ£o das notas de Forncecedores (2) 05.01.2024 - ROBERTA ZIRPOLI E MOZART MENDES Diagrama.png';
        } else if (processo === "Análise de Contrato de Aluguel") {
            fluxogramaUrl = 'img/img-adm_compras/DOC. ANÃLISE DE CONTRATO DE ALUGUEL (2) 13.12.2023 - MOZART MENDES E CECILIA MAIOCCHI Diagrama.png';
        } else if (processo === "Lançamento de Notas e Faturas de Imóveis e Outros") {
            fluxogramaUrl = 'img/img-adm_compras/DOC. LanÃ§amento de notas e faturas de ImÃ³veis e Outros (2) 13.12.2023 - MOZART MENDES Diagrama.png';
        } else if (processo === "Lançamento de Despesas de Imóveis") {
            fluxogramaUrl = 'img/img-adm_compras/DOC. LanÃ§amentos de Despesas de ImÃ³veis (2) 14.12.2023 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Realização de Cadastro de Cliente e Fornecedor") {
            fluxogramaUrl = 'img/img-adm_compras/DOC. REALIZAÃÃO DE CADASTRO DE CLIENTE E FORNECEDOR (2) 13.12.2023 - MOZART MENDES Diagrama.png';
        } else if (processo === "Recebimento de Demonstrativo de Pagamento dos Correios") {
            fluxogramaUrl = 'img/img-adm_compras/DOC. REALIZAR FATURAMENTO DAS MEDIÃÃES (1) 06.02.2024 - MOZART MENDES Diagrama.png';
        } else if (processo === "Solicitação de Envio de Material pelo Correios") {
            fluxogramaUrl = 'img/img-adm_compras/DOC. SOLICITAÃÃO DE ENVIO DE MATERIAL PELO CORREIOS (2) 14.12.23 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Assinatura de Documentos") {
            fluxogramaUrl = 'img/img-adm_compras/Doc. Assinatura de Documentos (2) 16.12.2023 - Pedro Couto Diagrama.png';
        } else if (processo === "Autorização de Pagamentos e Transferências") {
            fluxogramaUrl = 'img/img-adm_compras/Doc. AutorizaÃ§Ã£o de Pagamentos e TransferÃªncias (2) 16.12.2023 - Pedro Couto Diagrama.png';
        } else if (processo === "Rateio de Passagens e Hospedagens") {
            fluxogramaUrl = 'img/img-adm_compras/Doc. Rateio de Passagens e Hospedagens (2) 16.12.2023 - Pedro Couto Diagrama.png';
        }
        
        //TI
        else if (processo === "Bloqueio ou Redirecionamento de Conta") {
            fluxogramaUrl = 'img/img-ti/Doc. ConfiguraÃ§Ã£o de Equipamento (2) 21.12.2023 - Lucas Galindo Diagrama.png';
        } else if (processo === "Configuração de Equipamento") {
            fluxogramaUrl = 'img/img-ti/DOC. LANÃAMENTO DE NOTAS E FATURAS DOS FORNECEDORES (2) 05.01.2024 - MOZART MENDES  Diagrama.png';
        } else if (processo === "Encerramento de Contrato") {
            fluxogramaUrl = 'img/img-ti/Doc. Encerramento de contrato (1) 10.07.2024 - Breno FranÃ§a e Arthur Alves Diagrama.png';
        } else if (processo === "Início de Contrato") {
            fluxogramaUrl = 'img/img-ti/DOC. INÃCIO DO CONTRATO (2) 10.07.2024 - EDUARDO GODOY Diagrama (1).png';
        } else if (processo === "Lançamento de Nota Fiscal e Fatura de Software e Telefonia") {
            fluxogramaUrl = 'img/img-ti/Doc. LanÃ§amento de Nota Fiscal e Fatura de Software e Telefonia (2) 21.12.2023 - Lucas Galindo Diagrama.png';
        } else if (processo === "Manutenção dos Equipamentos de TI") {
            fluxogramaUrl = 'img/img-ti/Doc. ManutenÃ§Ã£o das MÃ¡quinas da Empresa (1) 21.12.2023 - Lucas Galindo Diagrama.png';
        } else if (processo === "Monitoramento de Contrato") {
            fluxogramaUrl = 'img/img-ti/Doc. Monitoramento de contrato (1) 10.07.2024 - Breno FranÃ§a e Arthur Alves Diagrama.png';
        } else if (processo === "Renovação de Licenças Atuais") {
            fluxogramaUrl = 'img/img-ti/Doc. RenovaÃ§Ã£o de LicenÃ§as Anuais (2) 21.12.2023 - Lucas Galindo Diagrama.png';
        } else if (processo === "Suporte Técnico aos Colaboradores") {
            fluxogramaUrl = 'img/img-ti/Doc. Suporte TÃ©cnico aos Colaboradores (1) 21.12.2023 - Lucas Galindo Diagrama.png';
        }

        else {
            fluxogramaUrl = null;
        }

        // Verificar se o URL do fluxograma foi definido e carregar a imagem
        const fluxogramaContainer = document.getElementById('fluxograma');
        const fluxogramaImagem = document.getElementById('fluxograma-imagem');

        if (fluxogramaUrl) {
            fluxogramaImagem.src = fluxogramaUrl;
            fluxogramaContainer.style.display = 'block';  // Mostrar o container
        } else {
            fluxogramaContainer.style.display = 'none';  // Ocultar o container se não houver imagem
        }
    }


function resetProcessDropdown() {
    const processoSelect = document.getElementById('processos');
    processoSelect.innerHTML = '<option value="">Selecione um processo:</option>';
    processoSelect.disabled = true;
    document.getElementById('detalhes-list').innerHTML = '';
    document.getElementById('fluxograma').style.display = 'none';
}

function openModal(etapa) {
    const descricao = descricaoDetalhada[etapa] || "Descrição detalhada não disponível.";
    document.getElementById('modal-description').innerHTML = descricao;
    openOverlay();
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    closeOverlay();
}

function openAddModal() {
    openOverlay();
    document.getElementById('add-process-modal').style.display = 'block';
}

function closeAddModal() {
    document.getElementById('add-process-modal').style.display = 'none';
    closeOverlay();
}

function addNewProcess() {
    const area = document.getElementById('new-area').value.trim();
    const role = document.getElementById('new-role').value.trim();
    const process = document.getElementById('new-process').value.trim();
    const steps = document.getElementById('new-steps').value.split(';').map(step => step.trim());

    if (!area || !role || !process || steps.length === 0) {
        alert('Preencha todos os campos.');
        return;
    }

    if (!data[area]) {
        data[area] = {};
    }
    if (!data[area][role]) {
        data[area][role] = {};
    }

    data[area][role][process] = steps;

    alert('Processo adicionado com sucesso!');
    closeAddModal();
    loadAreas(); // Atualizar os dropdowns
}

function openUpdateModal() {
    loadAreasForUpdate();
    openOverlay();
    document.getElementById('update-process-modal').style.display = 'block';
}

function closeUpdateModal() {
    document.getElementById('update-process-modal').style.display = 'none';
    closeOverlay();
}

function loadAreasForUpdate() {
    const areaSelect = document.getElementById('update-area');
    areaSelect.innerHTML = '<option value="">Selecione uma área:</option>';
    Object.keys(data).forEach(area => {
        const option = document.createElement('option');
        option.value = area;
        option.text = area;
        areaSelect.appendChild(option);
    });
}

function populateUpdateRoles() {
    const area = document.getElementById('update-area').value;
    const roleSelect = document.getElementById('update-role');
    roleSelect.innerHTML = '<option value="">Selecione um cargo:</option>';
    document.getElementById('update-process').innerHTML = '<option value="">Selecione um processo:</option>';
    document.getElementById('update-steps').value = '';

    if (area) {
        Object.keys(data[area]).forEach(role => {
            const option = document.createElement('option');
            option.value = role;
            option.textContent = role;
            roleSelect.appendChild(option);
        });
    }
}

function populateUpdateProcesses() {
    const area = document.getElementById('update-area').value;
    const role = document.getElementById('update-role').value;
    const processSelect = document.getElementById('update-process');
    processSelect.innerHTML = '<option value="">Selecione um processo:</option>';
    document.getElementById('update-steps').value = '';

    if (role) {
        Object.keys(data[area][role]).forEach(process => {
            const option = document.createElement('option');
            option.value = process;
            option.textContent = process;
            processSelect.appendChild(option);
        });
    }
}

function populateUpdateDetails() {
    const area = document.getElementById('update-area').value;
    const role = document.getElementById('update-role').value;
    const process = document.getElementById('update-process').value;

    if (process) {
        const steps = data[area][role][process];
        document.getElementById('update-steps').value = steps.join(', ');
    }
}

function updateProcess() {
    const area = document.getElementById('update-area').value;
    const role = document.getElementById('update-role').value;
    const process = document.getElementById('update-process').value;
    const steps = document.getElementById('update-steps').value.split(';').map(step => step.trim());

    if (!area || !role || !process || steps.length === 0) {
        alert('Preencha todos os campos.');
        return;
    }

    data[area][role][process] = steps;

    alert('Processo atualizado com sucesso!');
    closeUpdateModal();
    loadAreas();
}

function deleteProcess() {
    const area = document.getElementById('update-area').value;
    const role = document.getElementById('update-role').value;
    const process = document.getElementById('update-process').value;

    // Verificar se todos os campos necessários estão selecionados
    if (!area || !role || !process) {
        alert('Por favor, selecione a área, o cargo e o processo para excluir.');
        return;
    }

    // Confirmar exclusão
    const confirmDelete = confirm(`Tem certeza de que deseja excluir o processo "${process}"?`);
    if (!confirmDelete) return;

    // Remover o processo do objeto data
    delete data[area][role][process];

    // Verificar se o cargo ficou vazio
    if (Object.keys(data[area][role]).length === 0) {
        delete data[area][role]; // Remover o cargo se não tiver mais processos
    }

    // Verificar se a área ficou vazia
    if (Object.keys(data[area]).length === 0) {
        delete data[area]; // Remover a área se não tiver mais cargos
    }

    alert(`O processo "${process}" foi excluído com sucesso.`);
    closeUpdateModal();
    loadAreas(); // Atualizar os dropdowns
}

// Overlay handling
function openOverlay() {
    document.getElementById('modal-overlay').style.display = 'block';
}

function closeOverlay() {
    document.getElementById('modal-overlay').style.display = 'none';
}

// Carregar dados ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    loadAreas();
});
