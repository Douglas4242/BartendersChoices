import React from 'react'
import './App.css'
import { Navbar } from './assets/componentes/index'
import { Footer, Gallery, Hero, Specialists } from './assets/containers'

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Specialists />
      <Gallery />
      <Footer />
    </>
  )
}

export default App
