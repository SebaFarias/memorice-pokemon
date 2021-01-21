import React, {useState , createContext} from 'react'
const PokeMatrix = require('../model/PokeMatrix')

export const GlobalContext = createContext()

const MAX_ROWS = 10
const MAX_COLUMNS = 10

export const GlobalStateProvider = (props) => {
  const [ global, setGlobal] = useState({
    data: new PokeMatrix( 5 , 6 ).getPokeMatrix(),
    rows: 5,
    columns: 6,
    blocked: false,
    started: false,
    finished: false,
    startingTime: null,
    finishingTime:null,
    errors: 0,
  })
  const controller = {
    addError: () => {
      setGlobal( prevState => {
        return ({
          ...prevState,
          errors: prevState.errors + 1
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
          data: new PokeMatrix( newValue, prevState.columns ).getPokeMatrix(),
      })
      })
    },
    addRow: () => {
      setGlobal(prevState => {
        const current = prevState.rows 
        if(current >= MAX_ROWS) return prevState
        return({
          ...prevState,
          rows: current + 1,
          data: new PokeMatrix( current+1, prevState.columns ).getPokeMatrix(),
        })
      })
    },
    substractRow: () => {
      setGlobal(prevState => {
        const current = prevState.rows 
        if(current <= 1) return prevState
        return({
          ...prevState,
          rows: current - 1,
          data: new PokeMatrix( current-1, prevState.columns ).getPokeMatrix(),
        })
      })
    },
    setColumns: newValue => {
      setGlobal( prevState => {
        return({
          ...prevState,
          columns: newValue,
          data: new PokeMatrix( prevState.rows, newValue ).getPokeMatrix(),
      })
      })
    },
    addColumn: () => {
      setGlobal(prevState => {
        const current = prevState.columns
        if(current >= MAX_COLUMNS) return prevState
        return({
          ...prevState,
          columns: current + 1,
          data: new PokeMatrix( prevState.rows, current + 1 ).getPokeMatrix(),
        })
      })
    },
    substractColumn: () => {
      setGlobal(prevState => {
        const current = prevState.columns 
        if(current <= 1) return prevState
        return({
          ...prevState,
          columns: current - 1,
          data: new PokeMatrix( prevState.rows, current - 1 ).getPokeMatrix(),
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
