import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Experience from './components/Experience/Experience'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'

function App() {

  return (
    <div className="bg-slate-950 text-white">

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />

    </div>
  )
}

export default App
