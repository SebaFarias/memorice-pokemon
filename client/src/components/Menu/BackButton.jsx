import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'

const BackButton = ({title}) => {

  const size = 'var(--bar-radius)'
  const controller = useContext(GlobalContext)[1]

  const handleMenuBtn = () => {
    controller.showMenu(0)
  }

  return(
    <div className="title-container" style={{position:'relative'}}>
      <h3>{title}</h3>
      <button 
      onClick={handleMenuBtn}
      className="btn-yel" 
      style={{
        width: '2rem',
        height: '2rem',
        position: 'absolute',
        top: 0,
        left: 0,
        padding:0,
        textAlign: 'center',
        lineHeight: size,
        }}
      >
        &#60;
      </button>
    </div>
  )
}

export default BackButton