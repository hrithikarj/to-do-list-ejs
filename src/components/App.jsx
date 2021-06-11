import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div className="container">
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>+</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li
              onClick={handleClick}
              style={{ textDecoration: isDone ? "line-through" : "none" }}
            >
              {todoItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
