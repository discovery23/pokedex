import React from 'react';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import './index.css';

function App() {
  const [contador, setContador] = React.useState(1);

  function aumentar(){
    console.log("Entra a la función aumentar");
    setContador(contador + 1);
  }

  return (
    <div className="App">
      <p>Hello World {contador}</p>

      <Card></Card>
      <Button></Button>
    </div>
  );
}

export default App;
