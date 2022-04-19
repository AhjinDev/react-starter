import React from 'react';
import logo from './logo.svg';
import './App.css';
import Datetime from './components/Datetime/Datetime';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Datetime />
      </header>
    </div>
  );
}

export default App;
