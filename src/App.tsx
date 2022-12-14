import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import { paths } from "./config/paths";
import { FormPage, AddContractorPage, NotFoundPage } from "./pages";
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
      <Routes>
        <Route path={paths.form} element={<FormPage />} />
        <Route path={paths.addContractor} element={<AddContractorPage />} />
        <Route path={paths.notFound} element={<NotFoundPage />} />
      </Routes>
      <DarkModeSwitch
        style={{ position: "absolute", top: "20px", right: "20px" }}
        checked={isDarkTheme}
        onChange={() => themeToggler()}
        size={40}
        onClick={() => themeToggler()}
      />
    </ThemeProvider>
  );
}

export default App;
