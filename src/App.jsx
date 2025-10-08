import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Coin from "./Pages/Coin";
import { Box, ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme } from '@mui/material/styles';

const useStyles = makeStyles({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#0c0101ff"
    },
    type: 'dark'
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <div className={classes.App}>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coins/:id" element={<Coin />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
