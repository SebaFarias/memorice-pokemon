import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'
import ErrorsShower from './ErrorsShower'
import TimerShower from './TimerShower'

const Header = () => {

  const [ global, controller ] = useContext( GlobalContext )

  const handleMenuBtn = () => {
    controller.showMenu(0)
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

export default Header