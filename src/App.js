import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Componente1 from './components/Componente1';
import Componente2 from './components/Componente2';
import Componente3 from './components/Componente3';
import Componente4 from './components/Componente4';

class App extends Component {
  render() {
  return (
      <div className='App'>
        <Componente1/>
        <Componente2/>
        <Componente3/>
        <Componente4/>
      </div>
  )};
}

export default App;