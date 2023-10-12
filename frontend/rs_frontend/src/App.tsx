import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import RouteWrapper from "./routes";
import GlobalState from "./store/globalState";

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <div className="App">
          <RouteWrapper />
        </div>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
