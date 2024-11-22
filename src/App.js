import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <FAQ />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
