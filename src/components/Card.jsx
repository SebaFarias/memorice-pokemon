import React from 'react'
import imgController from '../../data/controllers/img'

const Card = ({id}) => {
  const vertical = window.innerHeight > window.innerWidth
  const cardStyle = {
    width: 100,
    height: 250,
  }
  
  return (
    <section className='card' style={cardStyle}>
      <h3>{imgController.getName(id)}</h3>
      <img className='pokemon-img'src={imgController.getImg(id)}/>
    </section>
  )
}

const getStyle = id => {
  return {
    width: '100%',
    backgroundImage: `url(${imgController.getImg(id)})`,
    backgroundSize: 'cover',
    height: 0,
    padding: 0,
    paddingBottom: `calc(200% * ${3} / ${4})`,
  } 
}

export default Card