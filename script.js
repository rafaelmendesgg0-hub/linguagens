// O que faz: Adiciona um evento de clique no botão para alterar o texto.

const button = document.getElementById('changeMessageBtn');
const messageElement = document.getElementById('front-end-message');

let clickCount = 0;

button.addEventListener('click', () => {
    clickCount++;
    
    // Altera o conteúdo da mensagem
   messageElement.textContent = `Você clicou ${clickCount} vez(es)! O Front-end está funcionando!`;
    // Muda a cor da mensagem para destacar a ação (opcional)
    if (clickCount % 2 === 0) {
        messageElement.style.color = '#000000'; // Preto
    } else {
        messageElement.style.color = '#333333'; // Cinza Escuro
    }
    
    // Exibe um alerta simples (apenas para demonstração extra)
    // alert('A interatividade Front-end foi acionada!');
});