import React, { useState, useContext } from 'react'
import {GlobalContext} from './GlobalContext'
import pokemonController from '../../data/controllers/pokemon'
import Card from './Card'

const Board = () => {
  
  const [ global, controller ] = useContext(GlobalContext)
  const [ pokemons, setPokemons ] = useState(pokemonController.getNewArray(global.rows,global.columns))
  const boardStyle = {
    gridTemplate: `repeat(${global.rows},1fr) / repeat(${global.columns},1fr)`
  }
  return ( 
    <main className='board' style = {boardStyle}>
      {global.data.map( ( row, i ) => {
        return row.map( ( pokemon, j ) => {
          return <Card id={pokemon} key={`card-${i}-${j}`}/>
        })
      })}
    </main>
  )
}

export default Board