let textos = [
    "No mundo de Eryndor, um reino de dimensões interligadas por potais mágicos, existia uma grande força chamada Nexus das Sombras - Um ponto central onde todas as energias, tanto sombrias quanto luminosas, convergiam. O Nexus era o coração pulsante de Eryndor, mas também uma fonte de caos.",
    "Por eras, o equilíbrio do Nexus era mantido por um grupo de guerreiras lendárias, cada uma representado uma faceta única do mundo: vampiras, elfas, necromantes, guerreiras e magas. Porém, o poder do Nexus começou a sair do controle quando a magia que o sustentava foi corrompida, dividindo Eryndor em facções em constante disputa.",
    "Agora, cada guerreira deve lutar com seu povo para proteger, conquistar ou destruir o Nexus, seguindo suas próprias ambições e lealdades. Algumas lutam por justiça, outras pelo caos, e outras simplesmente por amor ou vingança."
];

let indiceTexto = 0; // Inicia com o primeiro texto

// Função para exibir o texto atual
function exibirTexto() {
    let instrucoes = document.getElementById('instrucoes');
    instrucoes.innerHTML = textos[indiceTexto];
}

// Função para animação de transição
function animarCaixaTexto() {
    let caixaTexto = document.getElementById('caixa-texto');
    caixaTexto.style.transform = "scale(0.5)";
    setTimeout(function () {
        caixaTexto.style.transform = "scale(1)";
    }, 1000);
}

// Botão "Avançar"
document.getElementById('btn-avancar').addEventListener('click', function () {
    // Verifica se chegou ao final da lista de textos
    if (indiceTexto >= textos.length - 1) {
        window.location.href = "jogo.html"; // Redireciona para a tela do jogo
        return; // Interrompe a execução do restante do código
    }

    // Avança para o próximo texto
    indiceTexto++;
    exibirTexto();
    animarCaixaTexto();
});

// Botão "Voltar"
document.getElementById('btn-voltar').addEventListener('click', function () {
    // Volta para o texto anterior
    if (indiceTexto > 0) {
        indiceTexto--;
    } else {
        indiceTexto = textos.length - 1; // Volta para o último texto se estiver no primeiro
    }

    exibirTexto();
    animarCaixaTexto();
});

// Não exibe o primeiro texto ao carregar a página (mantém a mensagem inicial do HTML)

//Controle do audio da página
window.addEventListener("DOMContentLoaded", function () {
    let musica = document.getElementById("musica-fundo");

    // Inicia a música após uma interação do usuário (necessário para alguns navegadores)
    document.body.addEventListener("click", function iniciarMusica() {
        musica.play().catch(error => console.log("Erro ao reproduzir áudio:", error));
        document.body.removeEventListener("click", iniciarMusica);
    });
});
