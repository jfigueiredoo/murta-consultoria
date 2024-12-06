const data = {
    "Setor de Segurança": {
        "Gestor de SSO": {
            "Preenchimento de EPI e Aplicação dos Programas de SST": [
                "Máquina:",
                "1 - xxxxxx",
                "Mão de Obra:",
                "2 - xxxxxx",
                "Material:",
                "3 - xxxxxx",
                "Meio Ambiente:",
                "4 - xxxxxx",
                "Método:",
                "5 - xxxxxx",
                "Medida:",
                "6 - xxxxxx"
            ],
            "Processo Teste Murta Consultoria": [
                "Máquina:",
                "1 - yyyyyy",
                "Mão de Obra:",
                "2 - yyyyyy",
                "Material:",
                "3 - yyyyyy",
                "Meio Ambiente:",
                "4 - yyyyyy",
                "Método:",
                "5 - yyyyyy",
                "Medida:",
                "6 - yyyyyy"
            ]
        }
    },


    "Setor Comercial": {
        "Setor Comercial": {
            "Acompanhamento de Oportunidade": [
                "Máquina:",
                "1 - zzzzzz",
                "Mão de Obra:",
                "2 - zzzzzz",
                "Material:",
                "3 - zzzzzz",
                "Meio Ambiente:",
                "4 - zzzzzz",
                "Método:",
                "5 - zzzzzz",
                "Medida:",
                "6 - zzzzzz"
            ],
            "Análise de Editais": [
                "Máquina:",
                "1 - aaaaaa",
                "Mão de Obra:",
                "2 - aaaaaa",
                "Material:",
                "3 - aaaaaa",
                "Meio Ambiente:",
                "4 - aaaaaa",
                "Método:",
                "5 - aaaaaa",
                "Medida:",
                "6 - aaaaaa"
            ],
        }
    },

    "Setor de Comunicação e Marketing": {
        "Setor de Comunicação e Marketing": {
            "Criação de Material": [
                "Máquina:",
                "1 - xxxxxx",
                "Mão de Obra:",
                "2 - xxxxxx",
                "Material:",
                "3 - xxxxxx",
                "Meio Ambiente:",
                "4 - xxxxxx",
                "Método:",
                "5 - xxxxxx",
                "Medida:",
                "6 - xxxxxx"
            ],
        }
    }
};

const descricaoDetalhada = {
    "1 - xxxxxx": "texto de exemplo.",
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