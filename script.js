
const infoNpc = {
    nome: document.getElementById("nomeNpc"),
    idade: document.getElementById("idadeNpc"),
    localizacao: document.getElementById("localNpc"),
};
const botao = document.getElementById("botao");
const resultado = document.querySelector(".resultado");

// Modelo criado 
class NPC {
    constructor(nome, idade, localizacao) {
        this.nome = nome;
        this.idade = idade;
        this.localizacao = localizacao;
    }

    exibirNPC() {
        const npcDiv = document.createElement("div");
        npcDiv.classList.add("npc");

        const nomeSpan = document.createElement("span");
        nomeSpan.innerText = `Nome: ${this.nome}`;

        const idadeSpan = document.createElement("span");
        idadeSpan.innerText = `Idade: ${this.idade}`;

        const localizacaoSpan = document.createElement("span");
        localizacaoSpan.innerText = `Localização: ${this.localizacao}`;

        // Botão de Editar
        const editarBtn = document.createElement("button");
        editarBtn.innerText = "Editar";
        editarBtn.addEventListener("click", () => this.editarNPC(npcDiv));

        // Botão de Excluir
        const excluirBtn = document.createElement("button");
        excluirBtn.innerText = "Excluir";
        excluirBtn.addEventListener("click", () => npcDiv.remove());

        // Adicionando elementos ao contêiner do NPC
        npcDiv.appendChild(nomeSpan);
        npcDiv.appendChild(idadeSpan);
        npcDiv.appendChild(localizacaoSpan);
        npcDiv.appendChild(editarBtn);
        npcDiv.appendChild(excluirBtn);

        return npcDiv;
    }

    // Função de edição
    editarNPC(npcDiv) {
        // Preenche os campos com as informações do NPC
        infoNpc.nome.value = this.nome;
        infoNpc.idade.value = this.idade;
        infoNpc.localizacao.value = this.localizacao;

        // Altera o texto do botão para "Salvar" e remove eventos anteriores
        botao.innerText = "Salvar";
        botao.removeEventListener("click", adicionarNPC);

        // Adiciona o evento de salvar o NPC editado
        const salvarEdicao = () => {
            this.nome = infoNpc.nome.value;
            this.idade = infoNpc.idade.value;
            this.localizacao = infoNpc.localizacao.value;

            // Atualiza os spans com os novos valores
            npcDiv.querySelector("span:nth-child(1)").innerText = `Nome: ${this.nome}`;
            npcDiv.querySelector("span:nth-child(3)").innerText = `Idade: ${this.idade}`;
            npcDiv.querySelector("span:nth-child(5)").innerText = `Localização: ${this.localizacao}`;

            // Restaura o botão para criação de novos NPCs
            botao.innerText = "Criar NPC";
            botao.removeEventListener("click", salvarEdicao); // Remove o evento de salvar
            botao.addEventListener("click", adicionarNPC);     // Restaura o evento de adicionar NPC

            // Limpa os campos de entrada
            infoNpc.nome.value = '';
            infoNpc.idade.value = '';
            infoNpc.localizacao.value = '';
        };

        botao.addEventListener("click", salvarEdicao);
    }
}

// Função para adicionar NPC ao contêiner
function adicionarNPC() {
    const novoNPC = new NPC(
        infoNpc.nome.value,
        infoNpc.idade.value,
        infoNpc.localizacao.value
    );

    resultado.appendChild(novoNPC.exibirNPC());

    infoNpc.nome.value = '';
    infoNpc.idade.value = '';
    infoNpc.localizacao.value = '';
}

// Evento de clique inicial no botão
botao.addEventListener("click", adicionarNPC);