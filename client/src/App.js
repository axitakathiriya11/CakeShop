import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./GlobalState";
import HeaderMenu from "./components/headers/HeaderMenu";
import MainPages from "./components/mainpages/Pages";
import HeaderLogo from "./components/headers/HeaderLogo";
import Header from "./components/headers/Header";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <HeaderLogo />
          <HeaderMenu />
          {/* <Header /> */}
          <MainPages />
        </div>
      </Router>
    </DataProvider> 
  );
}

export default App;
