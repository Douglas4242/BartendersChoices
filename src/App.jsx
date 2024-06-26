import React from 'react'
import './App.css'
import { Navbar } from './assets/componentes/index'
import { Hero, Specialists } from './assets/containers'

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Specialists />
    </>
  )
}

export default App
