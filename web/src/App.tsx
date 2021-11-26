import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import NewPage from "./pages/New";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const theme = {
    primary: "#3CB371",
    secondary: "#90EE90",
    background: "rgb(255, 255, 255)",
    text: "#d4d4da",
    white: "#fff",
    black: "#1817179b",
    silver: "#e4e4e76a"
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/new">
            <NewPage />
          </Route>
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
