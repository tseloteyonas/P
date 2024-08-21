import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home1';
import About from './components/About/about';
import Skills from './components/Skills/Skills';
import Certification from './components/Certification/Certification';
import Footer from './components/Footer/footer';
import Scrollup from './components/Scrollup/Scrollup';
import Work from './components/Work/Work';

function App() {
  return (
    <div>
      <Header />

      <main className='main'>
      <Home/>
      <About/>
      <Skills />
      <Work />
     <Certification/>
     
      </main>
      
      <Footer />
      <Scrollup />
    </div>
  );
}

export default App;
