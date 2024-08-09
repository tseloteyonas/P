import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home1';
import About from './components/About/about';

function App() {
  return (
    <div>
      <Header />

      <main className='main'>
      <Home/>
      <About/>
      </main>
    </div>
  );
}

export default App;
