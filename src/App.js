import "./App.css";
import { Button, Container } from "reactstrap";
import { ThemeContext, themes } from "./contexts/ThemeContext";
import React from "react";
import ToggleDark from "./components/toggleDark";
import { ChatButton } from "./components/ChatButton";
import { PayButton } from "./components/PayButton";
import ConnectButton from "./components/ConnectButton";
import { Outlet, Link } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  if (localStorage.getItem("darkMode") === null) {
    localStorage.setItem("darkMode", darkMode);
  } else {
    if (localStorage.getItem("darkMode") === "false") {
      setDarkMode(!darkMode);
    }
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="text-warning">Twinkling Star</h1>

          <ChatButton />
        </header>

        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <ToggleDark
              toggleDark={() => {
                setDarkMode(!darkMode);
                // localStorage.setItem("darkMode", Boolean(!darkMode));
                changeTheme(darkMode ? themes.light : themes.dark);
                // localStorage.setItem("darkMode", !darkMode);
              }}
            />
          )}
        </ThemeContext.Consumer>

        <footer className="center footer">
          <Container>
            <PayButton />
            <ConnectButton />
            {/* <Button onClick={}>Connect via Arcana</Button> */}
            <Link to="/auth">Arcana Login</Link>
          </Container>
        </footer>
      </div>
      <Outlet />
    </>
  );
}

export default App;
