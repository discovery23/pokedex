import React from 'react';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import IntroPokedex from './components/IntroPokedex';
import Profile from './components/Profile';
import './index.css';

function App() {
  return (
    <div className="App">
      <p>Hello World</p>

      <Card></Card>
      <Button></Button>
      <IntroPokedex></IntroPokedex>
      <Profile></Profile>
    </div>
  );
}

export default App;
