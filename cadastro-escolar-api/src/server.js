// src/server.js

// 1. Importações
const express = require('express');
const alunoRoutes = require('./routes/alunoRoutes');
const professorRoutes = require('./routes/professorRoutes');

// 2. Inicialização do Express
const app = express();
const PORT = 3000; // Define a porta em que o servidor vai rodar

// 3. Middlewares
// Essencial para o POST e PUT: ensina o Express a ler o corpo da requisição em formatos específicos.
app.use(express.urlencoded({ extended: true })); // Para ler dados de formulário (x-www-form-urlencoded)
app.use(express.json()); // Para ler dados no formato JSON

// 4. Definição das Rotas
// Diz ao Express que todas as rotas que começarem com /alunos devem ser gerenciadas pelo arquivo alunoRoutes
app.use('/alunos', alunoRoutes);
// O mesmo para /professores
app.use('/professores', professorRoutes);

// 5. Iniciando o Servidor
// "Escuta" por requisições na porta definida e, quando estiver pronto, exibe uma mensagem no console.
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta http://localhost:${PORT}`);
});