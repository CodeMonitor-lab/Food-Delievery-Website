import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppRoute from './Routes/AppRoute'
import './App.css'
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Analytics />
    <AppRoute/>
    </>
  )
}

export default App
