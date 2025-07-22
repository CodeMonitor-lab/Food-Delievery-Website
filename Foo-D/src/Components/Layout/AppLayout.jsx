import React from 'react'
import {Header,Footer} from '../index'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <main>
        <section>
            <Header/>
            <div>
            <Outlet/>
            </div>
            <Footer/>
        </section>
    </main>
  )
}

export default AppLayout