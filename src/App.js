import React from 'react';
import './App.css';
import Cabecalho from './Cabecalho';
import Home from './Home';
import Rodape from './Rodape';

function App() {
  return (
    <div className="container">
         <Cabecalho />
         <Home />
         <Rodape />
    </div>

  );
}

export default App;
