import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Contact from './components/Contact';
import Media from './components/Media';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Testimonials />
      <Media />
      <Contact />
    </div>
  );
}

export default App;
