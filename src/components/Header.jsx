import React , {useContext} from 'react'
import { GlobalContext } from './GlobalContext'
const Header = () => {
  const [ global, controller] = useContext(GlobalContext)

  return (
    <div className="header">
      <h1 style={{textAlign: 'center',width:'100%'}}> Check this pokes out!</h1>
      <button onClick={controller.initializeGame}>
        Random
      </button>
    </div>
  )
}

export default Header