let pontuacaoJogador = 0;
pontuacaoJogadorClass = "pontos";

let pontuacaoComputador = 0;
pontuacaoComputadorClass = "pontos";

function jogar(escolha) {
    const opcoes = ["Pedra", "Papel", "Tesoura"];
    const escolhaPC = opcoes[Math.floor(Math.random() * 3)];
    escolhaClass = "escolha";
    
    let resultado;

    if (escolha === escolhaPC) {
        resultado = "Empate! ⚖️";
        resultadoClass = "empate";
    } else if (
        // Possibilidades da Pedra Vencer
        (escolha === "Pedra" && escolhaPC === "Tesoura") ||

        // Possibilidades do Papel Vencer
        (escolha === "Papel" && escolhaPC === "Pedra") ||

        // Possibilidades da Tesoura Vencer
        (escolha === "Tesoura" && escolhaPC === "Papel")
    ){
        resultado = "Você venceu! 🏆";
        resultadoClass = "vitoria";
        pontuacaoJogador++;
    } else {
        resultado = "Você perdeu! ❌";
        resultadoClass = "derrota";
        pontuacaoComputador++;
    }

    document.getElementById("resultado").innerHTML = `
        <p class="escolha">Você escolheu: ${escolha} | Computador escolheu: ${escolhaPC}</p>
        <h2 class="${resultadoClass}">${resultado}</h2>
    `;
    // Atualizar o placar
    document.getElementById("pontuacaoJogador").innerText = pontuacaoJogador;
    document.getElementById("pontuacaoComputador").innerText = pontuacaoComputador;
}
