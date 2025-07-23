import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <main>
      <header className='flex items-center justify-around px-10 py-4 bg-amber-100' >
        <h1 className='text-xl font-black text-amber-800 ' >TestBite</h1>
        <nav>
          <ul className='flex gap-4 text-xl font-black' >
            <li><NavLink to='/' >Home</NavLink></li>
            <li><NavLink to='/Dishes' >Dishes</NavLink></li>
            <li><NavLink to='/Offers' >Offers</NavLink></li>
            <li><NavLink to='/Orders' >Orders</NavLink></li>
            <li><NavLink to='/Carts' >Cart</NavLink></li>
            <li><NavLink to='/Register' >Register</NavLink></li>
          </ul>
        </nav>
      </header>
    </main>
  )
}

export default Header