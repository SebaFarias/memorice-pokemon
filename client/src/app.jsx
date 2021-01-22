import React from 'react'
import { GlobalStateProvider } from './components/GlobalContext'
import MenuModal from './components/Menu/MenuModal'
import TopBar from './components/TopBar'
import Board from './components/Board'
import Footer from './components/Footer'
import './styles.css'

const App = () => {
  return (
    <GlobalStateProvider>
      <MenuModal/>
      <TopBar/>
      <Board/>
      <Footer/>
    </GlobalStateProvider>
  )
}

export default App