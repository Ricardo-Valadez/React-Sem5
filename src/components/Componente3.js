import React, { Component } from 'react'
import './Componente0.css'

const arreglo = ["Tipos de componentes", "Funciones y eventos", "Uso de varios componentes"];

class Componente3 extends Component {
  render() {
    return (
      <div className='Componente3'>
        <p>En este ejercicio vimos:</p>
        <ol>
        <li>Tipos de componentes</li>
        <li>Funciones y eventos</li>
        <li>Uso de varios componentes</li>
        </ol>     
      </div>
    )
  }
}

export default Componente3