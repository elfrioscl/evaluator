import React from 'react';

const Resultado = ({ respuestasCorrectas, totalPreguntas }) => {
  const porcentaje = (respuestasCorrectas / totalPreguntas) * 100;

  return (
    <div className="resultado">
      <h2>Resultado Final</h2>
      <p>Respuestas correctas: {respuestasCorrectas} de {totalPreguntas}</p>
      <p>Porcentaje de aciertos: {porcentaje.toFixed(2)}%</p>
    </div>
  );
};

export default Resultado;