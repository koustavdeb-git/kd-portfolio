import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Experience from './components/Experience/Experience'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="min-h-screen bg-[#050816] text-slate-100 antialiased">

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
