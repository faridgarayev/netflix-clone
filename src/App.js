import React from 'react';
import './App.css';
import Banner from './Banner';
import Movies from './Movies';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Movies />
    </div>
  );
}

export default App;