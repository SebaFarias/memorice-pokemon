import React from 'react'
import Board from './components/Board'
import './styles.css'

const App = () => {
  return (
    <>
      <h1 style={{textAlign: 'center',width:'100%'}}> Check this pokes out!</h1>
      <Board rows='5' columns='5'/>
    </>
  )
}

export default App