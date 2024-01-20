import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./index.css";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Help from "./components/Help.jsx";
import Intro from "./components/Intro.jsx";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [theme, setTheme] = useState(0);
  const [user] = useState(
    `user${
      Math.floor(Math.random() * (1000000 - 10000 + 1)) + 10000
    }@desktop:~$`
  );

  const [commandsList, setCommandsList] = useState([
    <Intro />,
    <p>For a list of commands, type 'help'.</p>,
    <br />,
  ]); //Shows on screen
  const [previousCommands, setPreviousCommands] = useState([]); //Previous text entered
  const [currentIndex, setCurrentIndex] = useState(previousCommands.length); //Index of previous commands Array to find command when up or down arrow pressed

  const inputRef = useRef(null);
  const outputRef = useRef(null);

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputValue]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [commandsList]);

  return (
    <>
      {commandsList.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
      <div ref={outputRef}>
        <div style={{ display: "inline-flex", alignItems: "center" }}>
          <p>{user}&nbsp;</p>
          <input
            ref={inputRef}
            maxLength="50"
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            spellCheck="false"
            type="text"
            value={inputValue}
          />
        </div>
      </div>
    </>
  );

  function checkCommand(userInput) {
    const input = userInput.trim();
    switch (input) {
      case "about":
        setCommandsList((previousCommandsList) => [
          ...previousCommandsList,
          <p key={previousCommandsList.length}>
            {user}
            {" " + inputValue}
          </p>,
          <About />,
        ]);
        break;
      case "ascii":
        setCommandsList((previousCommandsList) => [
          ...previousCommandsList,
          <p key={previousCommandsList.length}>
            {user}
            {" " + inputValue}
          </p>,
          <Intro />,
        ]);
        break;
      case "contact": //TO DO
        setCommandsList((previousCommandsList) => [
          ...previousCommandsList,
          <p key={previousCommandsList.length}>
            {user}
            {" " + inputValue}
          </p>,
          <Contact />,
        ]);
        break;
      case "projects": //TO DO
        break;
      case "resume": //TO DO
        break;
      case "theme": //TO DO
        break;
      case "help":
        setCommandsList((previousCommandsList) => [
          ...previousCommandsList,
          <p key={previousCommandsList.length}>
            {user}
            {" " + inputValue}
          </p>,
          <Help />,
        ]);
        break;
      case "history":
        setCommandsList((previousCommandsList) => [
          ...previousCommandsList,
          <>
            <p key={previousCommandsList.length}>
              {user}
              {" " + inputValue}
            </p>
            <br />
            {previousCommands.map((value, index) => (
              <>
                <p key={index}>&nbsp;&nbsp;&nbsp;&nbsp;{value}</p>
                <br />
              </>
            ))}
          </>,
        ]);
        break;
      case "clear":
        setCommandsList([]);
        break;
      case "":
        setCommandsList((previousCommandsList) => [
          ...previousCommandsList,
          <p key={previousCommandsList.length}>
            {user}
            {" " + inputValue}
          </p>,
        ]);
        break;
      default:
        setCommandsList((previousCommandsList) => [
          ...previousCommandsList,
          <p key={previousCommandsList.length}>
            {user}
            {" " + inputValue}
          </p>,
          <br />,
          <p>'{inputValue}' is not a valid command. For a list of valid commands type 'help'.</p>,
          <br />
        ]);
        break;
    }
  }

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  function handleKeyDown(event) {
    switch (event.key) {
      case "ArrowUp":
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
          setInputValue(previousCommands[currentIndex - 1]);
          setTimeout(() => {
            inputRef.current.focus();
            inputRef.current.selectionStart = inputRef.current.value.length;
            inputRef.current.selectionEnd = inputRef.current.value.length;
          }, 0);
        }
        break;
      case "ArrowDown":
        if (currentIndex < previousCommands.length - 1) {
          setCurrentIndex(currentIndex + 1);
          setInputValue(previousCommands[currentIndex + 1]);
        } else {
          setCurrentIndex(previousCommands.length);
          setInputValue("");
        }
        break;
      case "Enter":
        /*setCommandsList((previousCommandsList) => [
          ...previousCommandsList,
          <p key={previousCommandsList.length}>
            {user}
            {" " + inputValue}
          </p>,
        ]);*/
        checkCommand(inputValue);
        if (inputValue.trim() !== "") {
          setPreviousCommands((previous) => [...previousCommands, inputValue]);
          setCurrentIndex(previousCommands.length + 1);
        }
        setInputValue("");

        //outputRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }
}

export default App;
