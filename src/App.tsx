import { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./styles";

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <DarkModeSwitch
        style={{ position: "fixed", top: "40px", right: "40px" }}
        checked={isDarkTheme}
        onChange={() => themeToggler()}
        size={45}
        onClick={() => themeToggler()}
      />
    </ThemeProvider>
  );
}

export default App;
