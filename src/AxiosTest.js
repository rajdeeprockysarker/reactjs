import axios from "axios";
import React from "react";

const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = React.useState("light");

  const update = () => {
    setTheme("Dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, update }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const ThemeConsumer = () => {
  const theme = React.useContext(ThemeContext);

  const updateValue = () => {
    theme.update();
    axios.get("https://httpbin.org/anything").then((res) => console.log(res));
  };

  return (
    <div>
      <p>The current theme is: {theme.theme}</p>
      <button onClick={updateValue}>Change Val</button>
    </div>
  );
};

const AxiosTest = () => {
  return (
    <ThemeProvider>
      <ThemeConsumer></ThemeConsumer>
      <div>
        <p>The current theme is</p>
      </div>
    </ThemeProvider>
  );
};

export default AxiosTest;
