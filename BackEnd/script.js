let textos = [
    "No mundo de Eryndor, um reino de dimensões interligadas por potais mágicos, existia uma grande força chamada Nexus das Sombras - Um ponto central onde todas as energias, tanto sombrias quanto luminosas, convergiam. O Nexus era o coração pulsante de Eryndor, mas também uma fonte de caos.",
    "Por eras, o equilíbrio do Nexus era mantido por um grupo de guerreiras lendárias, cada uma representado uma faceta única do mundo: vampiras, elfas, necromantes, guerreiras e magas. Porém, o poder do Nexus começou a sair do controle quando a magia que o sustentava foi corrompida, dividindo Eryndor em facções em constante disputa.",
    "Agora, cada guerreira deve lutar com seu povo para proteger, conquistar ou destruir o Nexus, seguindo suas próprias ambições e lealdades. Algumas lutam por justiça, outras pelo caos, e outras simplesmente por amor ou vingança."
];

let indiceTexto = 0; // Inicia com o primeiro texto

document.getElementById('btn-avancar').addEventListener('click', function() {
    let caixaTexto = document.getElementById('caixa-texto');
    let instrucoes = document.getElementById('instrucoes');

    // Se houver mais instruções, exibe a próxima
    if (indiceTexto < textos.length) {
        instrucoes.innerHTML = textos[indiceTexto];
        indiceTexto++; // Avança para o próximo texto
    }

    // Animação de transição
    caixaTexto.style.transform = "scale(0.5)";
    
    setTimeout(function() {
        caixaTexto.style.transform = "scale(1)";
    }, 1000);
});
