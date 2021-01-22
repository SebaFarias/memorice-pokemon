import React, {useState , createContext} from 'react'
import Timer from '../model/Timer'
import PokeMatrix from'../model/PokeMatrix'

export const GlobalContext = createContext()

const MAX_ROWS = 9
const MAX_COLUMNS = 9

export const GlobalStateProvider = (props) => {
  const [ global, setGlobal] = useState({
    data: new PokeMatrix( 5 , 6 ).getPokeMatrix(),
    rows: 5,
    columns: 6,
    blocked: false,
    started: false,
    menu:1,
    showMenu:true,
    timer: new Timer(),
    errors: 0,
  })
  const controller = {
    showMenu: () => {
      setGlobal( prevState => {
        prevState.timer.stop()
        return ({
          ...prevState,
          showMenu: true,
        })
      })
    },
    hideMenu: () => {
      setGlobal( prevState => {
        prevState.timer.start()
        return ({
          ...prevState,
          showMenu: false,
        })
      })
    },
    setMenu: menu => {
      setGlobal( prevState => {
        return ({
          ...prevState,
          menu: menu,
        })
      })
    },
    addError: () => {
      setGlobal( prevState => {
        return ({
          ...prevState,
          errors: prevState.errors + 1,
        })
      })
    },
    restartErrors: () => {
      setGlobal( prevState => {
        return ({
          ...prevState,
          errors: 0,
        })
      })
    },
    toggleBlocked: () => {
      setGlobal( prevState => {
        document.getElementById('board').style.pointerEvents = prevState? 'auto' : 'none'
        return({
          ...prevState,
          blocked: !prevState.blocked,
        })
      })
    },
    setRows: newValue => {
      setGlobal( prevState => {
        return({
          ...prevState,
          rows: newValue,
          started: false,
          data: new PokeMatrix( newValue, prevState.columns ).getPokeMatrix(),
        })
      })
    },
    setColumns: newValue => {
      setGlobal( prevState => {
        console.log('what=)')
        return({
          ...prevState,
          columns: newValue,
          started: false,
          data: new PokeMatrix( prevState.rows, newValue ).getPokeMatrix(),
        })
      })
    },
    getNewBoard: () => {
      setGlobal( prevState => {
        return({
          ...prevState,
          data: new PokeMatrix( prevState.rows, prevState.columns ).getPokeMatrix(),
        })
      })
    },
    startGame: () => {
      setGlobal( prevState => {
        prevState.timer.startNewGame()
        return({
          ...prevState,
          data: new PokeMatrix( prevState.rows , prevState.columns ).getPokeMatrix(),
          errors: 0,
          menu: 0,
          showMenu: false,
          started: true,

        })
      })
    },
    flipCard: indexes => {
      console.log(indexes)
    },
    getNewState: prevCardState => {
      if( prevCardState === 'hidden' ) return 'shown'
      if( prevCardState === 'shown' ) return 'hidden'
      return prevCardState
    },
  }
  
  return (
    <GlobalContext.Provider value={ [ global, controller ] }>
      {props.children}
    </GlobalContext.Provider>
  )
}
