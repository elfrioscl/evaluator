import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from './pages/Inicio';
import PaginaPrueba from './pages/PaginaPrueba';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/prueba" component={PaginaPrueba} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;