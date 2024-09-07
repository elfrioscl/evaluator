import React, { useState, useEffect } from 'react';
import { obtenerPreguntas, guardarResultado } from '../services/firestore';
import { determinarSiguienteDificultad } from '../utils/adaptiveLogic';
import Pregunta from '../components/Pregunta';

const PaginaPrueba = () => {
  const [preguntas, setPreguntas] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestasCorrectas, setRespuestasCorrectas] = useState(0);
  const [dificultadActual, setDificultadActual] = useState('medio');

  useEffect(() => {
    cargarPreguntas();
  }, [dificultadActual]);

  const cargarPreguntas = async () => {
    const nuevasPreguntas = await obtenerPreguntas(dificultadActual);
    setPreguntas(nuevasPreguntas);
  };

  const manejarRespuesta = (respuesta) => {
    if (respuesta === preguntas[preguntaActual].respuestaCorrecta) {
      setRespuestasCorrectas(respuestasCorrectas + 1);
    }

    if (preguntaActual + 1 < 30) {
      setPreguntaActual(preguntaActual + 1);
      if ((preguntaActual + 1) % 5 === 0) {
        const nuevaDificultad = determinarSiguienteDificultad(respuestasCorrectas, preguntaActual + 1);
        setDificultadActual(nuevaDificultad);
      }
    } else {
      finalizarPrueba();
    }
  };

  const finalizarPrueba = async () => {
    await guardarResultado({
      respuestasCorrectas,
      totalPreguntas: 30,
      fecha: new Date()
    });
    // Aquí puedes redirigir a una página de resultados o mostrar un mensaje
  };

  if (preguntas.length === 0) return <div>Cargando preguntas...</div>;

  return (
    <div>
      <h2>Pregunta {preguntaActual + 1} de 30</h2>
      <Pregunta 
        pregunta={preguntas[preguntaActual]} 
        onResponder={manejarRespuesta} 
      />
    </div>
  );
};

export default PaginaPrueba;