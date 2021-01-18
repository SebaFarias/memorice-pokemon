import React from 'react'
import { GlobalStateProvider } from './components/GlobalContext'
import Board from './components/Board'
import Header from './components/Header'
import './styles.css'

const App = () => {
  return (
    <GlobalStateProvider>
      <Header/>
      <Board/>
    </GlobalStateProvider>
  )
}

export default App