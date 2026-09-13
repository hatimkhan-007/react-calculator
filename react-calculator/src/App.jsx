import "./App.css";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");

  const handleNumber = (number) => {
    setDisplay((previous) =>
      previous === "0" ? number : previous + number
    );
  };

  const inputOperator = (operator) => {
    setDisplay((previous) =>
      previous === "0" ? previous : previous + operator
    );
  };

  const clearDisplay = () => {
    setDisplay("0");
  };

  const calculate = () => {
    try {
      const result = Function(`"use strict"; return (${display})`)();

      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="app">
      <div className="calculator">

        <div className="display">
          <h1>{display}</h1>
        </div>

        <div className="buttons">
          <button onClick={clearDisplay} className="clear">
            C
          </button>

          <button onClick={() => inputOperator("/")}>÷</button>
          <button onClick={() => inputOperator("*")}>×</button>
          <button onClick={() => inputOperator("-")}>−</button>

          <button onClick={() => handleNumber("7")}>7</button>
          <button onClick={() => handleNumber("8")}>8</button>
          <button onClick={() => handleNumber("9")}>9</button>
          <button onClick={() => inputOperator("+")}>+</button>

          <button onClick={() => handleNumber("4")}>4</button>
          <button onClick={() => handleNumber("5")}>5</button>
          <button onClick={() => handleNumber("6")}>6</button>
          <button onClick={() => handleNumber(".")}>.</button>

          <button onClick={() => handleNumber("1")}>1</button>
          <button onClick={() => handleNumber("2")}>2</button>
          <button onClick={() => handleNumber("3")}>3</button>
          <button onClick={calculate} className="equals">
            =
          </button>

          <button
            onClick={() => handleNumber("0")}
            className="zero"
          >
            0
          </button>
          
        </div>

      </div>
    </div>
  );
}

export default App;

