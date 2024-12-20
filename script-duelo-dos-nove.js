let pontuacaoJogador = 0;
pontuacaoJogadorClass = "pontos";

let pontuacaoComputador = 0;
pontuacaoComputadorClass = "pontos";

function jogar(escolha) {
    const opcoes = ["Pedra", "Papel", "Tesoura", "Fogo", "Agua", "Martelo", "Cobra", "Agulha", "Esponja"];
    const escolhaPC = opcoes[Math.floor(Math.random() * 9)];
    escolhaClass = "escolha";
    
    let resultado;

    if (escolha === escolhaPC) {
        resultado = "Empate! ⚖️";
        resultadoClass = "empate";
    } else if (
        // Possibilidades da Pedra Vencer
        (escolha === "Pedra" && escolhaPC === "Tesoura") ||
        (escolha === "Pedra" && escolhaPC === "Cobra") ||
        (escolha === "Pedra" && escolhaPC === "Agulha") ||
        (escolha === "Pedra" && escolhaPC === "Esponja") ||

        // Possibilidades do Papel Vencer
        (escolha === "Papel" && escolhaPC === "Pedra") ||
        (escolha === "Papel" && escolhaPC === "Martelo") ||
        (escolha === "Papel" && escolhaPC === "Esponja") ||

        // Possibilidades da Tesoura Vencer
        (escolha === "Tesoura" && escolhaPC === "Papel") ||
        (escolha === "Tesoura" && escolhaPC === "Cobra") ||
        (escolha === "Tesoura" && escolhaPC === "Esponja") ||
        (escolha === "Tesoura" && escolhaPC === "Agulha") ||

        // Possibilidades do Fogo Vencer
        (escolha === "Fogo" && escolhaPC === "Pedra") ||
        (escolha === "Fogo" && escolhaPC === "Papel") ||
        (escolha === "Fogo" && escolhaPC === "Tesoura") ||
        (escolha === "Fogo" && escolhaPC === "Cobra") ||
        (escolha === "Fogo" && escolhaPC === "Agulha") ||
        (escolha === "Fogo" && escolhaPC === "Esponja") ||

        // Possibilidades da Água Vencer
        (escolha === "Agua" && escolhaPC === "Pedra") ||
        (escolha === "Agua" && escolhaPC === "Papel") ||
        (escolha === "Agua" && escolhaPC === "Tesoura") ||
        (escolha === "Agua" && escolhaPC === "Fogo") ||
        (escolha === "Agua" && escolhaPC === "Agulha") ||

        // Possibilidades do Martelo Vencer
        (escolha === "Martelo" && escolhaPC === "Pedra") ||
        (escolha === "Martelo" && escolhaPC === "Tesoura") ||
        (escolha === "Martelo" && escolhaPC === "Fogo") ||
        (escolha === "Martelo" && escolhaPC === "Agua") ||
        (escolha === "Martelo" && escolhaPC === "Cobra") ||
        (escolha === "Martelo" && escolhaPC === "Agulha") ||
        (escolha === "Martelo" && escolhaPC === "Esponja") ||
        // Possibilidades da Cobra Vencer
        (escolha === "Cobra" && escolhaPC === "Papel") ||
        (escolha === "Cobra" && escolhaPC === "Agua") ||
        (escolha === "Cobra" && escolhaPC === "Esponja") ||
        // Possibilidades da Agulha Vencer
        (escolha === "Agulha" && escolhaPC === "Esponja") ||
        (escolha === "Agulha" && escolhaPC === "Cobra") ||
        // Possibilidades da Esponja Vencer
        (escolha === "Esponja" && escolhaPC === "Agua")
    ) {
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
