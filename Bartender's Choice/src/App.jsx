import React from 'react'
import './App.css'
import Navbar from './assets/componentes/Navbar'
import Introduction from './assets/componentes/Introduction'
import Specialties from './assets/componentes/Specialties'
import SignUp from './assets/componentes/SignUp'
import Gallery from './assets/componentes/Gallery'
import Reviews from './assets/componentes/Reviews'
import Footer from './assets/componentes/Footer'
import SpeCard from './assets/elements/SpeCard'

function App() {


  return (
    <>
      <Navbar />
      <Introduction />
      <Specialties />
      <SignUp />
      <Gallery />
      <Reviews />
      <Footer />
    </>
  )
}

export default App
