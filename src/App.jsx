import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./index.css";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Help from "./components/Help.jsx";
import Intro from "./components/Intro.jsx";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [theme, setTheme] = useState(themeColors.Grape);
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
      outputRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [commandsList]);

  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex(
        (prevIndex) => (prevIndex + 1) % theme.colorArray.length
      );
    }, 4000); // Change color every 3 seconds

    return () => clearInterval(interval);
  }, [theme.colorArray.length]);

  const gradient = {
    color: theme.colorArray[currentColorIndex],
    transition: "color 1s ease-in-out", // Add CSS transition for text color
  };

  return (
    <div style={gradient}>
      {commandsList.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
      <div ref={outputRef}>
        <div style={{ display: "inline-flex", alignItems: "center" }}>
          <p style={gradient}>{user}&nbsp;</p>
          <input
            maxLength="50"
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            ref={inputRef}
            spellCheck="false"
            style={{ color: theme.commandColor, important: "true" }}
            type="text"
            value={inputValue}
          />
        </div>
      </div>
    </div>
  );

  function checkCommand(userInput) {
    const input = userInput.trim();
    switch (input) {
      case "about":
        setCommandsList((previousCommandsList) => [
          ...previousCommandsList,
          <p key={previousCommandsList.length}>
            {user}{" "}
            <span style={{ color: theme.commandColor, important: "true" }}>
              {inputValue}
            </span>
          </p>,
          <About />,
        ]);
        break;
      case "ascii":
        setCommandsList((previousCommandsList) => [
          ...previousCommandsList,
          <p key={previousCommandsList.length}>
            {user}{" "}
            <span style={{ color: theme.commandColor, important: "true" }}>
              {inputValue}
            </span>
          </p>,
          <Intro />,
        ]);
        break;
      case "contact": //TO DO
        setCommandsList((previousCommandsList) => [
          ...previousCommandsList,
          <p key={previousCommandsList.length}>
            {user}{" "}
            <span style={{ color: theme.commandColor, important: "true" }}>
              {inputValue}
            </span>
          </p>,
          <Contact />,
        ]);
        break;
      case "projects": //TO DO
        break;
      case "resume": //TO DO
        break;
      case "theme":
        let themeDialog;
        switch (theme.name) {
          case "Blues":
            setTheme(themeColors.Classic);
            themeDialog = "Theme switched from 'Blues' to Classic";
            break;
          case "Classic":
            setTheme(themeColors.Grape);
            themeDialog = "Theme switched from 'Classic' to 'Grape'";
            break;
          case "Grape":
            setTheme(themeColors.Grass);
            themeDialog = "Theme switched from 'Grape' to 'Grass'";
            break;
          case "Grass":
            setTheme(themeColors.Reds);
            themeDialog = "Theme switched from 'Grass' to 'Reds'";
            break;
          case "Reds":
            setTheme(themeColors.Sunset);
            themeDialog = "Theme switched from 'Reds' to 'Sunset'";
            break;
          case "Sunset":
            setTheme(themeColors.Blues);
            themeDialog = "Theme switched from 'Sunset' to 'Blues'";
            break;
        }
        setCommandsList((previousCommandsList) => [
          ...previousCommandsList,
          <p key={previousCommandsList.length}>
            {user}{" "}
            <span style={{ color: theme.commandColor }}>{inputValue}</span>
          </p>,
          <br />,
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{themeDialog}</p>,
          <br />,
        ]);
        break;
      case "theme --Blues":
        let themeToBlues;
        if (theme.name !== "Blues") {
          themeToBlues = `Theme switched from '${theme.name}' to 'Blues'`;
          setTheme(themeColors.Blues);
        } else {
          themeToBlues = "Theme was already 'Blues'!";
        }
        setCommandsList((previousCommandsList) => [
          ...previousCommandsList,
          <p key={previousCommandsList.length}>
            {user}{" "}
            <span style={{ color: theme.commandColor }}>{inputValue}</span>
          </p>,
          <br />,
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{themeToBlues}</p>,
          <br />,
        ]);
        break;
      case "theme --Classic":
        let themeToClassic;
        if (theme.name !== "Classic") {
          themeToClassic = `Theme switched from '${theme.name}' to 'Classic'`;
          setTheme(themeColors.Classic);
        } else {
          themeToClassic = "Theme was already 'Classic'!";
        }
        setCommandsList((previousCommandsList) => [
          ...previousCommandsList,
          <p key={previousCommandsList.length}>
            {user}{" "}
            <span style={{ color: theme.commandColor }}>{inputValue}</span>
          </p>,
          <br />,
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{themeToClassic}</p>,
          <br />,
        ]);
        break;
      case "theme --Grape":
        let themeToGrape;
        if (theme.name !== "Grape") {
          themeToGrape = `Theme switched from '${theme.name}' to 'Grape'`;
          setTheme(themeColors.Grape);
        } else {
          themeToGrape = "Theme was already 'Grape'!";
        }
        setCommandsList((previousCommandsList) => [
          ...previousCommandsList,
          <p key={previousCommandsList.length}>
            {user}{" "}
            <span style={{ color: theme.commandColor }}>{inputValue}</span>
          </p>,
          <br />,
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{themeToGrape}</p>,
          <br />,
        ]);
        break;
      case "theme --Grass":
        let themeToGrass;
        if (theme.name !== "Grass") {
          themeToGrass = `Theme switched from '${theme.name}' to 'Grass'`;
          setTheme(themeColors.Grass);
        } else {
          themeToGrass = "Theme was already 'Grass'!";
        }
        setCommandsList((previousCommandsList) => [
          ...previousCommandsList,
          <p key={previousCommandsList.length}>
            {user}{" "}
            <span style={{ color: theme.commandColor }}>{inputValue}</span>
          </p>,
          <br />,
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{themeToGrass}</p>,
          <br />,
        ]);
        break;
      case "theme --Reds":
        let themeToReds;
        if (theme.name !== "Reds") {
          themeToReds = `Theme switched from '${theme.name}' to 'Reds'`;
          setTheme(themeColors.Reds);
        } else {
          themeToReds = "Theme was already 'Reds'!";
        }
        setCommandsList((previousCommandsList) => [
          ...previousCommandsList,
          <p key={previousCommandsList.length}>
            {user}{" "}
            <span style={{ color: theme.commandColor }}>{inputValue}</span>
          </p>,
          <br />,
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{themeToReds}</p>,
          <br />,
        ]);
        break;
      case "theme --Sunset":
        let themeToSunset;
        if (theme.name !== "Sunset") {
          themeToSunset = `Theme switched from '${theme.name}' to 'Sunset'`;
          setTheme(themeColors.Sunset);
        } else {
          themeToSunset = "Theme was already 'Sunset'!";
        }
        setCommandsList((previousCommandsList) => [
          ...previousCommandsList,
          <p key={previousCommandsList.length}>
            {user}{" "}
            <span style={{ color: theme.commandColor }}>{inputValue}</span>
          </p>,
          <br />,
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{themeToSunset}</p>,
          <br />,
        ]);
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
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;'{inputValue}' is not a valid command. For a
            list of valid commands type 'help'.
          </p>,
          <br />,
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
        checkCommand(inputValue);
        if (inputValue.trim() !== "") {
          setPreviousCommands([...previousCommands, inputValue]);
          setCurrentIndex(previousCommands.length + 1);
        }
        setInputValue("");
        break;
    }
  }
}

const themeColors = {
  Blues: {
    name: "Blues",
    commandColor: "#2f6562",
    colorArray: ["#6d9bdb", "#457ecf", "#254e89", "#113760"],
  },
  Classic: {
    name: "Classic",
    commandColor: "#faa134",
    colorArray: ["#ffffff"],
  },
  Grape: {
    name: "Grape",
    commandColor: "#dc8fef",
    colorArray: ["#cf9db0", "#bd7b95", "#ab5b79", "#8a4862"],
  },
  Grass: {
    name: "Grass",
    commandColor: "#b8fa72",
    colorArray: ["#9ff742", "#87f312", "#6cc70b", "#529609"],
  },
  Reds: {
    name: "Reds",
    commandColor: "",
    colorArray: ["", "", "", ""],
  },
  Sunset: {
    name: "Sunset",
    commandColor: "#f3f719",
    colorArray: ["#f8ddad", "#f3c87f", "#e7b551", "#e8a024"],
  },
};

export default App;
