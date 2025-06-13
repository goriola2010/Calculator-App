import React, { useState } from "react";
import "./style.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    switch (value) {
      case "C":
        clearInput();
        break;
      case "DEL":
        deleteLast();
        break;
      case "=":
        try {
          setInput(eval(input).toString());
        } catch {
          setInput("Error");
        }
        break;
      default:
        setInput((prev) => prev + value);
    }
  };

  const clearInput = () => setInput("");
  const deleteLast = () => setInput((prev) => prev.slice(0, -1));

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
    "DEL",
  ];

  return (
    <div className="calculator">
      <input type="text" className="display" value={input} readOnly />
      <div className="buttons">
        {buttons.map((btn) => (
          <button
            key={btn}
            className={
              btn === "C"
                ? "span-two-col button-clear"
                : btn === "DEL"
                ? "span-two-col button-del"
                : ""
            }
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
