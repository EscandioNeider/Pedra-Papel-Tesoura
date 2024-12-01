function jogar(escolha) {
    const opcoes = ["Pedra", "Papel", "Tesoura"];
    const escolhaPC = opcoes[Math.floor(Math.random() * 3)];
    let resultado;

    if (escolha === escolhaPC) {
        resultado = "Empate!";
    } else if (
        // Possibilidades da Pedra Vencer
        (escolha === "Pedra" && escolhaPC === "Tesoura") ||
     
        // Possibilidades do Papel Vencer
        (escolha === "Papel" && escolhaPC === "Pedra") ||
        // Possibilidades da Tesoura Vencer
        (escolha === "Tesoura" && escolhaPC === "Papel") 
      
    ) {
        resultado = "Você venceu!";
    } else {
        resultado = "Você perdeu!";
    }

    document.getElementById("resultado").innerHTML = `
        <p>Você escolheu: ${escolha}</p>
        <p>O computador escolheu: ${escolhaPC}</p>
        <h2>${resultado}</h2>
    `;
}
let pontuacaoJogador = 0;
let pontuacaoComputador = 0;

function jogar(escolha) {
    const opcoes = ["Pedra", "Papel", "Tesoura"];
    const escolhaPC = opcoes[Math.floor(Math.random() * 3)];
    let resultado;

    if (escolha === escolhaPC) {
        resultado = "Empate!";
    } else if (
        (escolha === "Pedra" && escolhaPC === "Tesoura") ||
        (escolha === "Papel" && escolhaPC === "Pedra") ||
        (escolha === "Tesoura" && escolhaPC === "Papel")
    ) {
        resultado = "Você venceu!";
        pontuacaoJogador++;
    } else {
        resultado = "Você perdeu!";
        pontuacaoComputador++;
    }

    document.getElementById("resultado").innerHTML = `
        <p>Você escolheu: ${escolha}</p>
        <p>O computador escolheu: ${escolhaPC}</p>
        <h2>${resultado}</h2>
    `;

    // Atualizar o placar
    document.getElementById("pontuacaoJogador").innerText = pontuacaoJogador;
    document.getElementById("pontuacaoComputador").innerText = pontuacaoComputador;
}