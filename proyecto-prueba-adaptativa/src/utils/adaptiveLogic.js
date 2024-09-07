export const determinarSiguienteDificultad = (respuestasCorrectas, totalPreguntas) => {
  const porcentajeAciertos = (respuestasCorrectas / totalPreguntas) * 100;
  
  if (porcentajeAciertos > 80) {
    return "difícil";
  } else if (porcentajeAciertos > 50) {
    return "medio";
  } else {
    return "fácil";
  }
};