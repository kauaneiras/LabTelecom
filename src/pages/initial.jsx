import React from 'react';
import { Link } from 'react-router-dom';

export default function InitialPage() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <Link to="/discentes">Discente</Link>
      <br></br>
      <Link to="/docentes">Docente</Link>
      <br></br>
      <Link to="/parceiros">Parceiros</Link>
    </div>
  );
};