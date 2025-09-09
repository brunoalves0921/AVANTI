// src/routes/alunoRoutes.js

const express = require('express');
const router = express.Router(); // Usamos o Router do Express para criar rotas modulares

// Importa as funções do nosso controlador de alunos
const alunoController = require('../controllers/alunoController');

// Define as rotas e associa cada uma a uma função do controlador

// Rota para GET /alunos (Lembre-se que o prefixo /alunos já foi definido em server.js)
router.get('/', alunoController.listarAlunos);

// Rota para POST /alunos
router.post('/', alunoController.criarAluno);

// Rota para PUT /alunos/:id (onde :id é um parâmetro dinâmico)
router.put('/:id', alunoController.atualizarAluno);

// Rota para DELETE /alunos/:id
router.delete('/:id', alunoController.excluirAluno);

// Exporta o router para que o server.js possa usá-lo
module.exports = router;