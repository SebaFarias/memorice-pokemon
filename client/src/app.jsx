import React from 'react'
import { GlobalStateProvider } from './components/GlobalContext'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Board from './components/Board'
import Footer from './components/Footer'
import './styles.css'

const App = () => {
  return (
    <GlobalStateProvider>
      <TopBar/>
      <Header/>
      <Board/>
      <Footer/>
    </GlobalStateProvider>
  )
}

export default App