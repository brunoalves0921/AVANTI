// src/controllers/alunoController.js

// Importa o Prisma Client para interagir com o banco de dados
const { PrismaClient } = require('@prisma/client');
// Cria uma instância do Prisma Client
const prisma = new PrismaClient();

// 1. Listar todos os alunos (GET)
const listarAlunos = async (req, res) => {
  try {
    // Usa o Prisma para encontrar todos os registros no modelo 'aluno'
    const alunos = await prisma.aluno.findMany();
    // Retorna a lista de alunos com status 200 (OK)
    res.status(200).json(alunos);
  } catch (error) {
    // Em caso de erro, retorna uma mensagem de erro com status 500
    res.status(500).json({ error: 'Não foi possível listar os alunos.' });
  }
};

// 2. Cadastrar um novo aluno (POST)
const criarAluno = async (req, res) => {
  try {
    // Pega os dados (nome, email, idade) do corpo da requisição (req.body)
    const { nome, email, idade } = req.body;
    // Usa o Prisma para criar um novo registro no modelo 'aluno'
    const novoAluno = await prisma.aluno.create({
      data: {
        nome,
        email,
        idade: parseInt(idade), // Converte 'idade' para inteiro, pois dados de formulário vêm como texto
      },
    });
    // Retorna o aluno recém-criado com status 201 (Created)
    res.status(201).json(novoAluno);
  } catch (error) {
    // Em caso de erro (ex: email duplicado), retorna uma mensagem de erro
    res.status(500).json({ error: 'Não foi possível cadastrar o aluno.' });
  }
};

// 3. Atualizar nome e e-mail de um aluno (PUT)
const atualizarAluno = async (req, res) => {
  try {
    // Pega o ID do aluno dos parâmetros da rota (ex: /alunos/1)
    const { id } = req.params;
    // Pega os novos dados (nome, email) do corpo da requisição
    const { nome, email } = req.body;

    // Usa o Prisma para atualizar o registro onde o 'id' corresponde
    const aluno = await prisma.aluno.update({
      where: { id: parseInt(id) }, // Encontra o aluno pelo ID
      data: { nome, email },       // Define os novos dados
    });
    // Retorna o aluno com os dados atualizados e status 200 (OK)
    res.status(200).json(aluno);
  } catch (error) {
    // Tratamento de erro específico do Prisma para "registro não encontrado"
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Aluno não encontrado.' });
    }
    // Para outros erros, retorna uma mensagem genérica
    res.status(500).json({ error: 'Não foi possível atualizar o aluno.' });
  }
};

// 4. Excluir um aluno (DELETE)
const excluirAluno = async (req, res) => {
  try {
    // Pega o ID dos parâmetros da rota
    const { id } = req.params;
    // Usa o Prisma para deletar o registro onde o 'id' corresponde
    await prisma.aluno.delete({
      where: { id: parseInt(id) },
    });
    // Retorna uma resposta vazia com status 204 (No Content), indicando sucesso
    res.status(204).send();
  } catch (error) {
    // Tratamento de erro para "registro não encontrado"
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Aluno não encontrado.' });
    }
    // Para outros erros, retorna uma mensagem genérica
    res.status(500).json({ error: 'Não foi possível excluir o aluno.' });
  }
};

// Exporta todas as funções para que possam ser usadas no arquivo de rotas
module.exports = {
  listarAlunos,
  criarAluno,
  atualizarAluno,
  excluirAluno,
};