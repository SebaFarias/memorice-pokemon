import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'
import ErrorsShower from './ErrorsShower'
import TimerShower from './TimerShower'

const TopBar = () => {

  const [ global, controller ] = useContext( GlobalContext )

  const handleMenuBtn = () => {
    controller.toggleMenu()
  }
  return(
    <nav className='top bar'>
      <div className="controls">
        <button className='round-btn menu-btn' onClick={handleMenuBtn}></button>
        <button className='round-btn highscores-btn'></button>
      </div>
      <TimerShower/>
      <ErrorsShower/>
    </nav>
  )
}

export default TopBar