// src/routes/professorRoutes.js

const express = require('express');
const router = express.Router();

// Importa as funções do nosso controlador de professores
const professorController = require('../controllers/professorController');

// Define as rotas e associa cada uma a uma função do controlador

// Rota para GET /professores
router.get('/', professorController.listarProfessores);

// Rota para POST /professores
router.post('/', professorController.criarProfessor);

// Rota para PUT /professores/:id
router.put('/:id', professorController.atualizarProfessor);

// Rota para DELETE /professores/:id
router.delete('/:id', professorController.excluirProfessor);

// Exporta o router para que o server.js possa usá-lo
module.exports = router;