// src/controllers/professorController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 1. Listar todos os professores
const listarProfessores = async (req, res) => {
  try {
    const professores = await prisma.professor.findMany();
    res.status(200).json(professores);
  } catch (error) {
    res.status(500).json({ error: 'Não foi possível listar os professores.' });
  }
};

// 2. Cadastrar um novo professor
const criarProfessor = async (req, res) => {
  try {
    const { nome, email, idade } = req.body;
    const novoProfessor = await prisma.professor.create({
      data: {
        nome,
        email,
        idade: parseInt(idade),
      },
    });
    res.status(201).json(novoProfessor);
  } catch (error) {
    res.status(500).json({ error: 'Não foi possível cadastrar o professor.' });
  }
};

// 3. Atualizar nome e e-mail de um professor
const atualizarProfessor = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email } = req.body;

    const professor = await prisma.professor.update({
      where: { id: parseInt(id) },
      data: { nome, email },
    });
    res.status(200).json(professor);
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Professor não encontrado.' });
    }
    res.status(500).json({ error: 'Não foi possível atualizar o professor.' });
  }
};

// 4. Excluir um professor
const excluirProfessor = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.professor.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Professor não encontrado.' });
    }
    res.status(500).json({ error: 'Não foi possível excluir o professor.' });
  }
};

module.exports = {
  listarProfessores,
  criarProfessor,
  atualizarProfessor,
  excluirProfessor,
};