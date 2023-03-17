import React, { Component } from 'react'
import './Componente0.css'

const sem = "Semana 5"

class Componente1 extends Component {
  render() {
    return (
      <div className='Componente1'>
        <h1>{sem}</h1>
        <h6>Soy un componente tipo función que despliega una constante que dice "Semana 5"</h6>
      </div>
    );
  }
}

export default Componente1
