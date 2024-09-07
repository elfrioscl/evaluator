import React from 'react';

const Pregunta = ({ pregunta, onResponder }) => {
  return (
    <div>
      <h3>{pregunta.texto}</h3>
      {pregunta.opciones.map((opcion, index) => (
        <button key={index} onClick={() => onResponder(opcion)}>
          {opcion}
        </button>
      ))}
    </div>
  );
};

export default Pregunta;