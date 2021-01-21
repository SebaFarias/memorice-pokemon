import React, { useState, useContext } from 'react'
import imgController from '../../data/controllers/img'
import {GlobalContext} from './GlobalContext'
import pokeballImg from '../../public/icon.svg'

const FLIP_TIME = 500

const Card = ({ pokemon, reverse, position, vertical }) => {
  const [ global, controller ] = useContext(GlobalContext)
  const [ reversed, setReversed ] = useState( reverse )
  const [ cardStyle, setCardStyle ] = useState({
    cursor: `${reversed === 'solved'? 'not-allowed':'pointer'}`,
    transform: `translate(${needCorrection(global,position)?50:0}%,0%)`,
    transition: `transform ${FLIP_TIME}ms`
  })
  const flip = () => {
    controller.toggleBlocked()
  setCardStyle( prevState => {
    return({
        ...prevState,
        transform: `translate(${needCorrection(global,position)?50:0}%,0%) rotate3d(0,1,0,90deg)`,
      })
    })
    setTimeout(()=>{
      setReversed( prevState => {
        return(controller.getNewState(prevState))
      })
      setTimeout(()=>{
        controller.toggleBlocked()
        setCardStyle( prevState => {
          return({
            ...prevState,
            transform: `translate(${needCorrection(global,position)?50:0}%,0%)`,
          })
        })
      },FLIP_TIME)
    },FLIP_TIME)
  }
  const handleClick = () => {
    flip()
    controller.flipCard(position)
  }
  
  return (
    <section 
      className='card' 
      style={cardStyle}
      onClick={handleClick}
      id={`card${position[0]}-${position[1]}`}  
    >
      <img 
        className='pokemon-img'
        src={ reversed === 'hidden'? pokeballImg : imgController.getImg(pokemon) }
        style={{
          width:  `${ vertical ? '100%': 'auto' }`,
          height: `${ vertical ? 'auto': '100%' }`,
        }}
      />
    </section>
  )
}

export default Card

const needCorrection = ({rows,columns},position) => {
  return (rows*columns)%2 != 0 && rows == position[0]
}