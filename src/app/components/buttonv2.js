import { useContext } from "react";
import { ThemeContext } from "../State/ThemeProvider";

export default function Button() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
    </button>
  );
}
