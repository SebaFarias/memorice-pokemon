import React, {useState} from 'react'
import pokemonController from '../../data/controllers/pokemon'
import Card from './Card'

const Board = ( { rows, columns } ) => {
  
  const [ pokemons, setPokemons ] = useState(pokemonController.getNewArray(rows,columns))
  const boardStyle = {
    gridTemplate: `repeat(${rows},1fr) / repeat(${columns},1fr)`
  }
  return ( 
    <main className='board' style = {boardStyle}>
      {pokemons.map( ( row, i ) => {
        return row.map( ( pokemon, j ) => {
          return <Card id={pokemon} key={`card-${i}-${j}`}/>
        })
      })}
    </main>
  )
}

export default Board