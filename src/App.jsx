import { useEffect, useState } from "react";

import "./index.css";

import Intro from './components/Intro.jsx';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [key, setKey] = useState(1);
  const [theme, setTheme] = useState(0);
  const [user] = useState(
    `user${
      Math.floor(Math.random() * (1000000 - 10000 + 1)) + 10000
    }@desktop:~$`
  );

  const[commandsList] = useState([<Intro />])

  return (
    <>
      {commandsList.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
      <div style={{ display: "inline-flex", alignItems: "center" }}>
        <p>{user}&nbsp;</p>
        <input
          maxLength="50"
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          spellCheck="false"
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
