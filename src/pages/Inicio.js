import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div className="inicio">
      <h1>Bienvenido a la Prueba Adaptativa</h1>
      <p>Esta prueba evaluará tus conocimientos en diferentes áreas.</p>
      <Link to="/prueba">
        <button>Comenzar Prueba</button>
      </Link>
    </div>
  );
};

export default Inicio;