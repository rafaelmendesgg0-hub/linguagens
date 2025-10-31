<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carreira com Desenvolvimento</title>
    <link rel="stylesheet" href="style.css/style.css">

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #F5F5F5; /* Cinza Claro (Fundo principal) */
    color: #333333; /* Cinza Escuro (Texto principal) */
    line-height: 1.6;
}

header {
    background-color: #000000; /* Preto */
    color: #FFFFFF; /* Branco */
    padding: 20px;
    text-align: center;
}

header h1 {
    margin: 0;
    font-size: 2.5em;
}

.container {
    max-width: 1200px;
    margin: 20px auto;
    padding: 0 20px;
}

.section {
    background-color: #FFFFFF; /* Branco */
    padding: 30px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

.section h2 {
    color: #000000; /* Preto */
    border-bottom: 3px solid #333333; /* Linha de separação em Cinza Escuro */
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.linguagens-lista {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.linguagens-lista li {
    background-color: #E0E0E0; /* Cinza claro intermediário */
    color: #000000; /* Preto */
    padding: 8px 15px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 0.9em;
}

.dica-item {
    background-color: #333333; /* Cinza Escuro */
    color: #FFFFFF; /* Branco */
    padding: 15px;
    margin-top: 15px;
    border-left: 5px solid #000000; /* Destaque em Preto */
    border-radius: 4px;
}

/* Estilo para o Banco de Dados */
.db-info .linguagens-lista li {
    background-color: #000000; /* Preto para destacar DB */
    color: #FFFFFF;
}

footer {
    background-color: #000000; /* Preto */
    color: #888888; /* Cinza */
    text-align: center;
    padding: 20px;
    margin-top: 30px;
    font-size: 0.8em;
}

/* Estilos para o exemplo de JS no Front-end */
.js-example {
    margin-top: 20px;
    padding: 15px;
    border: 1px solid #333333;
    border-radius: 5px;
    background-color: #F0F0F0;
}

.js-example button {
    background-color: #000000;
    color: #FFFFFF;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s;
}

.js-example button:hover {
    background-color: #333333;
}

/* Estilos para o exemplo de JS no Back-end */
.js-backend-info pre {
    background-color: #000000;
    color: #F5F5F5;
    padding: 15px;
    border-radius: 5px;
    overflow-x: auto;
}
</style>
<script>
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
</script>
  
</head>
<body>

    <header>
        <h1>CARREIRA COM DESENVOLVIMENTO</h1>
        <p>Entenda as principais áreas e linguagens do mercado.</p>
    </header>

    <div class="container">

        <div class="section front-end-section">
            <h2>🎨 Front-end e JS Interativo</h2>
            <p>É a parte com a qual o usuário <strong>interage</strong>. Cuida da interface, design e experiência (UX).</p>
            <h3>Principais Linguagens:</h3>
            <ul class="linguagens-lista">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript (Interatividade)</li>
                <li>React</li>
                <li>Angular</li>
            </ul>
            
            <div class="js-example">
                <h3>Demonstração de JS no Front-end</h3>
                <p id="front-end-message">Clique no botão para mudar esta mensagem!</p>
                <button id="changeMessageBtn">Clique Aqui</button>
            </div>
        </div>

        <div class="section">
            <h2>⚙ Back-end e JavaScript no Servidor</h2>
            <p>É o "motor" por trás da aplicação. Responsável pela <strong>lógica do negócio</strong>, segurança e gestão do servidor.</p>
            <h3>Principais Linguagens:</h3>
            <ul class="linguagens-lista">
                <li>Python</li>
                <li>Java</li>
                <li>Node.js / JavaScript (Servidor)</li>
                <li>C#</li>
                <li>PHP</li>
            </ul>
            
            <div class="js-backend-info">
                <h3>Node.js: JavaScript no Back-end</h3>
                <p>O <strong>Node.js</strong> permite usar JavaScript (JS) para rodar a lógica do servidor (Back-end). Por exemplo, se este site tivesse um servidor Node.js, ele faria:</p>
                <pre><code>// Exemplo simplificado de código Node.js
const express = require('express');
const app = express();

app.get('/api/saudacao', (req, res) => {
    // Aqui o JS está rodando no servidor (Back-end)
    res.json({ mensagem: 'Olá do Servidor Node!' }); 
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
</code></pre>
                <p>Este código simples cria uma API que envia uma saudação quando acessada.</p>
            </div>
        </div>

        <div class="section">
            <h2>🛠 Full-stack</h2>
            <p>Profissional que trabalha tanto no <strong>Back-end</strong> quanto no <strong>Front-end</strong>, dominando o ciclo completo da aplicação.</p>
            <h3>Principais Stacks:</h3>
            <ul class="linguagens-lista">
                <li>MERN/MEAN (JS em tudo)</li>
                <li>Python com Django</li>
                <li>PHP com Laravel</li>
            </ul>
        </div>

        <div class="section db-info">
            <h2>🗄 Banco de Dados</h2>
            <p>Onde os dados da aplicação são <strong>armazenados, organizados e recuperados</strong>.</p>
            <h3>Linguagens e Tecnologias:</h3>
            <ul class="linguagens-lista">
                <li>SQL (Linguagem padrão)</li>
                <li>MySQL</li>
                <li>MongoDB (NoSQL)</li>
                <li>PostgreSQL</li>
            </ul>
        </div>
        
        <div class="section">
            <h2>🎯 Dicas para Escolher</h2>
            <div class="dica-item">
                <p><strong>1. Gosto por Design?</strong> Vá para o Front-end.</p>
            </div>
            <div class="dica-item">
                <p><strong>2. Paixão por Lógica?</strong> O Back-end é sua área.</p>
            </div>
            <div class="dica-item">
                <p><strong>3. Experimente!</strong> Faça projetos que envolvam as três áreas para descobrir o que mais te agrada.</p>
            </div>
        </div>

    </div>

    <footer>
        <p>&copy; 2025 carreira com desenvolvimento. Conteúdo informativo.</p>
    </footer>

    <script src="script.js/script.js"></script>
</body>
</html>
