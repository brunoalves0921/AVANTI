import React from 'react';
import './Visor.css';

const Visor = ({ valor }) => {
  return (
    <div className="visor">
      {valor}
    </div>
  );
};

export default Visor;