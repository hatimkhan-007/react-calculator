import './App.css';
import { useState } from 'react';


function App() {
  const [display, setDisplay] = useState("0");
  
  return (
    <div className="app">
      <div className="display">
        <h1>{display}</h1>
        <button onClick={() => setDisplay("7")}>7</button>
      </div>
    </div>
  )
}

export default App