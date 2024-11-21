import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { DarkModeProvider } from "./hooks/DarkModeContext";

const App = () => {
  return (
    <DarkModeProvider>
      <Router>
        <HomePage />
      </Router>
    </DarkModeProvider>
  );
};

export default App;
