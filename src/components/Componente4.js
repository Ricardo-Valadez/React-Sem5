import React, { Component } from 'react'
import './Componente0.css'



class Componente4 extends Component {

  ClickMensaje = () => {
    console.log("Ya le diste click")
  }
  
  render() {
    return (
      <div className='Componente4'>
        <button onClick={this.ClickMensaje} type="button" class="btn btn-primary">No dar click</button>
      </div>
    )
  }
}

export default Componente4
