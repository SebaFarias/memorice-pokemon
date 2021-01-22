import React from 'react'
import SizeSelector from '../SizeSelector'

const StartMenu = () => {
  return(
    <div className="start menu">
        <h3>Bienvenido</h3>
        <h4>Escoge la cantidad de pares para jugar</h4>
        <SizeSelector/>
    </div>
  )
}

export default StartMenu