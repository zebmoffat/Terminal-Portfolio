import { useEffect, useState } from "react";

import "./index.css";

import Intro from "./components/Intro.jsx";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [theme, setTheme] = useState(0);
  const [user] = useState(
    `user${
      Math.floor(Math.random() * (1000000 - 10000 + 1)) + 10000
    }@desktop:~$`
  );

  const [commandsList, setCommandsList] = useState([<Intro />]); //Shows on screen
  const [previousCommands, setPreviousCommands] = useState([]); //Previous text entered
  const [currentIndex, setCurrentIndex] = useState(previousCommands.length); //Index of previous commands Array to find command when up or down arrow pressed

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
          value={inputValue}
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
        console.log(currentIndex);

        if (currentIndex !== 0) {setCurrentIndex(currentIndex - 1);}
        setInputValue(previousCommands[currentIndex]);

        event.preventDefault();
        inputRef.current.selectionStart = inputRef.current.value.length;
        inputRef.current.focus;



        break;
      case "ArrowDown":
        console.log(currentIndex);
        if (currentIndex === previousCommands.length) {
          setInputValue("");
        } else if (currentIndex === 0 && inputValue === previousCommands[0]) {
          setCurrentIndex(currentIndex + 1);
          setInputValue(previousCommands[currentIndex]);
        } else {
          setCurrentIndex(currentIndex + 1);
          setInputValue(previousCommands[currentIndex]);
        }
        break;
      case "Enter":
        if (inputValue.trim() !== "") {
          setCommandsList((previousCommandsList) => [
            ...previousCommandsList,
            <p>
              {user}{" " + inputValue}
            </p>,
          ]);
          setPreviousCommands((previous) => [...previousCommands, inputValue]);
          setCurrentIndex(previousCommands.length);
          setInputValue("");
        }
        break;
    }
  }
}

export default App;
