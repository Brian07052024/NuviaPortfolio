import { useState } from 'react'
import Header from "./components/common/Header"
import Hero from './pages/Hero'
import Main from './pages/Main'

function App() {

  return (
    <div>

      <Header />

      <Hero />

      <Main />

      <footer className="bg-gradient-to-b from-slate-900 to-emerald-900 flex justify-center py-16">
        <div className="max-w-7xl flex flex-col mx-4 w-full gap-8 items-center">
          
          {/* Logo y descripción */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-slate-400 via-teal-400 to-teal-700 bg-clip-text text-transparent">Nuvia.JS</span>
            </h3>
            <p className="text-white/80 text-sm max-w-md">
              Transformamos ideas en experiencias web extraordinarias. Tu socio tecnológico de confianza.
            </p>
          </div>

          {/* Información de contacto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl text-center">
            <div className="flex flex-col items-center gap-2">
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <p className="text-white font-semibold">Desarrollador</p>
              <p className="text-white/80 text-sm">Brian Ramirez</p>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-white font-semibold">Email</p>
              <a href="mailto:nuviajssolutions@hotmail.com" className="text-white/80 text-sm hover:text-teal-400 transition">
                nuviajssolutions@hotmail.com
              </a>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p className="text-white font-semibold">WhatsApp</p>
              <a href="https://wa.me/+528131038748" className="text-white/80 text-sm hover:text-teal-400 transition">
                (+52) 81 31 03 87 48
              </a>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61575666244036&locale=es_LA" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/nuviajs.web/" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-6 w-full text-center">
            <p className="text-white/60 text-sm">
              © 2025 Nuvia.JS Solutions. Todos los derechos reservados.
            </p>
            <p className="text-white/60 text-xs mt-1">
              Desarrollado con ❤️ por Brian Ramirez
            </p>
          </div>
          
        </div>
      </footer>

    </div>
  )
}

export default App
