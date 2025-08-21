import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AppTemplates from './components/AppTemplates';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AppTemplates />
        <Contact />
      </main>
    </div>
  );
}

export default App;
