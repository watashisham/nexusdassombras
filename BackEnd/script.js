document.getElementById('btn-avancar').addEventListener('click', function() {
    let caixaTexto = document.getElementById('caixa-texto');
    let instrucoes = document.getElementById('instrucoes');

    // Animando a transição da caixa
    caixaTexto.style.transform = "scale(0.5)";
    
    // Esperando 1 segundo para finalizar a animação antes de trocar o texto
    setTimeout(function() {
        instrucoes.innerHTML = "Instrução 1: Prepare-se para a batalha!";
        caixaTexto.style.transform = "scale(1)";  // Volta ao tamanho normal com animação
    }, 1000);
});