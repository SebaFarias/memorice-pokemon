import React, { useState, useEffect } from 'react'
import imgController from '../../data/controllers/img'

const Card = ({id}) => {
  const [ windowState, setWindowState] = useState({
    vertical: window.innerHeight > window.innerWidth,
    cardStyle: {
      width: 50,
      height: 50,
      minWidth: '10vw',
      minHeight: '10vh',
    },
  })

  useEffect( () => {
    const handleResize = () => {
      setWindowState({
        vertical: window.innerHeight > window.innerWidth,
        cardStyle: {
          width: 50,
          height: 50,
          minWidth: '10vw',
          minHeight: '10vh',
        },
      })
    }
    document.addEventListener('resize', handleResize)
    handleResize()
    return(
      document.removeEventListener('resize', handleResize)
    )
  },[windowState])
  
  return (
    <section className='card' style={windowState.cardStyle}>
      {/*<h3>{imgController.getName(id)}</h3>*/}
      <img 
        className='pokemon-img'
        src={imgController.getImg(id)}
        style={{
          width:  `${ windowState.vertical ? '100%': 'auto' }`,
          height: `${ windowState.vertical ? 'auto': '100%' }`,
        }}
      />
    </section>
  )
}

export default Card

const rotate = {
  transform: 'rotate3d(0,1,0,90deg)',
}