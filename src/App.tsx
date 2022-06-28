import { useCallback, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [num ,setNum] = useState(0)
  const onClick = useCallback(() => {
    setNum((value) => value + 1)
  },[])
  return (
    <div>
      <h2 onClick={onClick}>{num}</h2>
    </div>

  )
}

export default App
