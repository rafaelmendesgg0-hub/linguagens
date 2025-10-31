<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carreira com Desenvolvimento</title>
    <link rel="stylesheet" href="style.css/style.css">
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
