import React from 'react';
import logo from './logo.svg';
import './App.css';
import Datetime from './components/Datetime/Datetime';
import Input from './components/Input/Input';
import LengthDisplay from './components/LengthDisplay/LengthDisplay';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Input />
          <LengthDisplay /> character(s)
        </header>
      </div>
    </RecoilRoot>

  );
}

export default App;
