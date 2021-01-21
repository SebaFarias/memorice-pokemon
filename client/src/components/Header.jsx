import React , {useContext} from 'react'
import { GlobalContext } from './GlobalContext'
const Header = () => {
  const [ global, controller] = useContext(GlobalContext)

  return (
    <div className="header">
      <h1 style={{textAlign: 'center',width:'100%'}}> Check this pokes out!</h1>
      <div className="controls">
        <button onClick={controller.substractRow}> - </button>
        {global.rows} ROWS
        <button onClick={controller.addRow}> + </button>
        <button onClick={controller.getNewBoard}>
        Random
        </button>
        <button onClick={controller.substractColumn}> - </button>
        {global.columns} COLUMNS
        <button onClick={controller.addColumn}> + </button>
      </div>
    </div>
  )
}

export default Header