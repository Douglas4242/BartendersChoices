import React from 'react'
import './App.css'
import { Navbar } from './assets/componentes/index'
import { Gallery, Hero, Specialists } from './assets/containers'

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Specialists />
      <Gallery />
    </>
  )
}

export default App
