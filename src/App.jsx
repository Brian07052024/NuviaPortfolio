import { useState } from 'react'
import Header from "./components/common/Header"
import Hero from './pages/Hero'
import Main from './pages/Main'
import Footer from './components/common/Footer'

function App() {

  return (
    <div className="overflow-x-hidden">

      <Header />

      <Hero />

      <Main />

      <Footer />

    </div>
  )
}

export default App
