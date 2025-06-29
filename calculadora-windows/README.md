
# 🧮 Calculadora Estilo Windows em React

Este projeto é uma réplica funcional da calculadora do Windows, desenvolvida utilizando a biblioteca **React**. A aplicação busca recriar a experiência de usuário e as operações matemáticas da calculadora padrão do sistema operacional.

## 🚀 Visão Geral do Projeto

A calculadora foi criada como um componente React, utilizando o hook `useState` para gerenciar a entrada do usuário, os cálculos e o valor exibido no visor.

---

## ✨ Funcionalidades Implementadas

- **Operações Aritméticas Básicas:**
  - Adição (+)
  - Subtração (−)
  - Multiplicação (×)
  - Divisão (÷)

- **Operações Secundárias:**
  - Porcentagem (%)
  - Raiz quadrada (√x)
  - Elevar ao quadrado (x²)
  - Inversão de valor (¹/ₓ)
  - Inversão de sinal (+/−)

- **Controle de Exibição:**
  - `C`: Limpa todo o cálculo (zera a calculadora)
  - `CE`: Limpa apenas a entrada atual no visor
  - `←`: (Backspace) Remove o último dígito inserido

- **Suporte a Números Decimais:**
  - Permite a utilização de vírgula (`,`) para operações com casas decimais.

---

## 🛠️ Estrutura de Componentes

O projeto é modularizado nos seguintes componentes principais:

- **`App.js`:**
  Componente principal que contém toda a lógica da calculadora e gerencia o estado da aplicação.

- **`Visor.js`:**
  Responsável por exibir os números e resultados das operações.

- **`Botao.js`:**
  Componente reutilizável para todos os botões da calculadora.

---

## 🎨 Estilização

A estilização foi feita com CSS puro, buscando uma aparência similar à calculadora do Windows.

- **`App.css`:**
  Define o layout principal da calculadora.

- **`Visor.css`:**
  Estiliza a tela de exibição dos valores.

- **`Botao.css`:**
  Estiliza os botões, com diferentes classes para números, operações principais, operações secundárias e o botão de igual.

---

## 📜 Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

- Executa a aplicação em modo de desenvolvimento.
- Abra [http://localhost:3000](http://localhost:3000) para visualizá-la no seu navegador.
- A página irá recarregar automaticamente quando você fizer alterações.

### `npm test`

- Inicia o executor de testes no modo interativo.

### `npm run build`

- Compila a aplicação para produção na pasta `build`.
- Otimiza a compilação para melhor desempenho.

### `npm run eject`

> ⚠️ **Atenção:** Esta é uma operação irreversível.
> Uma vez que você executa o `eject`, não pode mais voltar.
> Isso permite personalizar as configurações de build.

---

## 🔗 Dependências do Projeto

As principais dependências utilizadas, conforme o arquivo `package.json`, são:

- [`react`](https://reactjs.org/)
- [`react-dom`](https://reactjs.org/docs/react-dom.html)
- [`react-scripts`](https://www.npmjs.com/package/react-scripts)
- [`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro/) (para testes)

> Para uma lista completa, consulte o arquivo **`package.json`**.

---

## 🚀 Demonstração

> _(Adicione aqui prints da aplicação ou um link para uma demo hospedada, como no Netlify, Vercel ou GitHub Pages, se desejar)_

---

## 🧑‍💻 Autor

- **Seu Nome** - [Seu GitHub](https://github.com/seu-usuario)
