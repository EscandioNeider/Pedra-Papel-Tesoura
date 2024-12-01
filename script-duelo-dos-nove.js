function jogar(escolha) {
    const opcoes = ["Pedra", "Papel", "Tesoura", "Fogo", "Agua", "Martelo", "Cobra", "Agulha", "Esponja"];
    const escolhaPC = opcoes[Math.floor(Math.random() * 9)];
    let resultado;

    if (escolha === escolhaPC) {
        resultado = "Empate!";
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
    const opcoes = ["Pedra", "Papel", "Tesoura", "Fogo", "Agua", "Martelo", "Cobra", "Agulha", "Esponja"];
    const escolhaPC = opcoes[Math.floor(Math.random() * 9)];
    let resultado;

    if (escolha === escolhaPC) {
        resultado = "Empate!";
    } else if (
        // (As condições de vitória permanecem iguais ao seu código original)
        (escolha === "Pedra" && ["Tesoura", "Cobra", "Agulha", "Esponja"].includes(escolhaPC)) ||
        (escolha === "Papel" && ["Pedra", "Martelo", "Esponja"].includes(escolhaPC)) ||
        (escolha === "Tesoura" && ["Papel", "Cobra", "Esponja", "Agulha"].includes(escolhaPC)) ||
        (escolha === "Fogo" && ["Pedra", "Papel", "Tesoura", "Cobra", "Agulha", "Esponja"].includes(escolhaPC)) ||
        (escolha === "Agua" && ["Pedra", "Papel", "Tesoura", "Fogo", "Agulha"].includes(escolhaPC)) ||
        (escolha === "Martelo" && ["Pedra", "Tesoura", "Fogo", "Agua", "Cobra", "Agulha", "Esponja"].includes(escolhaPC)) ||
        (escolha === "Cobra" && ["Papel", "Agua", "Esponja"].includes(escolhaPC)) ||
        (escolha === "Agulha" && ["Esponja", "Cobra"].includes(escolhaPC)) ||
        (escolha === "Esponja" && ["Agua"].includes(escolhaPC))
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