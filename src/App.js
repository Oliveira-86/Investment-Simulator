import { useState } from "react";
import Page from "./Page";
import GlobalStyle from "./styles/global";

import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

function App() {
  const [theme, setTheme] = useState(light);
  const [themeState, setThemeState] = useState(false);

  console.log(theme.title);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
    setThemeState(!themeState);
  };
  return (
    <ThemeProvider theme={theme}>
      <Page toggleTheme={toggleTheme} themeState={themeState} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
