import React from 'react';
import './Botao.css';

const Botao = ({ texto, onClick, className }) => {
  return (
    <button className={`botao ${className}`} onClick={() => onClick(texto)}>
      {texto}
    </button>
  );
};

export default Botao;