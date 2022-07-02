import { useEffect } from "react"
import Api, { Method } from "./api"

function App() {

  useEffect(() => {
    const data = async () => {
      return await Api().getAlbum()
    }
    console.log(data())
  },[])
  return (
    <div>
 
    </div>

  )
}

export default App
