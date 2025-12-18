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

      <div className="flex flex-col gap-3 md:gap-4 fixed z-50 right-0 md:right-4 bottom-4 animate-fade-left">
        <a
          href="https://wa.me/8131038748"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white flex items-center justify-center p-2.5 md:p-3 rounded-l-full md:rounded-full shadow-lg w-fit"
          aria-label="WhatsApp"
        >
          <img src="/svg/wpp.svg" alt="WhatsApp" className="w-4 h-4 md:w-5 md:h-5" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61575666244036"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white md:flex items-center justify-center p-2.5 md:p-3 rounded-l-full md:rounded-full shadow-lg w-fit"
          aria-label="Facebook"
        >
          <img src="/svg/facebook.svg" alt="Facebook" className="w-4 h-4 md:w-5 md:h-5" />
        </a>
        <a
          href="https://www.instagram.com/nuviajs.web/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-linear-to-tr from-pink-500 to-yellow-400 hover:from-pink-600 hover:to-yellow-500 text-white md:flex items-center justify-center p-2.5 md:p-3 rounded-l-full md:rounded-full shadow-lg w-fit"
          aria-label="Instagram"
        >
          <img src="/svg/instagram.svg" alt="Instagram" className="w-4 h-4 md:w-5 md:h-5" />
        </a>

      </div>

    </div>
  )
}

export default App
