// DarkModeButton.js
import React from "react";
import { useTheme } from "./ThemeProvider";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.darkMode ? "#333" : "#fff")};
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
  padding: 10px;
  cursor: pointer;
`;

const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Button onClick={toggleDarkMode} darkMode={darkMode}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </Button>
  );
};

export default DarkModeButton;
