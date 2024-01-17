import { useState } from "react";
import "./index.css";

//TODO Add command navigation with arrow keys

function App() {
  const [theme, setTheme] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const user = `user${
    Math.floor(Math.random() * (1000000 - 10000 + 1)) + 10000
  }@desktop:~$`;

  return (
    <>
      <div style={{ display: "inline-flex", alignItems: "center" }}>
        <p>{user}&nbsp;</p>
        <input
          onChange={handleInput}
          maxLength="50"
          onKeyDown={handleKeyDown}
          type="text"
        />
      </div>
    </>
  );

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  function handleKeyDown(event) {
    switch (event.key) {
      case "ArrowUp":
        console.log("up");
        break;
      case "ArrowDown":
        console.log("down");
        break;
      case "Enter":
        console.log("enter");
        break;
    }
  }
}

export default App;
