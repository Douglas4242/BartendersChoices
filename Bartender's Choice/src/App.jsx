import React from 'react'
import './App.css'
import Navbar from './assets/componentes/Navbar'
import Introduction from './assets/componentes/Introduction'
import Specialties from './assets/componentes/Specialties'
import SignUp from './assets/componentes/SignUp'
import Gallery from './assets/componentes/Gallery'


function App() {


  return (
    <>
      <Navbar />
      <Introduction />
      <Specialties />
      <SignUp />
      <Gallery />
    </>
  )
}

export default App
