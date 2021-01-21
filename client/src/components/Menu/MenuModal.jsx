import React, { useContext, useEffect, useState, useRef } from 'react'
import { GlobalContext } from '../GlobalContext'


const MenuModal = () => {

  const [ global, controller ] = useContext( GlobalContext )
  const [ menu , setMenu ] = useState( global.menu )
  const [ scroll , setScroll ] = useState(document.documentElement.scrollTop)
  const ref = useRef()

  useEffect(()=>{
    const handleScroll = () => {
      setScroll(document.documentElement.scrollTop)
    }
    const handleClick = event => {
      if( global.showMenu && global.started && ref.current && !ref.current.contains(event.target)){
        controller.toggleMenu()
      }
    }
    document.addEventListener( 'click', handleClick)
    window.addEventListener( 'scroll', handleScroll )
    handleScroll()
    return () => {
      window.removeEventListener( 'scroll', handleScroll )
      document.removeEventListener( 'click', handleClick)
    }
  },[global.showMenu])

  return(
    <div className={`modal-outside ${global.showMenu?'':'hidden'}`} style={{top: scroll,}}>
      <div className="menu" ref={ref}>
        Menu Loco!!
      </div>
    </div>
  )
}

export default MenuModal