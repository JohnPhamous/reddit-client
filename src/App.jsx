import React from 'react';
import './App.css';
import Home from './features/Home/Home';
import Header from './features/Header/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
