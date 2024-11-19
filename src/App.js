import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import FAQ from './components/FAQ';
import Media from './components/Media';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <FAQ />
      <Media />
      <Contact />
    </div>
  );
}

export default App;
