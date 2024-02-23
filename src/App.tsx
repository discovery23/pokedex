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
      <Button label="Incrementar" onClick={()=>aumentar()}></Button>
      <Button label="Incrementar 2" color='green' onClick={()=>aumentar()}></Button>
      <Button label="Incrementar 2" color='red' onClick={()=>aumentar()}></Button>
      <Card></Card>
    </div>
  );
}

export default App;