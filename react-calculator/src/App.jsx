import './App.css';
import { useState } from 'react';


function App() {
  const [result, setResult] = useState("");
  
  return (
    <div className="app">
      <div className="display">
        <input type="text" value={result} readOnly />
        <h1>Digital Calculator</h1>
      </div>
    </div>
  )
}

export default App