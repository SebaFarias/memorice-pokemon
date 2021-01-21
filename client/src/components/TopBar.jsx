import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'
import TimerShower from './TimerShower'

const TopBar = () => {

  const [ global, controller ] = useContext( GlobalContext )

  const handleStart = () => {
    const timer = global.timer
    if(timer.running){
      timer.stop()
    }else{
      timer.start()
    }
  }
  const handleRestart = () => {
    global.timer.reset()
  }
const checkTime = () => {
  console.log(global.timer.toString())
}
  return(
    <nav className='top bar'>
      <div className="controls">
        <button onClick={handleStart}>{global.timer.running?'Pause':'Start'}</button>
        <button onClick={handleRestart}>Reset</button>
        <button onClick={checkTime}>Time?</button>
      </div>
      <TimerShower/>
    </nav>
  )
}

export default TopBar