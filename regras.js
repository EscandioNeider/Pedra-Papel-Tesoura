const regrasDiv = document.getElementById('botaoRegra');
const regrasLink = document.getElementById('Regras');

regrasLink.addEventListener('click', (event) => {
    event.preventDefault();
    regrasDiv.classList.toggle('hidden');
});
 