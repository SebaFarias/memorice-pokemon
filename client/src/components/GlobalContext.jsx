import React, {useState , createContext} from 'react'

export const GlobalContext = createContext()

const MAX_ROWS = 10
const MAX_COLUMNS = 10

export const GlobalStateProvider = (props) => {
  const [ global, setGlobal] = useState({
    data: [],
    pairs: [],
    rows: 3,
    columns: 7,
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
    setRows: newValue => {
      setGlobal( prevState => {
        return({
          ...prevState,
          rows: newValue,
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
        })
      })
    },
    setColumns: newValue => {
      setGlobal( prevState => {
        return({
          ...prevState,
          columns: newValue,
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
        })
      })
    },
    initializeGame: () => {
      generatePairs()
      setGlobal( prevState => {
        const pokemons = prevState.pairs
        const data = []
          for( let i = 0; i < prevState.rows; i++ ){
            data[i] = []
          }
        let positions = getPositions(prevState.rows,prevState.columns)
        pokemons.map( pokemon => {
          const [ [row1,col1], newPositions1] =getRandomPosition(positions)
          data[row1][col1] = pokemon
          positions = newPositions1
          const [ [row2,col2], newPositions2] = getRandomPosition(positions)
          data[row2][col2] = pokemon
          positions = newPositions2
        })
        return({
          ...prevState,
          data: data
        })
      })
    }
  }
  const getRandomPosition = posiblePositions => {
    const randomIndex = Math.floor(Math.random() * posiblePositions.length)
    return [posiblePositions[randomIndex],posiblePositions.filter( ( pos, index) => index != randomIndex)]
  }
  const getPositions = ( rows, columns ) => {
    const positions = []
    const quantity = rows * columns - (rows * columns % 2 == 0 ? 0 : 1)
    let rowIndex = 0
    let columnIndex = 0
    for(let i = 0; i < quantity; i++){
      positions[i]= [ rowIndex, columnIndex ]
      columnIndex++
      if(columnIndex >= columns){
        rowIndex++
        columnIndex = 0
      }    
    }
    return positions
  }
  const generatePairs = () => {
    setGlobal( prevState => {
      const newPokemonsArray = []
      const pokemonsDictionary = {}
      const quantity = Math.floor( prevState.columns * prevState.rows / 2 )

      for(let i = 0; i < quantity; i++){
        const newId = randomId(pokemonsDictionary)
        newPokemonsArray[i] = newId
        pokemonsDictionary[newId] = true
      }

      return {
        ...prevState,
        pairs: newPokemonsArray,
      }
    })
  }
  const randomId = dictionary => {
    const newId = Math.floor((Math.random() * 649) + 1);
    if(dictionary[newId]) return randomId(dictionary)
    return newId
  }
  return (
    <GlobalContext.Provider value={ [ global, controller ] }>
      {props.children}
    </GlobalContext.Provider>
  )
}
