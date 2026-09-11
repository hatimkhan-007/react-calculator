import './App.css';
import { useState } from 'react';


function App() {
  const [display, setDisplay] = useState("0");

  const handleNumber = (number) => {
    setDisplay((previous) => 
      previous === "0" ? number :previous + number
    );
  };

  const inputhandler = (num1, num2) => {
    // const 
  }
  
  return (
    <div className="app">
      <div className="display">
        <h1>{display}</h1>
        <button onClick={() => handleNumber("7")}>7</button>
        <button onClick={() => handleNumber("8")}>8</button>
        <button onClick={() => handleNumber("9")}>9</button>
      </div>
    </div>
  )
}

export default App