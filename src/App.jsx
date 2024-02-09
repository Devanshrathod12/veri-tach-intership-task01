import { useState } from 'react'
import './App.css'
import Management from './TeamMembers/Management'
import Development from './TeamMembers/Development'
import Marketing from './TeamMembers/Marketing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Management/>
    <Development/>
    <Marketing/>
    </>
  )
}

export default App
