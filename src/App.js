import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import Home from './components/Home';
import Atrativos from './components/Atrativos';
import Trilhas from './components/Trilhas';
import ComoChegar from './components/ComoChegar';
import Contato from './components/Contato';


function App() {
  return (
    <Router>
      <div className="container">
        <Cabecalho />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/atrativos" component={Atrativos}/>
            <Route path="/trilhas" component={Trilhas}/>
            <Route path="/como-chegar" component={ComoChegar}/>
            <Route path="/contato" component={Contato}/>
          </Switch>
          <Rodape />
        </div>
      
    </Router>

  );
}

export default App;
