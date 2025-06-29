import React, { useState } from 'react';
import './App.css';
import Visor from './components/Visor';
import Botao from './components/Botao';

function App() {
  const [visor, setVisor] = useState('0');
  const [calculo, setCalculo] = useState('');
  const [operador, setOperador] = useState(null);
  const [valorAnterior, setValorAnterior] = useState(null);
  const [limparVisor, setLimparVisor] = useState(false);

  // Função auxiliar para converter o valor do visor (com vírgula) para um número
  const parseVisor = () => parseFloat(visor.replace(',', '.'));

  const handleBotaoClick = (texto) => {
    // Lógica para números e vírgula
    if (!isNaN(texto) || texto === ',') {
      if (texto === ',' && visor.includes(',')) return;

      const valorAtual = limparVisor || visor === '0' ? texto : visor + texto;
      setVisor(valorAtual);
      setLimparVisor(false);
      return;
    }

    // Lógica para operações
    const valorNumerico = parseVisor();

    switch (texto) {
      case 'C':
        setVisor('0');
        setCalculo('');
        setOperador(null);
        setValorAnterior(null);
        break;
      case 'CE':
        setVisor('0');
        break;
      case '←':
        setVisor(visor.length > 1 ? visor.slice(0, -1) : '0');
        break;
      case '+/-':
        setVisor((valorNumerico * -1).toString().replace('.', ','));
        break;
      case 'x²':
        setVisor((valorNumerico * valorNumerico).toString().replace('.', ','));
        break;
      case '√x':
        setVisor(Math.sqrt(valorNumerico).toString().replace('.', ','));
        break;
      case '¹/ₓ':
        setVisor((1 / valorNumerico).toString().replace('.', ','));
        break;
      case '%':
        if(valorAnterior !== null){
          const percentual = (valorAnterior * valorNumerico) / 100;
          setVisor(percentual.toString().replace('.', ','));
        }
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        if (operador !== null && !limparVisor) {
          handleBotaoClick('=');
          setValorAnterior(parseVisor());
        } else {
          setValorAnterior(valorNumerico);
        }
        setOperador(texto);
        setLimparVisor(true);
        break;
      case '=':
        if (operador === null || valorAnterior === null) return;

        let resultado;
        const valorAtual = valorNumerico;

        switch (operador) {
          case '+':
            resultado = valorAnterior + valorAtual;
            break;
          case '-':
            resultado = valorAnterior - valorAtual;
            break;
          case '*':
            resultado = valorAnterior * valorAtual;
            break;
          case '/':
            resultado = valorAnterior / valorAtual;
            break;
          default:
            return;
        }

        setVisor(resultado.toString().replace('.', ','));
        setValorAnterior(resultado);
        setOperador(null);
        setLimparVisor(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="calculadora-container">
      <div className="calculadora">
        <Visor valor={visor} />
        <div className="botoes">
          {/* O JSX (a estrutura dos botões) permanece o mesmo da última vez */}
          <Botao texto="%" onClick={handleBotaoClick} className="operacao-secundaria" />
          <Botao texto="CE" onClick={handleBotaoClick} className="operacao-secundaria" />
          <Botao texto="C" onClick={handleBotaoClick} className="operacao-secundaria" />
          <Botao texto="←" onClick={handleBotaoClick} className="operacao-secundaria" />

          <Botao texto="¹/ₓ" onClick={handleBotaoClick} className="operacao-secundaria" />
          <Botao texto="x²" onClick={handleBotaoClick} className="operacao-secundaria" />
          <Botao texto="√x" onClick={handleBotaoClick} className="operacao-secundaria" />
          <Botao texto="/" onClick={handleBotaoClick} className="operacao-principal" />

          <Botao texto="7" onClick={handleBotaoClick} className="numero" />
          <Botao texto="8" onClick={handleBotaoClick} className="numero" />
          <Botao texto="9" onClick={handleBotaoClick} className="numero" />
          <Botao texto="*" onClick={handleBotaoClick} className="operacao-principal" />

          <Botao texto="4" onClick={handleBotaoClick} className="numero" />
          <Botao texto="5" onClick={handleBotaoClick} className="numero" />
          <Botao texto="6" onClick={handleBotaoClick} className="numero" />
          <Botao texto="-" onClick={handleBotaoClick} className="operacao-principal" />

          <Botao texto="1" onClick={handleBotaoClick} className="numero" />
          <Botao texto="2" onClick={handleBotaoClick} className="numero" />
          <Botao texto="3" onClick={handleBotaoClick} className="numero" />
          <Botao texto="+" onClick={handleBotaoClick} className="operacao-principal" />

          <Botao texto="+/-" onClick={handleBotaoClick} className="operacao-secundaria" />
          <Botao texto="0" onClick={handleBotaoClick} className="numero" />
          <Botao texto="," onClick={handleBotaoClick} className="operacao-secundaria" />
          <Botao texto="=" onClick={handleBotaoClick} className="igual" />
        </div>
      </div>
    </div>
  );
}

export default App;