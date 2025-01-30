// Importando os baralhos de cartas
import { baralhoVampiras, baralhoNecromantes, baralhoGuerreiras, baralhoElfas, baralhoMagas } from './card.js';

// Agora você pode usar os baralhos no seu jogo
console.log("Vampiras", baralhoVampiras); // Exibe o baralho de vampiras
console.log("Necromantes", baralhoNecromantes); // Exibe o baralho de necromantes
// console.log(baralhoGuerreiras); // Exibe o baralho de vampiras
// console.log(baralhoElfas); // Exibe o baralho de necromantes
// console.log(baralhoMagas); // Exibe o baralho de vampiras

//LOGICA DO JOGO
// Variáveis do jogo
let turnosJogador = 0;
let turnosOponente = 0;
let cartasJogador = [];
let cartasOponente = [];
let cartaSelecionadaJogador = null;
let cartaSelecionadaOponente = null;
let turnoAtual = 1;

// Função para sortear cartas
function sortearCartas() {
    cartasJogador = [...cartas].sort(() => Math.random() - 0.5).slice(0, 5); // Sorteia 5 cartas para o jogador
    cartasOponente = [...cartas].sort(() => Math.random() - 0.5).slice(0, 5); // Sorteia 5 cartas para o oponente
    exibirCartas();
}

// Função para exibir cartas na tela
function exibirCartas() {
    const areaJogador = document.getElementById('cartas-jogador');
    const areaOponente = document.getElementById('cartas-oponente');

    areaJogador.innerHTML = cartasJogador.map(carta => `
        <div class="carta" data-nome="${carta.nome}" onclick="selecionarCartaJogador('${carta.nome}')">
            <h3>${carta.nome}</h3>
            <p>Ataque: ${carta.ataque}</p>
            <p>Defesa: ${carta.defesa}</p>
            <p>Magia: ${carta.magia}</p>
        </div>
    `).join('');

    areaOponente.innerHTML = cartasOponente.map(carta => `
        <div class="carta" data-nome="${carta.nome}">
            <h3>${carta.nome}</h3>
            <p>Ataque: ${carta.ataque}</p>
            <p>Defesa: ${carta.defesa}</p>
            <p>Magia: ${carta.magia}</p>
        </div>
    `).join('');
}

// Função para selecionar a carta do jogador
function selecionarCartaJogador(nomeCarta) {
    cartaSelecionadaJogador = cartasJogador.find(carta => carta.nome === nomeCarta);
    alert(`Carta selecionada: ${cartaSelecionadaJogador.nome}`);
}

// Função para aplicar efeito de magia
function aplicarMagia() {
    if (cartaSelecionadaJogador) {
        cartaSelecionadaJogador.efeitoMagia(); // Aplica o efeito da magia
        alert(`Magia ativada: ${cartaSelecionadaJogador.magia}`);
        exibirCartas(); // Atualiza a exibição das cartas
    } else {
        alert("Selecione uma carta primeiro!");
    }
}

// Função para comparar habilidades
function compararHabilidades(habilidadeJogador, habilidadeOponente) {
    const ataqueJogador = cartaSelecionadaJogador.ataque;
    const defesaJogador = cartaSelecionadaJogador.defesa;
    const ataqueOponente = cartaSelecionadaOponente.ataque;
    const defesaOponente = cartaSelecionadaOponente.defesa;

    if (habilidadeJogador === "ataque" && habilidadeOponente === "defesa") {
        return ataqueJogador > defesaOponente ? "jogador" : "oponente";
    } else if (habilidadeJogador === "defesa" && habilidadeOponente === "ataque") {
        return defesaJogador > ataqueOponente ? "jogador" : "oponente";
    } else if (habilidadeJogador === "magia" || habilidadeOponente === "magia") {
        return "empate"; // Magias podem resultar em empate ou ter regras específicas
    } else {
        return "empate"; // Caso padrão
    }
}


// Função para exibir resultado do turno
function exibirResultadoTurno(resultado) {
    const mensagem = document.createElement('div');
    mensagem.className = 'mensagem';
    mensagem.textContent = resultado === "jogador" ? "Você venceu este turno!" :
                           resultado === "oponente" ? "Você perdeu este turno!" :
                           "Este turno terminou em empate!";
    document.body.appendChild(mensagem);

    setTimeout(() => {
        mensagem.remove();
    }, 3000); // Remove a mensagem após 3 segundos
}


// Função para avançar o turno
function avançarTurno() {
    if (turnoAtual > 5) {
        finalizarJogo();
        return;
    }

    // Lógica do oponente (escolha aleatória)
    cartaSelecionadaOponente = cartasOponente[Math.floor(Math.random() * cartasOponente.length)];
    const habilidadeOponente = ["ataque", "defesa", "magia"][Math.floor(Math.random() * 3)];

    // Comparar habilidades
    const resultado = compararHabilidades("ataque", habilidadeOponente); // Exemplo: jogador sempre ataca
    if (resultado === "jogador") {
        turnosJogador++;
    } else if (resultado === "oponente") {
        turnosOponente++;
    }

    // Atualizar placar
    document.getElementById('turnos-jogador').textContent = turnosJogador;
    document.getElementById('turnos-oponente').textContent = turnosOponente;

    // Avançar para o próximo turno
    turnoAtual++;
    alert(`Turno ${turnoAtual} iniciado!`);
}

// Função para finalizar o jogo
// function finalizarJogo() {
//     if (turnosJogador > turnosOponente) {
//         alert("Você venceu o jogo!");
//     } else if (turnosOponente > turnosJogador) {
//         alert("Você perdeu o jogo!");
//     } else {
//         alert("O jogo terminou em empate!");
//     }
// }

// Iniciar o jogo
sortearCartas();


//RESULTADO FINAL
function finalizarJogo() {
    const mensagemFinal = document.createElement('div');
    mensagemFinal.className = 'mensagem-final';
    mensagemFinal.textContent = turnosJogador > turnosOponente ? "Você venceu o jogo!" :
                                turnosOponente > turnosJogador ? "Você perdeu o jogo!" :
                                "O jogo terminou em empate!";
    document.body.appendChild(mensagemFinal);
}