import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <main>
      <header className='flex items-center justify-around px-10 py-4 bg-amber-100' >
        <h1 className='text-xl font-black text-amber-800 ' >TestBite</h1>
        <nav>
          <ul className='flex  flex-col gap-4 text-xl font-black ' >
            <li><NavLink to='/Supports' >Supports</NavLink></li>
            <li><NavLink to='/About' >About us!</NavLink></li>
            <li><NavLink to='/Beacame-A-Partner' >Became a partner</NavLink></li>
            <li><NavLink to='/Catagory' >Catagory</NavLink></li>
            <li><NavLink to='/Terms-of-service' >Terms of Service</NavLink></li>
          </ul>
        </nav>
      </header>
    </main>
  )
}

export default Footer