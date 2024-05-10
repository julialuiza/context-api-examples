"use client";
import React from "react";
import Lista from "./components/listav2";
import Button from "./components/buttonv2";
import ThemeProvider from "./State/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <h1>Home</h1>

      <Button />
      <Lista />
    </ThemeProvider>
  );
};

export default App;
