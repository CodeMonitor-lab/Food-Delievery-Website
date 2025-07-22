import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppRoute from './Routes/AppRoute'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppRoute/>
    </>
  )
}

export default App
