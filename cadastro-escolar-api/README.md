# API de Cadastro Escolar

API RESTful desenvolvida em Node.js com Express, Prisma e PostgreSQL para gerenciar o cadastro de alunos e professores de uma escola. Este projeto foi criado como parte de uma atividade acadêmica.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução do JavaScript no servidor.
- **Express**: Framework para criação de rotas e gerenciamento de requisições HTTP.
- **PostgreSQL**: Banco de dados relacional para persistência dos dados.
- **Prisma**: ORM (Object-Relational Mapper) para facilitar a comunicação com o banco de dados.

---

## ✨ Funcionalidades

- **Alunos**:
  - `GET /alunos`: Listar todos os alunos.
  - `POST /alunos`: Cadastrar um novo aluno.
  - `PUT /alunos/:id`: Atualizar nome e e-mail de um aluno.
  - `DELETE /alunos/:id`: Excluir um aluno.
- **Professores**:
  - `GET /professores`: Listar todos os professores.
  - `POST /professores`: Cadastrar um novo professor.
  - `PUT /professores/:id`: Atualizar nome e e-mail de um professor.
  - `DELETE /professores/:id`: Excluir um professor.

---

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
- [Node.js](https://nodejs.org/en/) (v16 ou superior)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Git](https://git-scm.com/)

---

## ⚙️ Como Rodar o Projeto

Siga os passos abaixo para executar a aplicação localmente:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd nome-da-pasta-do-projeto
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure o banco de dados:**
    - Certifique-se de que seu serviço do PostgreSQL está rodando.
    - Crie um banco de dados com o nome `escola_db`. Você pode usar o comando: `CREATE DATABASE escola_db;`
    - Renomeie o arquivo `.env.example` para `.env`.
    - Abra o arquivo `.env` e substitua o placeholder `SUA_SENHA_AQUI` pela sua senha do usuário `postgres` (ou o usuário que você utiliza).

5.  **Aplique as migrations do Prisma:**
    Este comando irá criar as tabelas `Aluno` e `Professor` no seu banco de dados.
    ```bash
    npx prisma migrate dev
    ```

6.  **Inicie o servidor:**
    ```bash
    npm run dev
    ```

Pronto! O servidor estará rodando em `http://localhost:3000`.

---

## 🧪 Como Testar a API

Você pode usar o Postman ou qualquer outro cliente de API para testar os endpoints.

### Endpoints de Alunos

| Funcionalidade | Método | Endpoint | Corpo da Requisição (Exemplo) |
| :--- | :--- | :--- | :--- |
| **Cadastrar Aluno** | `POST` | `/alunos` | `Content-Type: x-www-form-urlencoded` <br> `nome=Joao` <br> `email=joao@teste.com` <br> `idade=20` |
| **Listar Alunos** | `GET` | `/alunos` | (Nenhum) |
| **Atualizar Aluno** | `PUT` | `/alunos/:id` | `Content-Type: application/json` <br> `{"nome": "Joao Silva", "email": "joao.silva@teste.com"}` |
| **Excluir Aluno** | `DELETE` | `/alunos/:id` | (Nenhum) |

### Endpoints de Professores

| Funcionalidade | Método | Endpoint | Corpo da Requisição (Exemplo) |
| :--- | :--- | :--- | :--- |
| **Cadastrar Prof.** | `POST` | `/professores` | `Content-Type: x-www-form-urlencoded` <br> `nome=Maria` <br> `email=maria@teste.com` <br> `idade=35` |
| **Listar Profs.** | `GET` | `/professores` | (Nenhum) |
| **Atualizar Prof.** | `PUT` | `/professores/:id`| `Content-Type: application/json` <br> `{"nome": "Maria Souza", "email": "maria.souza@teste.com"}` |
| **Excluir Prof.** | `DELETE` | `/professores/:id`| (Nenhum) |

---

## 👨‍💻 Autores

- Tauane Romi Neves

- Jorge Bruno Costa Alves