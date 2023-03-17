import React, { Component } from 'react'
import './Componente0.css'

const arreglo = ["JavaScript", "React JS"];

class Componente2 extends Component {
  render() {
    return (
      <div className='Componente2'>
        <p>Los siguientes lenguajes estan en un arreglo y son desplegados en una lista:</p>
        <ul>{arreglo.map((p,i)=><li key={i}>{p}</li>)}</ul>      
      </div>
    )
  }
}

export default Componente2