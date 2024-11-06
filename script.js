
// elementos capturados 
const infoNpc= {
    nome: document.getElementById("nomeNpc"),
    Idade: document.getElementById("idadeNpc"),
    localizacao: document.getElementById("localNpc"),
}
const botao = document.getElementById("botao");
const spans = document.querySelectorAll(".span");
const resultado = document.querySelector(".resultado")


// modelo criado 
class NPC {
    constructor(nome, idade, localizacao){
        this.nome=nome;
        this.idade=idade;
        this.localizacao=localizacao;
    }

    exibirNPC(){
        // spans[0].innerText = this.nome
        // spans[1].innerText = this.idade
        // spans[2].innerText = this.localizacao

        const npcDiv = document.createElement("div");
        npcDiv.classList.add("npc");

        const nomeSpan = document.createElement("span");
        nomeSpan.innerText = `nome: ${this.nome}`;

        const idadeSpan = document.createElement("span");
        idadeSpan.innerText = `idade: ${this.idade}`;
       
        const localizacaoSpan = document.createElement("span");
        localizacaoSpan.innerText = `localizacao: ${this.localizacao}`;

        npcDiv.appendChild(nomeSpan);
        npcDiv.appendChild(idadeSpan);
        npcDiv.appendChild(localizacaoSpan);

        return npcDiv;
    };

}




//criando o evento de cliclk
botao.addEventListener("click", () => {

    //fazendo a instancia do novo npc
    const NPC1 = new NPC(
        infoNpc.nome.value,
        infoNpc.Idade.value,
        infoNpc.localizacao.value,
    );
    console.log(infoNpc.localizacao.value);

    resultado.appendChild(NPC1.exibirNPC());

});

